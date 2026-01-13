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
