<template>
  <h2 class="sec-title">latest works <sup></sup></h2>
  <div class="works-preview">
    <!-- 프로젝트가 없을 때 -->
    <div v-if="!recentProjects || recentProjects.length === 0" class="no-projects">
      <p>프로젝트 데이터를 불러올 수 없습니다.</p>
    </div>

    <!-- 프로젝트 미리보기 -->
    <div v-else>
      <div class="project-grid">
        <div
          v-for="(project, index) in recentProjects"
          :key="project.id"
          :class="getGridClass(index)"
          class="project-item"
          @click="goToDetail(project.id)"
        >
          <div class="project-card">
            <div class="project-thumbnail">
              <img
                :src="
                  project.thumbnail ||
                  'https://via.placeholder.com/600x400/667eea/ffffff?text=No+Image'
                "
                :alt="project.title"
              />
              <div class="project-overlay">
                <span class="view-detail">자세히 보기</span>
              </div>
            </div>
            <div class="project-info">
              <span class="project-number">{{ String(index + 1).padStart(2, '0') }}</span>
              <h3 class="project-title">{{ project.title }}</h3>
              <p class="project-description">{{ project.description }}</p>
              <div v-if="project.tags && project.tags.length" class="project-tags">
                <span v-for="tag in project.tags" :key="tag" class="tag">
                  {{ tag }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- View All 버튼 -->
      <div class="view-all-section">
        <button class="view-all-button" @click="goToProjectsList">View All Projects →</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

// 데이터 파일에서 import
import { getRecentProjects } from '@/data/projects'

const router = useRouter()

// 최근 프로젝트 (홀수 개 권장: 7개 또는 9개)
const recentProjects = ref([])

onMounted(() => {
  console.log('========== WorksPreview 로드 ==========')
  try {
    // 7개 프로젝트 가져오기 (1개 큰 + 3세트 반복)
    recentProjects.value = getRecentProjects(7)
    console.log('최근 프로젝트:', recentProjects.value)
  } catch (error) {
    console.error('❌ 프로젝트 로드 에러:', error)
  }
  console.log('=======================================')
})

// Neundex 스타일 그리드 클래스
// 패턴: [큰(12)] → [중간(8) + 작은(4)] 반복
const getGridClass = (index) => {
  if (index === 0) {
    // 첫 번째: 크게
    return 'col-span-12 large'
  }

  // 나머지: 중간(8) + 작은(4) 반복
  const position = (index - 1) % 2

  if (position === 0) {
    return 'col-span-12 md:col-span-6 medium'
  } else {
    return 'col-span-12 md:col-span-6 small'
  }
}

// 프로젝트 상세 페이지로 이동
const goToDetail = (projectId) => {
  router.push({ name: 'project-detail', params: { id: projectId } })
}

// 전체 프로젝트 목록 페이지로 이동
const goToProjectsList = () => {
  router.push({ name: 'projects' })
}
</script>
<style lang="scss">
//home works
.works-preview {
  width: 100%;
}

.no-projects {
  text-align: center;
  padding: 60px 20px;

  p {
    font-size: 18px;
    color: #666;
  }
}

.project-grid {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 200px 10px;
  margin-bottom: 60px;
}

.project-item {
  // 크기별 높이 설정
  &.large {
    min-height: 600px;

    // .project-thumbnail {
    //   padding-top: 60%;
    // }
    .project-card {
      //width: 50%;
      margin: 0 auto;
      flex-direction: row-reverse;
      justify-content: center;
      .project-thumbnail {
        width: 50%;
      }
    }
  }

  &.medium {
    min-height: 500px;

    .project-thumbnail {
      width: 75%;
    }
  }

  &.small {
    @media (min-width: 1024px) {
      height: 250px;
    }
    .project-thumbnail {
      width: 50%;
    }
    .project-card {
      flex-direction: row-reverse;
    }
    .project-info {
      flex: 1;
      @media (min-width: 1024px) {
        text-align: right;
      }
    }
    .project-tags {
      @media (min-width: 1024px) {
        justify-content: flex-end;
      }
    }
  }

  // 모바일에서는 모두 전체 너비
  @media (max-width: 1024px) {
    grid-column: span 12 !important;
    min-height: 350px !important;
    .project-card,
    .project-thumbnail {
      width: 100% !important;
    }
    .project-card {
      flex-direction: column !important;
    }
    .project-thumbnail {
      padding-top: 66.67% !important;
    }
  }
}

.project-card {
  background: #ffffff;
  //border-radius: 16px;
  //overflow: hidden;
  //box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  height: 100%;
  display: flex;
  //flex-direction: column;

  &:hover {
    transform: translateY(-8px);
    //box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);

    .project-overlay {
      opacity: 1;
    }

    .project-thumbnail img {
      transform: scale(1.08);
    }

    .project-number {
      opacity: 0.5;
    }
  }
}

.project-thumbnail {
  position: relative;
  width: 100%;
  overflow: hidden;
  background: #f0f0f0;
  flex: 0 0 auto;
  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .project-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.75);
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: opacity 0.3s ease;

    .view-detail {
      color: #ffffff;
      font-size: 16px;
      font-weight: 600;
      padding: 12px 28px;
      border: 2px solid rgba(255, 255, 255, 0.8);
      border-radius: 50px;
      backdrop-filter: blur(4px);
      transition: all 0.3s ease;

      &:hover {
        background: rgba(255, 255, 255, 0.1);
        border-color: #ffffff;
      }
    }
  }
}

.project-info {
  padding: 10px;
  display: flex;
  flex-direction: column;
  position: relative;
  justify-content: flex-end;
  flex: 0 0 auto;
  .project-number {
    font-size: 14px;
    font-weight: 600;
    color: #999;
    transition: opacity 0.3s ease;
  }

  .project-title {
    font-size: 22px;
    font-weight: 700;
    color: #1a1a1a;
    margin-bottom: 8px;
    line-height: 1.3;
  }

  .project-description {
    font-size: 15px;
    color: #666;
    margin-bottom: 16px;
    line-height: 1.6;
  }

  .project-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;

    .tag {
      display: inline-block;
      padding: 6px 14px;
      //background: rgba(0, 0, 0, 0.1);
      color: #000;
      font-size: 12px;
      font-weight: 600;
      border-radius: 20px;
      border: 1px solid rgba(0, 0, 0, 0.2);
      transition: all 0.3s ease;
    }
  }
}

// 큰 카드 스타일 조정
.project-item.large {
  .project-info {
    padding: 32px;

    .project-title {
      font-size: 28px;
      margin-bottom: 12px;
    }

    .project-description {
      font-size: 16px;
      margin-bottom: 20px;
    }

    .project-number {
      top: 32px;
      right: 32px;
      font-size: 16px;
    }
  }
}

.view-all-section {
  text-align: center;
  margin-top: 40px;

  .view-all-button {
    display: inline-block;
    padding: 16px 48px;
    background: #1a1a1a;
    color: #ffffff;
    border: 2px solid #1a1a1a;
    border-radius: 50px;
    font-size: 15px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    letter-spacing: 0.5px;

    &:hover {
      background: transparent;
      color: #1a1a1a;
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    }
  }
}

// 반응형
@media (max-width: 1023px) {
  .project-grid {
    gap: 16px;
  }

  .project-item.large {
    .project-info {
      padding: 24px;

      .project-title {
        font-size: 24px;
      }
    }
  }
}

@media (max-width: 767px) {
  .project-grid {
    gap: 20px;
    margin-bottom: 40px;
  }

  .project-info {
    padding: 20px;

    .project-number {
      top: 20px;
      right: 20px;
      font-size: 13px;
    }

    .project-title {
      font-size: 20px;
      padding-right: 35px;
    }

    .project-description {
      font-size: 14px;
    }
  }

  .view-all-button {
    padding: 14px 36px !important;
    font-size: 14px !important;
  }
}
</style>
