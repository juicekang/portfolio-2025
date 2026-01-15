<template>
  <div class="project-detail-editorial">
    <div v-if="isLoading" class="loading-screen">
      <div class="loader-bar"></div>
    </div>

    <div v-else-if="project">
      <section class="hero-section">
        <div class="bg-image" :style="{ backgroundImage: `url(${getMainImage(project)})` }"></div>
        <div class="overlay"></div>

        <div class="hero-content">
          <div class="hero-top">
            <button @click="goHome" class="back-link">← All Projects</button>
            <span class="project-year">{{ project.period?.split(' ')[0] || '2025' }}</span>
          </div>

          <h1 class="project-title">{{ project.title }}</h1>
          <div class="project-summary">
            <p>{{ project.description }}</p>
          </div>
        </div>
      </section>

      <section class="meta-section">
        <div class="meta-container">
          <div class="meta-col">
            <span class="label">ROLE</span>
            <span class="value">{{ project.role }}</span>
          </div>
          <div class="meta-col">
            <span class="label">PERIOD</span>
            <span class="value">{{ project.period }}</span>
          </div>
          <div class="meta-col">
            <span class="label">TEAM</span>
            <span class="value">{{ project.teamSize || 'Solo Project' }}</span>
          </div>
          <div class="meta-col links" v-if="liveLinks.length || project.links?.github">
            <a
              v-for="(link, idx) in liveLinks"
              :key="idx"
              :href="link.url"
              target="_blank"
              class="link-btn"
            >
              {{ link.label || 'Live Site' }} ↗
            </a>
            <a
              v-if="project.links?.github"
              :href="project.links.github"
              target="_blank"
              class="link-btn"
            >
              GitHub ↗
            </a>
          </div>
        </div>
      </section>

      <section class="toolkit-section" v-if="project.techStack?.length || project.tags?.length">
        <div class="container-fluid">
          <div class="section-header">
            <h2 class="section-title">The Toolkit</h2>
            <p class="section-desc">Technologies & Libraries used in this project.</p>
          </div>
          <div class="tech-grid">
            <span v-for="tech in project.techStack || project.tags" :key="tech" class="tech-badge">
              {{ tech }}
            </span>
          </div>
        </div>
      </section>

      <section class="content-section white-bg">
        <div class="container-fluid">
          <div class="split-layout">
            <div class="left-col sticky-col">
              <h2 class="section-title-s">Project<br />Overview</h2>
            </div>
            <div class="right-col">
              <p class="body-text">{{ project.overview }}</p>
            </div>
          </div>

          <div class="features-wrapper" v-if="project.features?.length">
            <h3 class="sub-heading">Key Highlights</h3>
            <div class="features-grid">
              <div v-for="(feature, index) in project.features" :key="index" class="feature-card">
                <span class="f-num">{{ String(index + 1).padStart(2, '0') }}</span>
                <p class="f-text">{{ feature }}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="contribution-section dark-bg" v-if="project.contributions?.length">
        <div class="container-fluid">
          <h2 class="section-title light">My Contributions</h2>
          <div class="contributions-list">
            <div
              v-for="(item, index) in project.contributions"
              :key="index"
              class="contribution-row"
            >
              <div class="c-header">
                <span class="check-icon">✓</span>
                <h3 class="c-title">{{ item.title }}</h3>
              </div>
              <p class="c-desc">{{ item.description }}</p>
            </div>
          </div>
        </div>
      </section>

      <section class="gallery-section" v-if="project.media?.length">
        <div class="container-fluid">
          <h2 class="section-title-s mb-60">Visuals</h2>
          <div class="gallery-grid">
            <div v-for="(media, index) in project.media" :key="index" class="gallery-item">
              <video
                v-if="media.type === 'video'"
                :src="media.url"
                autoplay
                muted
                loop
                playsinline
              ></video>
              <img v-else :src="media.url" :alt="project.title" loading="lazy" />
              <div class="caption">
                <span class="img-num">FIG. {{ String(index + 1).padStart(2, '0') }}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="challenge-section gray-bg" v-if="project.challenges?.length">
        <div class="container-fluid">
          <h2 class="section-title">Process & Challenges</h2>

          <div class="cards-grid">
            <div v-for="(item, index) in project.challenges" :key="index" class="process-card">
              <div class="card-header">
                <span class="card-num">ISSUE {{ String(index + 1).padStart(2, '0') }}</span>
                <h3 class="card-title">{{ item.title || 'Challenge & Solution' }}</h3>
              </div>
              <div class="card-body">
                <div class="problem">
                  <span class="badge red">PROBLEM</span>
                  <p>{{ item.problem }}</p>
                </div>
                <div class="solution">
                  <span class="badge green">SOLUTION</span>
                  <p>{{ item.solution }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="results-section" v-if="project.achievements?.length">
        <div class="container-fluid">
          <div class="results-grid">
            <div v-for="(result, index) in project.achievements" :key="index" class="result-item">
              <span class="r-value">{{ result.value }}</span>
              <span class="r-label">{{ result.label }}</span>
            </div>
          </div>
        </div>
      </section>

      <section class="next-nav">
        <button @click="goToNextProject" class="next-btn">
          <span class="sub">Next Project</span>

          <span class="main">
            {{ nextProject ? nextProject.title : 'Go to Next Case' }}
          </span>

          <span class="arrow">→</span>
        </button>
      </section>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, watch, computed } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { getProjectById, projects } from '@/data/projects'

const router = useRouter()
const route = useRoute()
const project = ref(null)
const isLoading = ref(true)
const allProjects = ref(projects || [])

const loadProjectData = (id) => {
  isLoading.value = true
  project.value = getProjectById(Number(id))
  setTimeout(() => {
    isLoading.value = false
    window.scrollTo(0, 0)
  }, 500)
}

const getMainImage = (p) => {
  if (p.thumbnail && p.thumbnail.length > 0) return p.thumbnail
  return p.thumbnail || 'https://via.placeholder.com/1920x1080/333/fff'
}

const liveLinks = computed(() => {
  if (!project.value?.links?.live) return []
  if (typeof project.value.links.live === 'string') {
    return [{ label: 'Live Site', url: project.value.links.live }]
  }
  return project.value.links.live
})

// [추가됨] 다음 프로젝트 정보를 미리 계산해두는 computed
const nextProject = computed(() => {
  // 현재 프로젝트 데이터가 없으면 null 반환
  if (!project.value || allProjects.value.length === 0) return null

  // 현재 프로젝트의 인덱스 찾기
  const currentIndex = allProjects.value.findIndex((p) => Number(p.id) === Number(project.value.id))

  // 다음 인덱스 계산 (마지막 프로젝트면 다시 0번으로)
  const nextIndex = (currentIndex + 1) % allProjects.value.length

  // 다음 프로젝트 객체 반환
  return allProjects.value[nextIndex]
})

onMounted(() => loadProjectData(route.params.id))
watch(
  () => route.params.id,
  (newId) => newId && loadProjectData(newId),
)

const goHome = () => router.push({ name: 'projects' })

// [수정됨] 위에서 계산해둔 nextProject 변수를 활용
const goToNextProject = () => {
  if (nextProject.value) {
    router.push({ name: 'project-detail', params: { id: nextProject.value.id } })
  }
}
</script>
