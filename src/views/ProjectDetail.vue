<template>
    <div class="project-detail-wrapper">
      <!-- 로딩 상태 -->
      <div v-if="isLoading" class="loading">
        <p>프로젝트 로딩 중...</p>
      </div>
  
      <!-- 프로젝트 찾음 -->
      <div v-else-if="project" class="project-detail">
        <div class="container">
          <!-- 홈으로 돌아가기 버튼 -->
          <button class="back-button" @click="goHome">
            <span class="arrow">←</span> 홈으로
          </button>
  
          <div class="project-header">
            <h1 class="project-title">{{ project.title }}</h1>
            <p class="project-subtitle">{{ project.description }}</p>
            <div class="project-meta">
              <div class="meta-item">
                <span class="label">기간</span>
                <span class="value">{{ project.period }}</span>
              </div>
              <div class="meta-item">
                <span class="label">역할</span>
                <span class="value">{{ project.role }}</span>
              </div>
              <div v-if="project.teamSize" class="meta-item">
                <span class="label">팀 규모</span>
                <span class="value">{{ project.teamSize }}</span>
              </div>
            </div>
          </div>
  
          <div v-if="project.mainImage" class="project-main-image">
            <img :src="project.mainImage" :alt="project.title" />
          </div>
  
          <div class="project-content">
            <section v-if="project.overview" class="content-section">
              <h2 class="section-title">프로젝트 개요</h2>
              <p class="section-text">{{ project.overview }}</p>
            </section>
  
            <section v-if="project.features?.length" class="content-section">
              <h2 class="section-title">주요 기능</h2>
              <ul class="feature-list">
                <li v-for="(feature, index) in project.features" :key="index">
                  {{ feature }}
                </li>
              </ul>
            </section>
  
            <section v-if="project.techStack?.length" class="content-section">
              <h2 class="section-title">사용 기술</h2>
              <div class="tech-stack">
                <span v-for="tech in project.techStack" :key="tech" class="tech-tag">
                  {{ tech }}
                </span>
              </div>
            </section>
  
            <section v-if="project.contributions?.length" class="content-section">
              <h2 class="section-title">나의 기여</h2>
              <ul class="contribution-list">
                <li v-for="(contribution, index) in project.contributions" :key="index">
                  <strong>{{ contribution.title }}</strong>
                  <p>{{ contribution.description }}</p>
                </li>
              </ul>
            </section>
  
            <section v-if="project.achievements?.length" class="content-section">
              <h2 class="section-title">프로젝트 성과</h2>
              <div class="achievements">
                <div
                  v-for="(achievement, index) in project.achievements"
                  :key="index"
                  class="achievement-card"
                >
                  <div class="achievement-number">{{ achievement.value }}</div>
                  <div class="achievement-label">{{ achievement.label }}</div>
                </div>
              </div>
            </section>
  
            <section v-if="project.challenges?.length" class="content-section">
              <h2 class="section-title">기술적 챌린지 & 해결</h2>
              <div
                v-for="(challenge, index) in project.challenges"
                :key="index"
                class="challenge-item"
              >
                <h3 class="challenge-title">{{ challenge.title }}</h3>
                <div class="challenge-content">
                  <div class="challenge-problem">
                    <h4>문제</h4>
                    <p>{{ challenge.problem }}</p>
                  </div>
                  <div class="challenge-solution">
                    <h4>해결</h4>
                    <p>{{ challenge.solution }}</p>
                  </div>
                </div>
              </div>
            </section>
  
            <section v-if="project.links" class="content-section">
              <h2 class="section-title">프로젝트 링크</h2>
              
              <!-- 서비스 중이 아닐 때 안내 문구 -->
              <p v-if="project.links.isService === false" class="service-notice">
                ⚠️ 현재 서비스 중인 페이지가 없어 포트폴리오 페이지로 이동합니다.
              </p>
              
              <div class="project-links">
                <!-- Live 링크들 (computed로 처리된 배열) -->
                <a
                  v-for="(link, index) in liveLinks"
                  :key="index"
                  :href="link.url"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="link-button primary"
                >
                  {{ link.label || '사이트 보기' }}
                </a>
                
                <!-- GitHub 링크 -->
                <a
                  v-if="project.links.github"
                  :href="project.links.github"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="link-button secondary"
                >
                  GitHub 저장소
                </a>
                
                <!-- 링크가 하나도 없을 때 -->
                <p v-if="!liveLinks.length && !project.links.github" class="no-links">
                  공개 가능한 링크가 없습니다.
                </p>
              </div>
            </section>
          </div>
  
          <div class="other-projects">
            <h2 class="section-title">다른 프로젝트</h2>
            <button class="view-all-button" @click="goHome">
            프로젝트 목록으로 돌아가기 →
          </button>
          </div>
        </div>
      </div>
  
      <!-- 프로젝트 없음 -->
      <div v-else class="project-not-found">
        <div class="container">
          <h2>프로젝트를 찾을 수 없습니다</h2>
          <div class="debug-info">
            <p>디버그 정보:</p>
            <ul>
              <li>요청한 ID: {{ route.params.id }}</li>
              <li>ID 타입: {{ typeof route.params.id }}</li>
              <li>전체 프로젝트 수: {{ allProjects.length }}</li>
              <li>프로젝트 ID 목록: {{ allProjects.map(p => p.id).join(', ') }}</li>
            </ul>
          </div>
          <button class="view-all-button" @click="goHome">
            프로젝트 목록으로 돌아가기 →
          </button>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, computed, onMounted } from 'vue'
  import { useRouter, useRoute } from 'vue-router'
  
  // 데이터 import
  import { getProjectById, projects } from '@/data/projects'
  
  const router = useRouter()
  const route = useRoute()
  
  const project = ref(null)
  const isLoading = ref(true)
  const allProjects = ref(projects || [])
  
  // live 링크를 유연하게 처리 (문자열/배열 둘 다 지원)
  const liveLinks = computed(() => {
    if (!project.value?.links?.live) return []
    
    // 문자열이면 배열로 변환 (기존 데이터 호환)
    if (typeof project.value.links.live === 'string') {
      return [{
        label: project.value.links.isService ? '실제 사이트 보기' : '포트폴리오 페이지',
        url: project.value.links.live
      }]
    }
    
    // 이미 배열이면 그대로 반환
    return project.value.links.live
  })
  
  onMounted(() => {
    console.log('========== ProjectDetail 페이지 로드 ==========')
    console.log('1. 현재 라우트:', route.path)
    console.log('2. route.params:', route.params)
    console.log('3. route.params.id:', route.params.id)
    console.log('4. 전체 projects:', projects)
    
    const projectId = route.params.id
    
    try {
      project.value = getProjectById(projectId)
      console.log('5. 찾은 project:', project.value)
      
      if (!project.value) {
        console.error('❌ 프로젝트를 찾을 수 없습니다!')
      } else {
        console.log('✅ 프로젝트 로드 성공!')
      }
    } catch (error) {
      console.error('❌ getProjectById 에러:', error)
    }
    
    console.log('=============================================')
    
    isLoading.value = false
  })
  
  // 홈으로 돌아가기
  const goHome = () => {
    router.push({ name: 'projects' })
  }
  </script>
  
  <style lang="scss" scoped>
  .project-detail-wrapper {
    min-height: 100vh;
    background: #ffffff;
  }
  
  .loading {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    font-size: 20px;
    color: #666;
  }
  
  .project-detail {
    padding: 40px 0 120px;
  }
  
  .container {
    max-width: 1000px;
    margin: 0 auto;
    padding: 0 20px;
  }
  
  .back-button {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 12px 20px;
    background: #f8f9fa;
    border: none;
    border-radius: 8px;
    font-size: 15px;
    color: #666;
    cursor: pointer;
    transition: all 0.3s;
    margin-bottom: 40px;
  
    .arrow {
      font-size: 20px;
    }
  
    &:hover {
      background: #667eea;
      color: #ffffff;
    }
  }
  
  .project-header {
    margin-bottom: 60px;
  
    .project-title {
      font-size: 42px;
      font-weight: 700;
      color: #1a1a1a;
      margin-bottom: 16px;
      line-height: 1.3;
    }
  
    .project-subtitle {
      font-size: 20px;
      color: #666;
      margin-bottom: 32px;
    }
  
    .project-meta {
      display: flex;
      gap: 40px;
      flex-wrap: wrap;
  
      .meta-item {
        display: flex;
        flex-direction: column;
        gap: 8px;
  
        .label {
          font-size: 13px;
          color: #999;
          font-weight: 500;
          text-transform: uppercase;
        }
  
        .value {
          font-size: 16px;
          color: #333;
          font-weight: 600;
        }
      }
    }
  }
  
  .project-main-image {
    width: 100%;
    border-radius: 16px;
    overflow: hidden;
    margin-bottom: 80px;
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
  
    img {
      width: 100%;
      height: auto;
      display: block;
    }
  }
  
  .project-content {
    .content-section {
      margin-bottom: 60px;
  
      .section-title {
        font-size: 28px;
        font-weight: 700;
        color: #1a1a1a;
        margin-bottom: 24px;
        padding-bottom: 12px;
        border-bottom: 2px solid #667eea;
      }
  
      .section-text {
        font-size: 16px;
        line-height: 1.8;
        color: #444;
      }
    }
  }
  
  .feature-list {
    list-style: none;
    padding: 0;
  
    li {
      font-size: 16px;
      line-height: 1.8;
      color: #444;
      padding-left: 28px;
      position: relative;
      margin-bottom: 12px;
  
      &::before {
        content: '✓';
        position: absolute;
        left: 0;
        color: #667eea;
        font-weight: 700;
        font-size: 18px;
      }
    }
  }
  
  .tech-stack {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
  
    .tech-tag {
      display: inline-block;
      padding: 10px 20px;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: #ffffff;
      font-size: 14px;
      font-weight: 600;
      border-radius: 8px;
      box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3);
    }
  }
  
  .contribution-list {
    list-style: none;
    padding: 0;
  
    li {
      background: #f8f9fa;
      padding: 24px;
      border-radius: 12px;
      margin-bottom: 16px;
      border-left: 4px solid #667eea;
  
      strong {
        font-size: 18px;
        color: #1a1a1a;
        display: block;
        margin-bottom: 8px;
      }
  
      p {
        font-size: 15px;
        line-height: 1.7;
        color: #666;
        margin: 0;
      }
    }
  }
  
  .achievements {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 24px;
  
    .achievement-card {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      padding: 32px;
      border-radius: 16px;
      text-align: center;
      color: #ffffff;
      box-shadow: 0 8px 24px rgba(102, 126, 234, 0.3);
  
      .achievement-number {
        font-size: 36px;
        font-weight: 700;
        margin-bottom: 8px;
      }
  
      .achievement-label {
        font-size: 14px;
        opacity: 0.9;
      }
    }
  }
  
  .challenge-item {
    background: #f8f9fa;
    padding: 32px;
    border-radius: 16px;
    margin-bottom: 24px;
  
    .challenge-title {
      font-size: 20px;
      font-weight: 700;
      color: #1a1a1a;
      margin-bottom: 20px;
    }
  
    .challenge-content {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 24px;
  
      .challenge-problem,
      .challenge-solution {
        h4 {
          font-size: 14px;
          font-weight: 600;
          color: #999;
          text-transform: uppercase;
          margin-bottom: 12px;
        }
  
        p {
          font-size: 15px;
          line-height: 1.7;
          color: #666;
        }
      }
  
      .challenge-problem h4 {
        color: #e74c3c;
      }
  
      .challenge-solution h4 {
        color: #27ae60;
      }
    }
  }
  
  .service-notice {
    background: #fff3cd;
    color: #856404;
    padding: 16px 20px;
    border-radius: 8px;
    border-left: 4px solid #ffc107;
    margin-bottom: 24px;
    font-size: 15px;
    line-height: 1.6;
  }
  
  .project-links {
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
  
    .link-button {
      display: inline-block;
      padding: 14px 28px;
      border-radius: 8px;
      font-size: 15px;
      font-weight: 600;
      text-decoration: none;
      transition: all 0.3s;
      white-space: nowrap;
  
      &.primary {
        background: #667eea;
        color: #ffffff;
  
        &:hover {
          background: #5568d3;
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(102, 126, 234, 0.4);
        }
      }
  
      &.secondary {
        background: #ffffff;
        color: #667eea;
        border: 2px solid #667eea;
  
        &:hover {
          background: #667eea;
          color: #ffffff;
          transform: translateY(-2px);
        }
      }
    }
  
    .no-links {
      color: #999;
      font-size: 15px;
      font-style: italic;
    }
  }
  
  .other-projects {
    margin-top: 100px;
    padding-top: 60px;
    border-top: 1px solid #e0e0e0;
    text-align: center;
  
    .section-title {
      font-size: 28px;
      font-weight: 700;
      color: #1a1a1a;
      margin-bottom: 24px;
    }
  
    .view-all-button {
      display: inline-block;
      padding: 14px 32px;
      background: #667eea;
      color: #ffffff;
      border: none;
      border-radius: 8px;
      font-size: 16px;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.3s;
  
      &:hover {
        background: #5568d3;
        transform: translateY(-2px);
        box-shadow: 0 8px 20px rgba(102, 126, 234, 0.4);
      }
    }
  }
  
  .project-not-found {
    padding: 120px 20px;
    text-align: center;
  
    h2 {
      font-size: 32px;
      color: #666;
      margin-bottom: 32px;
    }
  
    .debug-info {
      background: #f8f9fa;
      padding: 24px;
      border-radius: 12px;
      margin: 32px auto;
      max-width: 600px;
      text-align: left;
  
      p {
        font-weight: 700;
        margin-bottom: 16px;
        color: #333;
      }
  
      ul {
        list-style: none;
        padding: 0;
  
        li {
          padding: 8px 0;
          color: #666;
          font-family: monospace;
          font-size: 14px;
          border-bottom: 1px solid #e0e0e0;
  
          &:last-child {
            border-bottom: none;
          }
        }
      }
    }
  
    .view-all-button {
      display: inline-block;
      padding: 14px 32px;
      background: #667eea;
      color: #ffffff;
      border: none;
      border-radius: 8px;
      font-size: 16px;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.3s;
  
      &:hover {
        background: #5568d3;
        transform: translateY(-2px);
        box-shadow: 0 8px 20px rgba(102, 126, 234, 0.4);
      }
    }
  }
  
  @media (max-width: 767px) {
    .project-header {
      .project-title {
        font-size: 28px;
      }
  
      .project-subtitle {
        font-size: 16px;
      }
  
      .project-meta {
        flex-direction: column;
        gap: 16px;
      }
    }
  
    .project-content {
      .content-section {
        .section-title {
          font-size: 22px;
        }
      }
    }
  
    .challenge-content {
      grid-template-columns: 1fr !important;
    }
  
    .achievements {
      grid-template-columns: 1fr !important;
    }
  
    .project-links {
      flex-direction: column;
  
      .link-button {
        text-align: center;
        width: 100%;
      }
    }
  }
  </style>