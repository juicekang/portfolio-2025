<template>
  <div class="about-page">
    <section class="text-hero-section border-bottom">
      <div class="container-fluid" data-aos="fade-up">
        <div class="hero-label">ABOUT ME</div>
        <h2 class="hero-title">precision & passion</h2>
      </div>
    </section>

    <section class="profile-section border-bottom" data-aos="fade-up">
      <div class="container-fluid">
        <div class="profile-grid">
          <div class="profile-image-wrap border-right">
            <div
              class="image-placeholder profile-img-effect"
              style="background-image: url('/images/profile.jpg')"
            ></div>
          </div>

          <div class="profile-content">
            <div class="profile-header border-bottom">
              <h2 class="profile-name">강민주</h2>
              <p class="profile-title">Kang Minju / UI Developer</p>
            </div>

            <div class="profile-info">
              <div class="info-row border-bottom">
                <span class="info-label">Email</span>
                <a href="mailto:juicexoffee@gmail.com" class="info-value">juicexoffee@gmail.com</a>
              </div>
              <div class="info-row border-bottom">
                <span class="info-label">Birth</span>
                <span class="info-value">1992.11</span>
              </div>
              <div class="info-row border-bottom">
                <span class="info-label">Location</span>
                <span class="info-value">Seoul, Korea</span>
              </div>
              <div class="info-row">
                <span class="info-label">Experience</span>
                <span class="info-value">5 years +</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="intro-section border-bottom" data-aos="fade-up">
      <div class="container-fluid">
        <div class="intro-grid">
          <div class="intro-label-wrap border-right">
            <div class="intro-label section-heading-style">Introduction</div>
          </div>
          <div class="intro-content">
            <p class="intro-text">
              웹 접근성과 사용자 경험을 중심으로 UI를 구현하는 Frontend UI Developer입니다. 5년
              이상의 웹 퍼블리싱 경험을 바탕으로 시맨틱 마크업, SEO 최적화, 크로스 브라우징을 고려한
              안정적인 UI를 구현해왔습니다. 특히 웹접근성 품질인증마크 획득 프로젝트에 참여하며 모든
              사용자를 고려한 마크업 구조와 접근성 설계의 중요성을 깊이 이해하게 되었습니다.
            </p>
            <p class="intro-text">
              Vue 3 기반 프로젝트 경험을 통해 컴포넌트 구조를 활용한 UI 개발을 수행해왔으며,
              기획자·디자이너·개발자 사이에서 UI 구현 관점의 커뮤니케이션을 조율하는 역할을 맡아
              프로젝트 완성도를 높여왔습니다. 최근에는 사이드 프로젝트를 통해 API 연동, 상태
              관리(Pinia), TypeScript 등을 적용하며 프론트엔드 개발 역량을 확장하고 있습니다.
            </p>
            <p class="intro-text">
              탄탄한 마크업 전문성과 프론트엔드 기술을 결합하여 사용자 경험을 세밀하게 설계하고
              구현하는 개발자가 되는 것을 목표로 합니다.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="skills-section border-bottom" data-aos="fade-up">
      <div class="container-fluid">
        <h2 class="section-heading">Skills & Expertise</h2>

        <div class="skills-grid-wrap border-top border-bottom">
          <div class="skills-grid">
            <div class="skill-category border-right">
              <h3 class="category-title">Core Tech Stack</h3>
              <div class="skill-tags">
                <span class="skill-item core-skill">Vue 3 (Composition API)</span>
                <span class="skill-item core-skill">TypeScript</span>
                <span class="skill-item core-skill">Node.js</span>
                <span class="skill-item core-skill">Nuxt.js</span>
                <span class="skill-item core-skill">Vite</span>
                <span class="skill-item">JavaScript (ES6+)</span>
              </div>
            </div>

            <div class="skill-category">
              <h3 class="category-title">UI & Styling</h3>
              <div class="skill-tags">
                <span class="skill-item">HTML5 / Semantic Markup</span>
                <span class="skill-item">Sass/SCSS</span>
                <span class="skill-item">Tailwind CSS</span>
                <span class="skill-item">CSS Grid / Flexbox</span>
                <span class="skill-item">Responsive Web</span>
              </div>
            </div>

            <div class="skill-category border-top border-right">
              <h3 class="category-title">Architecture & Optimization</h3>
              <div class="skill-tags">
                <span class="skill-item">State Management (Pinia/Vuex)</span>
                <span class="skill-item">Web Accessibility (WCAG 2.1)</span>
                <span class="skill-item">SEO / Web Vitals Optimization</span>
                <span class="skill-item">Cross-Browsing</span>
              </div>
            </div>

            <div class="skill-category border-top">
              <h3 class="category-title">Tools & Environment</h3>
              <div class="skill-tags">
                <span class="skill-item">Git / GitHub Flow</span>
                <span class="skill-item">npm / yarn</span>
                <span class="skill-item">Figma / Zeplin</span>
                <span class="skill-item">Jira / Notion</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="experience-section border-bottom" data-aos="fade-up">
      <div class="container-fluid">
        <h2 class="section-heading">Work Experience</h2>

        <div class="timeline border-top">
          <div class="timeline-item border-bottom">
            <div class="timeline-date-wrap border-right">
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

          <div class="timeline-item border-bottom">
            <div class="timeline-date-wrap border-right">
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

    <section class="education-section border-bottom" data-aos="fade-up">
      <div class="container-fluid">
        <h2 class="section-heading">Education & Certificates</h2>

        <div class="edu-list-wrap border-top">
          <div class="edu-list-item border-bottom">
            <div class="edu-type">Education</div>
            <div class="edu-date">2011.03 – 2016.02</div>
            <div class="edu-info">
              <h3 class="edu-name">성신여자대학교</h3>
              <p class="edu-major">국어국문학 전공 / 컴퓨터소프트웨어학 부전공</p>
            </div>
          </div>

          <div class="edu-list-item border-bottom">
            <div class="edu-type">Certificate</div>
            <div class="edu-date">2020.02 – 2020.08</div>
            <div class="edu-info">
              <h3 class="edu-name">UI/UX 디자인 & 웹퍼블리셔 교육 과정 이수</h3>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="cta-section" data-aos="fade-up">
      <div class="container-fluid">
        <h2 class="cta-title">저와 함께 일해요!</h2>
        <p class="cta-description">Work hard, communicate well, and enjoy the ride.</p>
        <div class="cta-links">
          <a href="mailto:juicexoffee@gmail.com" class="cta-button primary"> 메일 보내기 </a>
          <!-- <a href="/resume.pdf" download class="cta-button secondary"> 이력서 다운 </a> -->
        </div>
      </div>
    </section>
  </div>
</template>
