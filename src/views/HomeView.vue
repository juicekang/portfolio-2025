<template>
  <main class="main-page">
    <section class="hero-section">
      <div class="hero-container">
        <div class="logo-wrapper border-bottom" :class="{ loaded: isLoaded }">
          <img src="/images/minjukang.svg" alt="MINJU KANG" class="main-logo-svg" />
          <h1 class="sr-only">MINJU KANG PORTFOLIO</h1>
        </div>

        <div class="hero-grid">
          <div class="grid-col statement-col border-right" :class="{ loaded: isLoaded }">
            <div class="statement-label">I AM A</div>
            <div class="typewriter-wrapper">
              <span class="typewriter-text">{{ displayedText }}</span>
              <span class="cursor" :class="{ blinking: !isDeleting }"></span>
            </div>
            <div class="statement-static">BASED IN SEOUL.</div>
          </div>

          <div class="grid-col meta-col" :class="{ loaded: isLoaded }">
            <div class="meta-row border-bottom">
              <span class="label">ROLE</span>
              <span class="value">UI/UX DEVELOPER<br />WEB PUBLISHER</span>
            </div>
            <div class="meta-row border-bottom">
              <span class="label">STATUS</span>
              <span class="value available">● AVAILABLE FOR WORK</span>
            </div>
            <div class="meta-row scroll-trigger-row">
              <div class="spin-badge">
                <svg viewBox="0 0 100 100" width="100" height="100">
                  <defs>
                    <path
                      id="circle"
                      d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                    />
                  </defs>
                  <text font-size="11.5">
                    <textPath xlink:href="#circle">SCROLL DOWN • VIEW PROJECTS •</textPath>
                  </text>
                </svg>
                <div class="arrow">↓</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="marquee-wrapper border-top border-bottom" :class="{ loaded: isLoaded }">
        <div class="marquee-track">
          <span v-for="n in 4" :key="n" class="marquee-item">
            HTML5 • CSS3 • JAVASCRIPT • VUE.JS • INTERACTIVE WEB • ACCESSIBILITY •
          </span>
        </div>
      </div>
    </section>

    <section class="section-works container-fluid">
      <Works />
    </section>
  </main>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import Works from '@/views/Projects.vue' // 경로 확인 필요

// --- Typewriter Logic ---
const phrases = ['WEB PUBLISHER', 'UI DEVELOPER', 'CREATIVE CODER', 'PROBLEM SOLVER']
const currentPhraseIndex = ref(0)
const displayedText = ref('')
const isDeleting = ref(false)
const typingSpeed = 100
const deletingSpeed = 50
const pauseTime = 2000
let loopTimeout = null

// --- Animation State ---
const isLoaded = ref(false)

const handleType = () => {
  const currentPhrase = phrases[currentPhraseIndex.value]

  if (isDeleting.value) {
    if (displayedText.value.length > 0) {
      displayedText.value = currentPhrase.substring(0, displayedText.value.length - 1)
      loopTimeout = setTimeout(handleType, deletingSpeed)
    } else {
      isDeleting.value = false
      currentPhraseIndex.value = (currentPhraseIndex.value + 1) % phrases.length
      loopTimeout = setTimeout(handleType, typingSpeed + 50)
    }
  } else {
    if (displayedText.value.length < currentPhrase.length) {
      displayedText.value = currentPhrase.substring(0, displayedText.value.length + 1)
      loopTimeout = setTimeout(handleType, typingSpeed)
    } else {
      isDeleting.value = true
      loopTimeout = setTimeout(handleType, pauseTime)
    }
  }
}

onMounted(() => {
  handleType()
  // 화면 로드 후 애니메이션 트리거
  setTimeout(() => {
    isLoaded.value = true
  }, 100)
})

onUnmounted(() => {
  if (loopTimeout) clearTimeout(loopTimeout)
})
</script>
