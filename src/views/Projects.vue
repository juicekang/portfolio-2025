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
