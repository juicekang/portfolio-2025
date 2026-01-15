<template>
  <div class="about-page">
    <section class="hero-section main-border-bottom">
      <div class="hero-container" data-aos="fade-up">
        <div class="hero-label">ABOUT ME</div>
        <h2 class="hero-title">precision & passion</h2>
      </div>
    </section>

    <section class="profile-section main-border-bottom" data-aos="fade-up">
      <div class="container-fluid">
        <div class="profile-grid">
          <div class="profile-image-wrap grid-border-right">
            <div
              class="image-placeholder profile-img-effect"
              style="background-image: url('/src/images/profile.jpg')"
            ></div>
          </div>

          <div class="profile-content">
            <div class="profile-header grid-border-bottom">
              <h2 class="profile-name">강민주</h2>
              <p class="profile-title">Kang Minju / Web Publisher</p>
            </div>

            <div class="profile-info">
              <div class="info-row grid-border-bottom">
                <span class="info-label">Email</span>
                <a href="mailto:juicexoffee@gmail.com" class="info-value">juicexoffee@gmail.com</a>
              </div>
              <div class="info-row grid-border-bottom">
                <span class="info-label">Birth</span>
                <span class="info-value">1992.11</span>
              </div>
              <div class="info-row grid-border-bottom">
                <span class="info-label">Location</span>
                <span class="info-value">Seoul, Korea</span>
              </div>
              <div class="info-row">
                <span class="info-label">Experience</span>
                <span class="info-value">5년 4개월</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="intro-section main-border-bottom" data-aos="fade-up">
      <div class="container-fluid">
        <div class="intro-grid">
          <div class="intro-label-wrap grid-border-right">
            <div class="intro-label section-heading-style">Introduction</div>
          </div>
          <div class="intro-content">
            <p class="intro-text">
              5년차 웹퍼블리셔로서 사용자 경험을 최우선으로 생각하며 웹 표준과 접근성을 준수하는
              고품질의 웹 페이지를 제작합니다. 시맨틱 마크업과 반응형 디자인에 대한 깊은 이해를
              바탕으로 디자이너와 개발자 사이의 가교 역할을 하며, 프로젝트의 성공적인 완수를 위해
              끊임없이 학습하고 발전하고 있습니다.
            </p>
            <p class="intro-text">
              최신 웹 기술과 트렌드에 대한 관심이 많으며, 효율적인 코드 작성과 성능 최적화를 통해
              사용자에게 최상의 경험을 제공하는 것을 목표로 합니다.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="skills-section main-border-bottom" data-aos="fade-up">
      <div class="container-fluid">
        <h2 class="section-heading">Skills & Expertise</h2>

        <div class="skills-grid-wrap grid-border-top grid-border-bottom">
          <div class="skills-grid">
            <div class="skill-category grid-border-right">
              <h3 class="category-title">Markup & Styling</h3>
              <ul class="skill-list">
                <li>HTML5, 시맨틱 마크업</li>
                <li>CSS3, Sass/SCSS</li>
                <li>반응형 & 적응형 웹 디자인</li>
                <li>CSS Grid, Flexbox</li>
                <li>Tailwind CSS</li>
              </ul>
            </div>

            <div class="skill-category">
              <h3 class="category-title">JavaScript & Frameworks</h3>
              <ul class="skill-list">
                <li>JavaScript (ES6+)</li>
                <li>Vue.js</li>
                <li>jQuery</li>
                <li>Vite</li>
                <li>npm</li>
              </ul>
            </div>

            <div class="skill-category grid-border-top grid-border-right">
              <h3 class="category-title">Accessibility & Optimization</h3>
              <ul class="skill-list">
                <li>웹 접근성 준수 (WCAG 2.1)</li>
                <li>크로스 브라우징 호환성</li>
                <li>검색 엔진 최적화 (SEO)</li>
                <li>웹 성능 최적화</li>
              </ul>
            </div>

            <div class="skill-category grid-border-top">
              <h3 class="category-title">Tools & Collaboration</h3>
              <ul class="skill-list">
                <li>Git, GitHub</li>
                <li>Figma, Zeplin</li>
                <li>VS Code</li>
                <li>Jira, Notion</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="experience-section main-border-bottom" data-aos="fade-up">
      <div class="container-fluid">
        <h2 class="section-heading">Work Experience</h2>

        <div class="timeline grid-border-top">
          <div class="timeline-item grid-border-bottom">
            <div class="timeline-date-wrap grid-border-right">
              <div class="timeline-date">2024.01 – 2025.11</div>
            </div>
            <div class="timeline-content">
              <h3 class="timeline-title">천재교육</h3>
              <p class="timeline-company">UX개발팀</p>
              <ul class="timeline-description">
                <li>Vue3 기반 AI 디지털 교육자료 플랫폼 구축</li>
                <li>Vue3 공통 UI 컴포넌트화 작업</li>
                <li>접근성 및 UDL 최적화</li>
                <li>크로스 브라우징 및 하위버전 OS 대응</li>
              </ul>
            </div>
          </div>

          <div class="timeline-item grid-border-bottom">
            <div class="timeline-date-wrap grid-border-right">
              <div class="timeline-date">2020.08 – 2023.12</div>
            </div>
            <div class="timeline-content">
              <h3 class="timeline-title">스케치북</h3>
              <p class="timeline-company">UI/UX Development Team</p>
              <ul class="timeline-description">
                <li>다양한 클라이언트 프로젝트 퍼블리싱</li>
                <li>크로스브라우징 대응 및 접근성 인증 마크 취득</li>
                <li>교육용 게임형 인터랙션 구현</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="education-section main-border-bottom" data-aos="fade-up">
      <div class="container-fluid">
        <div class="education-grid">
          <div class="education-col grid-border-right">
            <h2 class="section-heading">Education</h2>
            <div class="education-list grid-border-top">
              <div class="education-item grid-border-bottom">
                <div class="education-year">2011 – 2016</div>
                <h3 class="education-title">성신여자대학교</h3>
                <p class="education-major">국어국문학 전공 / 컴퓨터소프트웨어학 부전공</p>
              </div>
            </div>
          </div>

          <div class="education-col">
            <h2 class="section-heading">Certificates</h2>
          </div>
        </div>
      </div>
    </section>

    <section class="cta-section" data-aos="fade-up">
      <div class="cta-container">
        <h2 class="cta-title">Let's Work Together</h2>
        <p class="cta-description">새로운 프로젝트나 협업 기회에 대해 언제든 연락 주세요</p>
        <div class="cta-links">
          <a href="mailto:juicexoffee@gmail.com" class="cta-button primary"> Get in Touch </a>
          <a href="/resume.pdf" download class="cta-button secondary"> Download Resume </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
// 필요한 경우 데이터나 로직 추가
</script>
