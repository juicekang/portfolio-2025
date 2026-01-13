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
<style lang="scss">
.project-detail-wrapper {
  min-height: 100vh;
  background: #ffffff;
  color: #000000;
}

// Loading
.loading {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #ffffff;

  .loading-bar {
    width: 200px;
    height: 2px;
    background: #f0f0f0;
    position: relative;
    overflow: hidden;

    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 50%;
      height: 100%;
      background: #000000;
      animation: loading 1.2s ease-in-out infinite;
    }
  }
}

@keyframes loading {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(300%);
  }
}

// Hero Section
.hero-section {
  padding: 160px 0 100px;

  .hero-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 40px;
  }

  .hero-number {
    font-size: 14px;
    font-weight: 500;
    letter-spacing: 0.2em;
    color: #999999;
    margin-bottom: 40px;
  }

  .hero-title {
    font-size: clamp(48px, 10vw, 120px);
    font-weight: 700;
    line-height: 0.95;
    letter-spacing: -0.03em;
    margin-bottom: 40px;
    color: #000000;
  }

  .hero-description {
    font-size: 20px;
    line-height: 1.6;
    color: #666666;
    max-width: 600px;
    font-weight: 300;
  }
}

// Info Section
.info-section {
  border-top: 1px solid #e5e5e5;
  border-bottom: 1px solid #e5e5e5;
  padding: 60px 0;

  .info-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 40px;
  }

  .info-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 40px;
  }

  .info-item {
    .info-label {
      display: block;
      font-size: 11px;
      font-weight: 600;
      letter-spacing: 0.15em;
      text-transform: uppercase;
      color: #999999;
      margin-bottom: 12px;
    }

    .info-value,
    .info-tags {
      font-size: 15px;
      line-height: 1.6;
      color: #000000;
      font-weight: 400;
    }

    .info-tags {
      span {
        color: #000000;
      }
    }
  }
}

// Image Section
.image-section {
  padding: 100px 0;

  .image-container {
    max-width: 1400px;
    margin: 0 auto;
    padding: 0 40px;

    img {
      width: 100%;
      height: auto;
      display: block;
    }
  }
}

// Text Section
.section-heading {
  font-size: 20px;
  font-weight: 700;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: #000;
  margin-bottom: 35px;
}
.text-section {
  padding: 100px 0;

  .text-container {
    max-width: 800px;
    margin: 0 auto;
    padding: 0 40px;
  }

  .section-text {
    font-size: 16px;
    line-height: 1.6;
    color: #333333;
    font-weight: 300;
  }
}

// List Section
.list-section {
  padding: 100px 0;

  .list-container {
    max-width: 800px;
    margin: 0 auto;
    padding: 0 40px;
  }

  .feature-list {
    list-style: none;
    padding: 0;
    margin: 0;

    li {
      display: flex;
      gap: 24px;
      padding: 20px 0;
      border-bottom: 1px solid #f0f0f0;

      &:first-child {
        border-top: 1px solid #f0f0f0;
      }

      .list-number {
        font-size: 14px;
        font-weight: 500;
        color: #999999;
        min-width: 30px;
      }

      .list-text {
        font-size: 16px;
        line-height: 1.6;
        color: #333333;
        flex: 1;
      }
    }
  }
}

// Contributions Section
.contributions-section {
  padding: 100px 0;
  background: #fafafa;

  .contributions-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 40px;
  }

  .contributions-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 40px;
  }

  .contribution-card {
    .contribution-title {
      font-size: 18px;
      font-weight: 600;
      color: #000000;
      margin-bottom: 12px;
    }

    .contribution-text {
      font-size: 15px;
      line-height: 1.7;
      color: #666666;
      font-weight: 300;
    }
  }
}

// Achievements Section
.achievements-section {
  padding: 100px 0;

  .achievements-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 40px;
  }

  .achievements-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 60px;
  }

  .achievement-item {
    .achievement-value {
      font-size: 64px;
      font-weight: 700;
      color: #000000;
      line-height: 1;
      margin-bottom: 12px;
    }

    .achievement-label {
      font-size: 11px;
      font-weight: 600;
      letter-spacing: 0.15em;
      text-transform: uppercase;
      color: #999999;
    }
  }
}

// Challenges Section
.challenges-section {
  padding: 100px 0;
  background: #fafafa;

  .challenges-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 40px;
  }

  .challenges-list {
    display: flex;
    flex-direction: column;
    gap: 80px;
  }

  .challenge-item {
    .challenge-title {
      font-size: 18px;
      font-weight: 600;
      color: #000000;
      margin-bottom: 32px;
    }

    .challenge-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 60px;
    }

    .challenge-col {
      .challenge-label {
        font-size: 11px;
        font-weight: 600;
        letter-spacing: 0.15em;
        text-transform: uppercase;
        margin-bottom: 16px;
      }

      .challenge-text {
        font-size: 15px;
        line-height: 1.7;
        color: #666666;
        font-weight: 300;
      }
    }
  }
}

// Links Section
.links-section {
  padding: 100px 0;

  .links-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 40px;
  }

  .links-grid {
    display: flex;
    flex-direction: column;
    gap: 2px;
    background: #000000;
    border: 2px solid #000000;
  }

  .link-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 24px 32px;
    background: #ffffff;
    color: #000000;
    text-decoration: none;
    font-size: 16px;
    font-weight: 500;
    transition: all 0.3s ease;

    .link-arrow {
      font-size: 20px;
      transition: transform 0.3s ease;
    }

    &:hover {
      background: #000000;
      color: #ffffff;

      .link-arrow {
        transform: translateX(8px);
      }
    }
  }
}

// Navigation Section
.navigation-section {
  border-top: 1px solid #e5e5e5;
  padding: 60px 0;

  .navigation-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 40px;
    display: flex;
    justify-content: space-between;
    gap: 20px;
  }

  .nav-button {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 0;
    background: none;
    border: none;
    font-size: 14px;
    font-weight: 500;
    color: #000000;
    cursor: pointer;
    transition: opacity 0.3s ease;

    .nav-arrow {
      font-size: 18px;
      transition: transform 0.3s ease;
    }

    &:hover {
      opacity: 0.5;

      .nav-arrow {
        &:first-child {
          transform: translateX(-4px);
        }
        &:last-child {
          transform: translateX(4px);
        }
      }
    }
  }
}

// Not Found
.not-found {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  .not-found-content {
    text-align: center;
    padding: 40px;

    h2 {
      font-size: 120px;
      font-weight: 700;
      color: #000000;
      margin-bottom: 20px;
    }

    p {
      font-size: 18px;
      color: #666666;
      margin-bottom: 40px;
    }

    .back-button {
      padding: 16px 32px;
      background: #000000;
      color: #ffffff;
      border: none;
      font-size: 14px;
      font-weight: 500;
      cursor: pointer;
      transition: opacity 0.3s ease;

      &:hover {
        opacity: 0.8;
      }
    }
  }
}

// Responsive
@media (max-width: 1024px) {
  .hero-section {
    padding: 120px 0 80px;

    .hero-container {
      padding: 0 30px;
    }
  }

  .info-container,
  .image-container,
  .text-container,
  .list-container,
  .contributions-container,
  .achievements-container,
  .challenges-container,
  .links-container,
  .navigation-container {
    padding: 0 30px;
  }

  .challenge-grid {
    grid-template-columns: 1fr !important;
    gap: 40px !important;
  }
}

@media (max-width: 768px) {
  .hero-section {
    padding: 100px 0 60px;

    .hero-container {
      padding: 0 20px;
    }

    .hero-number {
      margin-bottom: 24px;
    }

    .hero-title {
      margin-bottom: 24px;
    }

    .hero-description {
      font-size: 16px;
    }
  }

  .info-section {
    padding: 40px 0;

    .info-grid {
      grid-template-columns: 1fr;
      gap: 24px;
    }
  }

  .image-section,
  .text-section,
  .list-section,
  .contributions-section,
  .achievements-section,
  .challenges-section,
  .links-section {
    padding: 60px 0;
  }

  .info-container,
  .image-container,
  .text-container,
  .list-container,
  .contributions-container,
  .achievements-container,
  .challenges-container,
  .links-container,
  .navigation-container {
    padding: 0 20px;
  }

  .contributions-grid,
  .achievements-grid {
    grid-template-columns: 1fr;
    gap: 32px;
  }

  .navigation-container {
    flex-direction: column;

    .nav-button {
      justify-content: space-between;
      width: 100%;
      padding: 16px 0;
      border-bottom: 1px solid #e5e5e5;
    }
  }

  .achievement-item .achievement-value {
    font-size: 48px;
  }
}
</style>
