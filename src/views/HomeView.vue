<template>
  <main>
    <section class="section-main">
      <div class="container-fluid">
        <div class="main-title">
          <img src="/src/images/minjukang.svg" alt="" class="main-logo-img" />
          <h2 class="sr-only">minju kang portfolio</h2>
        </div>
        <div class="main-info">
          <div class="grid grid-cols-5 gap-10">
            <div class="col-span-3 text-right h-full">
              <div class="typewriter-text-wrap flex flex-col h-full">
                <span class="typewriter-text">{{ displayedText }}</span>
                <div class="mt-auto">of</div>
              </div>
            </div>
            <div class="col-span-2">
              <p>my name is Minju Kang</p>
              <p>ui/ux developer</p>
              <p>seoul</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
  <section class="section-works container-fluid">
    <div class="container-fluid">
      <Works />
    </div>
  </section>
  <!-- <section class="section-works">
      <div class="container-fluid">
        <h2 class="section-title" style="text-align: right;">{ Works }</h2>
        <p class="page-description">지금까지 작업했던 프로젝트들을 소개합니다</p>
        <Works />
      </div>
      
    </section> -->
</template>
<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import Works from '@/views/Projects.vue'

// 표시할 텍스트 배열
const phrases = ['hello!', 'bonjour!', '안녕하세요!']
const currentPhraseIndex = ref(0) // 현재 문구 인덱스
const displayedText = ref('') // 실제로 화면에 표시될 텍스트
const isDeleting = ref(false) // 삭제 중인지 (true: 삭제, false: 타이핑)
const typingSpeed = 150 // 타이핑 속도 (ms)
const deletingSpeed = 75 // 삭제 속도 (ms)
const pauseTime = 1500 // 문구를 완전히 표시한 후 대기 시간 (ms)
let loopTimeout = null // 루프 제어를 위한 타이머

/**
 * 타이핑/삭제 로직을 처리하는 핵심 함수
 */
const handleType = () => {
  const currentPhrase = phrases[currentPhraseIndex.value]

  if (isDeleting.value) {
    // 텍스트 삭제 단계
    if (displayedText.value.length > 0) {
      displayedText.value = currentPhrase.substring(0, displayedText.value.length - 1)

      // 다음 단계: 다음 문자 삭제 (삭제 속도로)
      const speed = deletingSpeed
      loopTimeout = setTimeout(handleType, speed)
    } else {
      // 삭제 완료, 다음 문구로 전환
      isDeleting.value = false
      currentPhraseIndex.value = (currentPhraseIndex.value + 1) % phrases.length

      // 다음 문구 타이핑 시작
      loopTimeout = setTimeout(handleType, typingSpeed + 50)
    }
  } else {
    // 텍스트 타이핑 단계
    if (displayedText.value.length < currentPhrase.length) {
      displayedText.value = currentPhrase.substring(0, displayedText.value.length + 1)

      // 다음 단계: 다음 문자 타이핑 (타이핑 속도로)
      const speed = typingSpeed - Math.random() * 50 // 좀 더 자연스러운 속도 변화
      loopTimeout = setTimeout(handleType, speed)
    } else {
      // 타이핑 완료, 잠시 멈춘 후 삭제 단계로 전환
      isDeleting.value = true
      loopTimeout = setTimeout(handleType, pauseTime)
    }
  }
}

onMounted(() => {
  // 컴포넌트가 마운트되면 애니메이션 시작
  handleType()
})

onUnmounted(() => {
  // 컴포넌트가 사라질 때 타이머 정리
  if (loopTimeout) {
    clearTimeout(loopTimeout)
  }
})
</script>
