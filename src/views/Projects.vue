<template>
  <div class="works-preview">
    <!-- 프로젝트가 없을 때 -->
    <div v-if="!recentProjects || recentProjects.length === 0" class="no-projects">
      <p>프로젝트 데이터를 불러올 수 없습니다.</p>
    </div>

    <!-- 프로젝트 미리보기 -->
    <div v-else>
      <div class="projects-swiper-wrapper">
        <swiper
          :modules="modules"
          :slides-per-view="1.5"
          :space-between="20"
          :breakpoints="breakpoints"
          :pagination="{ clickable: true }"
          :navigation="true"
          class="projects-swiper"
        >
          <swiper-slide v-for="project in recentProjects" :key="project.id">
            <div class="project-card" @click="goToDetail(project.id)">
              <div class="project-thumbnail">
                <img 
                  :src="project.thumbnail || 'https://via.placeholder.com/600x400/667eea/ffffff?text=No+Image'" 
                  :alt="project.title" 
                />
                <div class="project-overlay">
                  <span class="view-detail">자세히 보기</span>
                </div>
              </div>
              <div class="project-info">
                <h3 class="project-title">{{ project.title }}</h3>
                <p class="project-description">{{ project.description }}</p>
                <div class="project-meta">
                  <span v-if="project.period" class="project-period">{{ project.period }}</span>
                  <span v-if="project.role" class="project-role">{{ project.role }}</span>
                </div>
                <div v-if="project.tags && project.tags.length" class="project-tags">
                  <span v-for="tag in project.tags" :key="tag" class="tag">
                    {{ tag }}
                  </span>
                </div>
              </div>
            </div>
          </swiper-slide>
        </swiper>
      </div>

      <!-- View All 버튼 -->
      <div class="view-all-section">
        <button class="view-all-button" @click="goToProjectsList">
          View All Projects →
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Pagination } from 'swiper/modules'

// Swiper CSS
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

// 데이터 파일에서 import
import { getRecentProjects } from '@/data/projects'

const router = useRouter()
const modules = [Navigation, Pagination]

// 최근 프로젝트 4개만
const recentProjects = ref([])

onMounted(() => {
  console.log('========== WorksPreview 로드 ==========')
  try {
    // 최근 4개 프로젝트 가져오기
    recentProjects.value = getRecentProjects(4)
    console.log('최근 프로젝트 4개:', recentProjects.value)
  } catch (error) {
    console.error('❌ 프로젝트 로드 에러:', error)
  }
  console.log('=======================================')
})

// Swiper 반응형 설정
const breakpoints = {
  320: {
    slidesPerView: 1.5,
    spaceBetween: 16
  },
  768: {
    slidesPerView: 2.5,
    spaceBetween: 20
  },
  1024: {
    slidesPerView: 3.5,
    spaceBetween: 24
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

<style lang="scss" scoped>
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

.projects-swiper-wrapper {
  position: relative;
  width: 100%;
  margin-bottom: 40px;
}

.projects-swiper {
  padding-bottom: 60px;

  :deep(.swiper-button-prev),
  :deep(.swiper-button-next) {
    width: 48px;
    height: 48px;
    background: #ffffff;
    border-radius: 50%;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    transition: all 0.3s;

    &::after {
      font-size: 20px;
      font-weight: 700;
      color: #333;
    }

    &:hover {
      background: #667eea;
      transform: scale(1.1);

      &::after {
        color: #ffffff;
      }
    }
  }

  :deep(.swiper-pagination) {
    bottom: 20px;

    .swiper-pagination-bullet {
      width: 10px;
      height: 10px;
      background: #ccc;
      opacity: 1;
      transition: all 0.3s;

      &-active {
        width: 30px;
        border-radius: 5px;
        background: #667eea;
      }
    }
  }
}

.project-card {
  background: #ffffff;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  cursor: pointer;
  transition: all 0.3s;
  height: 100%;
  display: flex;
  flex-direction: column;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);

    .project-overlay {
      opacity: 1;
    }

    .project-thumbnail img {
      transform: scale(1.05);
    }
  }
}

.project-thumbnail {
  position: relative;
  width: 100%;
  padding-top: 66.67%;
  overflow: hidden;
  background: #f0f0f0;

  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s;
  }

  .project-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(102, 126, 234, 0.9);
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: opacity 0.3s;

    .view-detail {
      color: #ffffff;
      font-size: 18px;
      font-weight: 600;
      padding: 12px 24px;
      border: 2px solid #ffffff;
      border-radius: 8px;
    }
  }
}

.project-info {
  padding: 24px;
  flex: 1;
  display: flex;
  flex-direction: column;

  .project-title {
    font-size: 22px;
    font-weight: 700;
    color: #1a1a1a;
    margin-bottom: 8px;
    line-height: 1.4;
  }

  .project-description {
    font-size: 15px;
    color: #666;
    margin-bottom: 16px;
    line-height: 1.6;
  }

  .project-meta {
    display: flex;
    gap: 12px;
    margin-bottom: 16px;
    font-size: 14px;
    color: #999;

    span {
      display: flex;
      align-items: center;

      &::before {
        content: '';
        width: 4px;
        height: 4px;
        background: #999;
        border-radius: 50%;
        margin-right: 6px;
      }
    }
  }

  .project-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-top: auto;

    .tag {
      display: inline-block;
      padding: 6px 12px;
      background: #f0f4ff;
      color: #667eea;
      font-size: 13px;
      font-weight: 500;
      border-radius: 6px;
    }
  }
}

.view-all-section {
  text-align: center;
  margin-top: 20px;

  .view-all-button {
    display: inline-block;
    padding: 16px 40px;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: #ffffff;
    border: none;
    border-radius: 50px;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s;
    box-shadow: 0 4px 15px rgba(102, 126, 234, 0.3);

    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 25px rgba(102, 126, 234, 0.4);
    }
  }
}

@media (max-width: 1023px) {
  .project-info {
    padding: 20px;

    .project-title {
      font-size: 20px;
    }
  }
}

@media (max-width: 767px) {
  .projects-swiper {
    padding-bottom: 50px;

    :deep(.swiper-button-prev),
    :deep(.swiper-button-next) {
      display: none;
    }
  }

  .project-info {
    padding: 16px;

    .project-title {
      font-size: 18px;
    }

    .project-description {
      font-size: 14px;
    }

    .project-meta {
      flex-direction: column;
      gap: 4px;
    }
  }

  .view-all-button {
    padding: 14px 32px !important;
    font-size: 15px !important;
  }
}
</style>