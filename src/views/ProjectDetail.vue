<template>
  <div class="project-detail-wrapper">
    <!-- 로딩 -->
    <div v-if="isLoading" class="loading">
      <div class="loading-bar"></div>
    </div>

    <!-- 프로젝트 상세 -->
    <div v-else-if="project" class="project-detail">
      <!-- Hero Section -->
      <section class="hero-section">
        <div class="hero-container">
          <div class="hero-number">{{ String(project.id).padStart(2, '0') }}</div>
          <h1 class="hero-title">{{ project.title }}</h1>
          <p class="hero-description">{{ project.description }}</p>
        </div>
      </section>

      <!-- Info Grid -->
      <section class="info-section">
        <div class="info-container">
          <div class="info-grid">
            <div class="info-item">
              <span class="info-label">Period</span>
              <span class="info-value">{{ project.period }}</span>
            </div>
            <div class="info-item">
              <span class="info-label">Role</span>
              <span class="info-value">{{ project.role }}</span>
            </div>
            <div v-if="project.teamSize" class="info-item">
              <span class="info-label">Team</span>
              <span class="info-value">{{ project.teamSize }}</span>
            </div>
            <div v-if="project.tags?.length" class="info-item">
              <span class="info-label">Stack</span>
              <div class="info-tags">
                <span v-for="(tag, index) in project.tags" :key="tag">
                  {{ tag }}<span v-if="index < project.tags.length - 1">, </span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Main Image -->
      <section v-if="project.media?.length" class="project-media-section">
        <div class="container-fluid">
          <swiper
            :modules="[SwiperNavigation, SwiperPagination, SwiperAutoplay]"
            :slides-per-view="1"
            :space-between="0"
            :loop="true"
            :pagination="{ clickable: true, type: 'fraction' }"
            :navigation="true"
            :autoplay="{ delay: 5000, disableOnInteraction: false }"
            class="main-swiper"
          >
            <swiper-slide v-for="(item, index) in project.media" :key="index">
              <div class="media-container">
                <video
                  v-if="item.type === 'video'"
                  :src="item.url"
                  autoplay
                  muted
                  loop
                  playsinline
                  class="project-media-item"
                ></video>

                <img v-else :src="item.url" :alt="project.title" class="project-media-item" />
              </div>
            </swiper-slide>
          </swiper>
        </div>
      </section>

      <!-- Overview -->
      <section v-if="project.overview" class="text-section">
        <div class="text-container">
          <h2 class="section-heading">Overview</h2>
          <p class="section-text">{{ project.overview }}</p>
        </div>
      </section>

      <!-- 사용 기술 -->
      <section v-if="project.techStack?.length" class="text-section">
        <div class="text-container">
          <h2 class="section-heading">tech stacks</h2>
          <div class="tech-stack">
            <span v-for="tech in project.techStack" :key="tech" class="tech-tag">
              {{ tech }}
            </span>
          </div>
        </div>
      </section>

      <!-- Features -->
      <section v-if="project.features?.length" class="list-section">
        <div class="list-container">
          <h2 class="section-heading">Features</h2>
          <ul class="feature-list">
            <li v-for="(feature, index) in project.features" :key="index">
              <span class="list-number">{{ String(index + 1).padStart(2, '0') }}</span>
              <span class="list-text">{{ feature }}</span>
            </li>
          </ul>
        </div>
      </section>

      <!-- Contributions -->
      <section v-if="project.contributions?.length" class="contributions-section">
        <div class="contributions-container">
          <h2 class="section-heading">Contributions</h2>
          <div class="contributions-grid">
            <div
              v-for="(contribution, index) in project.contributions"
              :key="index"
              class="contribution-card"
            >
              <h3 class="contribution-title">{{ contribution.title }}</h3>
              <p class="contribution-text">{{ contribution.description }}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Achievements -->
      <section v-if="project.achievements?.length" class="achievements-section">
        <div class="achievements-container">
          <h2 class="section-heading">Results</h2>
          <div class="achievements-grid">
            <div
              v-for="(achievement, index) in project.achievements"
              :key="index"
              class="achievement-item"
            >
              <div class="achievement-value">{{ achievement.value }}</div>
              <div class="achievement-label">{{ achievement.label }}</div>
            </div>
          </div>
        </div>
      </section>

      <!-- Challenges -->
      <section v-if="project.challenges?.length" class="challenges-section">
        <div class="challenges-container">
          <h2 class="section-heading">Challenges</h2>
          <div class="challenges-list">
            <div
              v-for="(challenge, index) in project.challenges"
              :key="index"
              class="challenge-item"
            >
              <h3 class="challenge-title">{{ challenge.title }}</h3>
              <div class="challenge-grid">
                <div class="challenge-col">
                  <h4 class="challenge-label text-red-500">Problem</h4>
                  <p class="challenge-text">{{ challenge.problem }}</p>
                </div>
                <div class="challenge-col">
                  <h4 class="challenge-label text-green-500">Solution</h4>
                  <p class="challenge-text">{{ challenge.solution }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Links -->
      <section v-if="liveLinks.length || project.links?.github" class="links-section">
        <div class="links-container">
          <h2 class="section-heading">Links</h2>
          <div class="links-grid">
            <a
              v-for="(link, index) in liveLinks"
              :key="index"
              :href="link.url"
              target="_blank"
              rel="noopener noreferrer"
              class="link-item"
            >
              <span>{{ link.label }}</span>
              <span class="link-arrow">→</span>
            </a>
            <a
              v-if="project.links?.github"
              :href="project.links.github"
              target="_blank"
              rel="noopener noreferrer"
              class="link-item"
            >
              <span>GitHub</span>
              <span class="link-arrow">→</span>
            </a>
          </div>
        </div>
      </section>

      <!-- Navigation -->
      <section class="navigation-section">
        <div class="navigation-container">
          <button @click="goHome" class="nav-button">
            <span class="nav-arrow">←</span>
            <span>Back to Projects</span>
          </button>
          <button @click="goToNextProject" class="nav-button">
            <span>Next Project</span>
            <span class="nav-arrow">→</span>
          </button>
        </div>
      </section>
    </div>

    <!-- Not Found -->
    <div v-else class="not-found">
      <div class="not-found-content">
        <h2>404</h2>
        <p>Project not found</p>
        <button @click="goHome" class="back-button">Back to Home</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, watch } from 'vue' // watch 추가
import { useRouter, useRoute } from 'vue-router'
import { getProjectById, projects } from '@/data/projects'

// Swiper 관련 임포트
import { Swiper, SwiperSlide } from 'swiper/vue'
import {
  Navigation as SwiperNavigation,
  Pagination as SwiperPagination,
  Autoplay as SwiperAutoplay,
} from 'swiper/modules'

// Swiper CSS 임포트
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const router = useRouter()
const route = useRoute()

const project = ref(null)
const isLoading = ref(true)
const allProjects = ref(projects || [])

/**
 * 데이터를 불러오는 로직을 별도 함수로 분리
 */
const loadProjectData = (id) => {
  isLoading.value = true
  // route.params.id는 문자열일 수 있으므로 숫자로 변환하여 검색
  project.value = getProjectById(Number(id))

  setTimeout(() => {
    isLoading.value = false
  }, 400)
}

/**
 * 컴포넌트가 처음 마운트될 때 실행
 */
onMounted(() => {
  loadProjectData(route.params.id)
})

/**
 * ★ URL 파라미터(ID)가 변경될 때마다 데이터를 새로 로드
 * 이 부분이 있어야 '다음 프로젝트' 클릭 시 내용이 바뀝니다.
 */
watch(
  () => route.params.id,
  (newId) => {
    if (newId) {
      loadProjectData(newId)
      // 페이지 이동 시 스크롤을 최상단으로 이동
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  },
)

const liveLinks = computed(() => {
  if (!project.value?.links?.live) return []
  if (typeof project.value.links.live === 'string') {
    return [{ label: 'View Site', url: project.value.links.live }]
  }
  return project.value.links.live
})

const goHome = () => {
  router.push({ name: 'home' })
}

const goToNextProject = () => {
  // 현재 프로젝트의 인덱스 찾기
  const currentIndex = allProjects.value.findIndex((p) => Number(p.id) === Number(project.value.id))

  // 다음 프로젝트 인덱스 계산 (마지막이면 처음으로)
  const nextIndex = (currentIndex + 1) % allProjects.value.length
  const nextProjectId = allProjects.value[nextIndex].id

  // 라우터 이동
  router.push({
    name: 'project-detail',
    params: { id: nextProjectId },
  })
}
</script>
