<template>
  <div class="projects-list-page">
    <!-- Hero Section -->
    <section class="hero-section">
      <div class="hero-container">
        <div class="hero-label">projects</div>
        <h2 class="hero-title">
          all projects <sup>({{ allProjects.length }})</sup>
        </h2>
      </div>
    </section>
    <div class="container-fluid">
      <!-- 헤더 -->
      <!-- <div class="page-header">
        <button class="back-button" @click="goHome">
            <span class="arrow">←</span> 홈으로
          </button>
        <h2 class="page-title">
          all projects <sup>({{ allProjects.length }})</sup>
        </h2>
        <p class="page-description">진행했던 모든 프로젝트를 확인하세요</p>
      </div> -->

      <!-- 프로젝트가 없을 때 -->
      <div v-if="!allProjects || allProjects.length === 0" class="no-projects">
        <p>프로젝트가 없습니다.</p>
      </div>

      <!-- 프로젝트 그리드 -->
      <div v-else class="projects-grid">
        <div
          v-for="project in allProjects"
          :key="project.id"
          class="project-card"
          @click="goToDetail(project.id)"
        >
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
      </div>

      <!-- 통계 -->
      <div v-if="allProjects && allProjects.length > 0" class="projects-stats">
        <p>
          총 <strong>{{ allProjects.length }}</strong
          >개의 프로젝트
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { projects } from '@/data/projects'

const router = useRouter()
const allProjects = ref([])

onMounted(() => {
  console.log('========== ProjectsList 페이지 로드 ==========')
  try {
    allProjects.value = projects
    console.log('전체 프로젝트 수:', allProjects.value.length)
  } catch (error) {
    console.error('❌ 프로젝트 로드 에러:', error)
  }
  console.log('============================================')
})

const goHome = () => {
  router.push({ name: 'home' })
}

const goToDetail = (projectId) => {
  router.push({ name: 'project-detail', params: { id: projectId } })
}
</script>
<style lang="scss">
.projects-list-page {
  min-height: 100vh;
  padding: 0 0 100px;
  /* // .page-header {
  //   margin: 60px 0;

  //   .back-button {
  //     display: inline-flex;
  //     align-items: center;
  //     gap: 8px;
  //     padding: 10px 20px;
  //     background: #ffffff;
  //     border: 1px solid #e0e0e0;
  //     border-radius: 8px;
  //     font-size: 15px;
  //     color: #666;
  //     cursor: pointer;
  //     transition: all 0.3s;
  //     margin-bottom: 32px;

  //     .arrow {
  //       font-size: 18px;
  //     }
  //   }

  //   .page-title {
  //     font-size: 12rem;
  //     font-weight: 700;
  //     color: #000;
  //     margin-bottom: 16px;
  //     letter-spacing: -2px;
  //   }

  //   .page-description {
  //     font-size: 18px;
  //     color: #666;
  //   }
  // } */
  .container-fluid {
    max-width: 1200px;
    margin: 0 auto;
  }
  .no-projects {
    text-align: center;
    padding: 100px 20px;

    p {
      font-size: 20px;
      color: #666;
    }
  }

  .projects-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
    gap: 32px;
    margin-bottom: 60px;
    padding: 120px 0;
  }

  .project-card {
    background: #ffffff;
    border-radius: 5px;
    overflow: hidden;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
    cursor: pointer;
    transition: all 0.3s;
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
      flex-wrap: wrap;

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

  .projects-stats {
    text-align: center;
    padding: 40px 20px;
    border-top: 1px solid #e0e0e0;

    p {
      font-size: 18px;
      color: #666;

      strong {
        color: #000;
        font-size: 24px;
      }
    }
  }

  // 반응형
  @media (max-width: 1023px) {
    .projects-list-page {
      padding: 40px 0 80px;
    }

    .page-header {
      margin-bottom: 40px;

      .page-title {
        font-size: 36px;
      }

      .page-description {
        font-size: 16px;
      }
    }

    .projects-grid {
      grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
      gap: 24px;
    }
  }

  @media (max-width: 767px) {
    .projects-list-page {
      padding: 30px 0 60px;
    }

    .container {
      padding: 0 16px;
    }

    .page-header {
      margin-bottom: 32px;

      .page-title {
        font-size: 28px;
      }

      .page-description {
        font-size: 15px;
      }
    }

    .projects-grid {
      grid-template-columns: 1fr;
      gap: 20px;
    }

    .project-info {
      padding: 20px;

      .project-title {
        font-size: 20px;
      }

      .project-description {
        font-size: 14px;
      }

      .project-meta {
        flex-direction: column;
        gap: 4px;
      }
    }
  }
}
</style>
