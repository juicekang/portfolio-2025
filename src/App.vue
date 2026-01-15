<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { onMounted } from 'vue'
import Header from '@/components/Header.vue'
import AOS from 'aos'
import 'aos/dist/aos.css'
onMounted(() => {
  AOS.init({
    // 옵션 설정 (선택사항)
    offset: 100, // 트리거 포인트 (px)
    duration: 800, // 애니메이션 지속 시간 (ms)
    easing: 'ease-in-out', // 이징 함수
    delay: 100, // 지연 시간
    once: false, // true: 한 번만 실행, false: 스크롤 할 때마다 실행
    mirror: false, // 스크롤 올려도 애니메이션 실행 여부
  })
})
</script>

<template>
  <Header />
  <RouterView />
</template>
