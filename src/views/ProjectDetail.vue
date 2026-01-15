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
            <span class="label">STACK</span>
            <span class="value">{{ project.tags?.join(', ') }}</span>
          </div>
          <div class="meta-col links" v-if="project.links?.live || project.links?.github">
            <a
              v-if="project.links?.live"
              :href="getLink(project.links.live)"
              target="_blank"
              class="link-btn"
              >Live Site ↗</a
            >
            <a
              v-if="project.links?.github"
              :href="project.links.github"
              target="_blank"
              class="link-btn"
              >GitHub ↗</a
            >
          </div>
        </div>
      </section>

      <section class="content-section white-bg" v-if="project.overview">
        <div class="container">
          <div class="split-layout">
            <div class="left-col sticky-col">
              <h2 class="section-title">Overview</h2>
            </div>
            <div class="right-col">
              <p class="body-text">{{ project.overview }}</p>

              <div class="features-box" v-if="project.features?.length">
                <h3 class="sub-title">Key Features</h3>
                <ul class="dot-list">
                  <li v-for="(feature, index) in project.features" :key="index">
                    {{ feature }}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="gallery-section" v-if="project.media?.length">
        <div class="container">
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

      <section class="challenge-section dark-bg" v-if="project.challenges?.length">
        <div class="container">
          <h2 class="section-title light">Process & Challenges</h2>

          <div class="cards-grid">
            <div v-for="(item, index) in project.challenges" :key="index" class="process-card">
              <div class="card-header">
                <span class="card-num">{{ String(index + 1).padStart(2, '0') }}</span>
                <h3 class="card-title">{{ item.title || 'Issue & Solution' }}</h3>
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

      <section class="next-nav">
        <button @click="goToNextProject" class="next-btn">
          <span class="sub">Next Project</span>
          <span class="main">Go to Next Case</span>
          <span class="arrow">→</span>
        </button>
      </section>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue'
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
  if (p.media && p.media.length > 0) return p.media[0].url
  return p.thumbnail || 'https://via.placeholder.com/1920x1080/333/fff'
}

const getLink = (link) => {
  return typeof link === 'string' ? link : link.url
}

onMounted(() => loadProjectData(route.params.id))
watch(
  () => route.params.id,
  (newId) => newId && loadProjectData(newId),
)

const goHome = () => router.push({ name: 'projects' })
const goToNextProject = () => {
  const currentIndex = allProjects.value.findIndex((p) => Number(p.id) === Number(project.value.id))
  const nextIndex = (currentIndex + 1) % allProjects.value.length
  router.push({ name: 'project-detail', params: { id: allProjects.value[nextIndex].id } })
}
</script>

<style lang="scss" scoped>
// Variables
$bg-light: #ffffff;
$bg-dark: #111111;
$text-light: #ffffff;
$text-dark: #111111;
$accent-color: #333;

.project-detail-editorial {
  width: 100%;
  background-color: $bg-light;
  color: $text-dark;
}

// Loading
.loading-screen {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  .loader-bar {
    width: 40px;
    height: 4px;
    background: #000;
    animation: pulse 1s infinite;
  }
}
@keyframes pulse {
  0% {
    width: 40px;
  }
  50% {
    width: 80px;
  }
  100% {
    width: 40px;
  }
}

// Container Utility
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 40px;
}

// 1. Hero Section (Full Bleed)
.hero-section {
  position: relative;
  height: 80vh; // 화면의 80% 차지
  min-height: 600px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  color: $text-light;
  overflow: hidden;

  .bg-image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
    z-index: 0;
    filter: grayscale(100%); // 배경 흑백처리로 세련됨 추가 (선택사항)
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.6); // 텍스트 가독성을 위한 어두운 막
    z-index: 1;
  }

  .hero-content {
    position: relative;
    z-index: 2;
    padding: 60px 40px;
    max-width: 1200px;
    width: 100%;
    margin: 0 auto;

    .hero-top {
      display: flex;
      justify-content: space-between;
      margin-bottom: 20px;
      .back-link {
        background: none;
        border: 1px solid rgba(255, 255, 255, 0.3);
        color: #fff;
        padding: 8px 16px;
        border-radius: 30px;
        cursor: pointer;
        transition: 0.3s;
        &:hover {
          background: #fff;
          color: #000;
        }
      }
      .project-year {
        font-weight: 700;
        opacity: 0.8;
      }
    }

    .project-title {
      font-size: clamp(48px, 8vw, 100px);
      font-weight: 800;
      line-height: 1.1;
      margin-bottom: 20px;
    }

    .project-summary {
      max-width: 600px;
      font-size: 18px;
      line-height: 1.6;
      opacity: 0.9;
    }
  }
}

// 2. Meta Info Bar
.meta-section {
  background: $bg-dark;
  color: $text-light;
  padding: 40px 0;

  .meta-container {
    @extend .container;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 30px;
  }

  .meta-col {
    display: flex;
    flex-direction: column;

    .label {
      font-size: 12px;
      color: #666;
      margin-bottom: 8px;
      font-weight: 700;
      letter-spacing: 0.05em;
    }
    .value {
      font-size: 16px;
      font-weight: 500;
    }

    &.links {
      flex-direction: row;
      gap: 10px;
      align-items: center;

      .link-btn {
        padding: 10px 20px;
        background: #fff;
        color: #000;
        text-decoration: none;
        font-weight: 700;
        font-size: 14px;
        &:hover {
          opacity: 0.8;
        }
      }
    }
  }
}

// 3. Overview (Split Layout)
.content-section {
  padding: 120px 0;

  .split-layout {
    display: flex;
    gap: 60px;

    .left-col {
      width: 30%;
      .section-title {
        font-size: 32px;
        font-weight: 800;
        text-transform: uppercase;
        border-top: 4px solid #000; // 포인트 라인
        padding-top: 20px;
      }
    }

    .right-col {
      width: 70%;
      .body-text {
        font-size: 18px;
        line-height: 1.8;
        color: #333;
        margin-bottom: 60px;
        white-space: pre-line;
      }

      .features-box {
        background: #f9f9f9;
        padding: 40px;
        border-left: 4px solid #000;

        .sub-title {
          font-size: 18px;
          margin-bottom: 20px;
          font-weight: 700;
        }
        .dot-list {
          padding-left: 20px;
          li {
            margin-bottom: 10px;
            line-height: 1.6;
          }
        }
      }
    }
  }
}

// 4. Visual Gallery
.gallery-section {
  padding-bottom: 120px;

  .gallery-grid {
    display: flex;
    flex-direction: column;
    gap: 60px; // 이미지 사이 간격을 넓혀서 내용이 많아보이게 함
  }

  .gallery-item {
    width: 100%;

    img,
    video {
      width: 100%;
      height: auto;
      display: block;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1); // 그림자로 입체감
    }

    .caption {
      margin-top: 15px;
      text-align: right;
      .img-num {
        font-size: 12px;
        color: #999;
        font-weight: 700;
        letter-spacing: 0.1em;
      }
    }
  }
}

// 5. Challenge Section (Dark)
.challenge-section {
  background: $bg-dark;
  color: $text-light;
  padding: 120px 0;

  .section-title.light {
    border-color: #fff;
    margin-bottom: 60px;
    font-size: 32px;
    font-weight: 800;
  }

  .cards-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 40px;
  }

  .process-card {
    background: #222;
    padding: 40px;
    border: 1px solid #333;
    transition: transform 0.3s;

    &:hover {
      transform: translateY(-10px);
      background: #2a2a2a;
    }

    .card-header {
      display: flex;
      justify-content: space-between;
      margin-bottom: 30px;
      border-bottom: 1px solid #444;
      padding-bottom: 20px;

      .card-num {
        font-size: 14px;
        color: #666;
        font-weight: 700;
      }
      .card-title {
        font-size: 20px;
        font-weight: 700;
      }
    }

    .card-body {
      .badge {
        display: inline-block;
        font-size: 10px;
        padding: 2px 6px;
        margin-bottom: 8px;
        font-weight: 700;
        &.red {
          color: #ff6b6b;
          border: 1px solid #ff6b6b;
        }
        &.green {
          color: #51cf66;
          border: 1px solid #51cf66;
        }
      }
      p {
        font-size: 15px;
        line-height: 1.6;
        color: #ccc;
        margin-bottom: 20px;
      }
    }
  }
}

// 6. Next Nav
.next-nav {
  border-top: 1px solid #eee;

  .next-btn {
    width: 100%;
    padding: 100px 0;
    background: #fff;
    border: none;
    cursor: pointer;
    transition: background 0.3s;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;

    &:hover {
      background: #f0f0f0;
    }

    .sub {
      font-size: 14px;
      color: #999;
      font-weight: 700;
      text-transform: uppercase;
    }
    .main {
      font-size: 40px;
      font-weight: 800;
      color: #000;
    }
    .arrow {
      font-size: 40px;
    }
  }
}

// Responsive
@media (max-width: 1024px) {
  .content-section .split-layout {
    flex-direction: column;
  }
  .content-section .split-layout .left-col {
    width: 100%;
    margin-bottom: 20px;
  }
  .content-section .split-layout .right-col {
    width: 100%;
  }

  .challenge-section .cards-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 768px) {
  .container {
    padding: 0 20px;
  }
  .hero-section {
    height: 60vh;
  }
  .meta-container {
    flex-direction: column;
    gap: 20px;
  }
  .next-nav .next-btn .main {
    font-size: 24px;
  }
}
</style>
