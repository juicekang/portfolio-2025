<template>
  <section class="my-works">
    <div class="works-header" :class="{ 'in-view': headerInView }" ref="headerRef">
      <h2 class="huge-title">
        <div class="reveal-text">latest works</div>
        <div class="reveal-text"><span class="year">(24—25)</span></div>
      </h2>
      <div class="header-desc fade-in">
        <p>FEATURED PROJECTS</p>
        <p>UI/UX & DEV</p>
      </div>
    </div>

    <div class="works-list">
      <div
        v-for="(project, index) in recentProjects"
        :key="project.id"
        class="work-item"
        :class="getLayoutClass(index)"
        ref="itemRefs"
        @click="goToDetail(project.id)"
      >
        <div class="txt-group">
          <span class="idx">
            {{ String(index + 1).padStart(2, '0') }}
          </span>
          <div class="meta">
            <h3>{{ project.title }}</h3>
            <p class="role">{{ project.role || 'Web Publisher' }}</p>
          </div>
        </div>

        <div class="img-group">
          <div class="img-aspect">
            <img
              :src="project.thumbnail || 'https://via.placeholder.com/800x600/111/fff'"
              :alt="project.title"
            />
            <div class="overlay">
              <span class="view-btn">VIEW CASE</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="works-footer" :class="{ 'in-view': footerInView }" ref="footerRef">
      <button class="more-btn" @click="goToProjectsList">ALL PROJECTS ↗</button>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, nextTick } from 'vue'
import { useRouter } from 'vue-router'
import { getRecentProjects } from '@/data/projects'

const router = useRouter()
const recentProjects = ref([])

// Refs for Animation
const headerRef = ref(null)
const footerRef = ref(null)
const itemRefs = ref([])
const headerInView = ref(false)
const footerInView = ref(false)

onMounted(async () => {
  recentProjects.value = getRecentProjects(6)

  await nextTick() // DOM 렌더링 대기
  initObserver()
})

// --- Intersection Observer Logic ---
const initObserver = () => {
  const options = {
    threshold: 0.15, // 15% 보이면 트리거
    rootMargin: '0px 0px -50px 0px',
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // 헤더
        if (entry.target === headerRef.value) {
          headerInView.value = true
        }
        // 푸터
        else if (entry.target === footerRef.value) {
          footerInView.value = true
        }
        // 리스트 아이템
        else {
          entry.target.classList.add('in-view')
        }
        // 한 번 실행 후 관찰 중지 (원하면 주석 처리)
        // observer.unobserve(entry.target)
      }
    })
  }, options)

  if (headerRef.value) observer.observe(headerRef.value)
  if (footerRef.value) observer.observe(footerRef.value)
  itemRefs.value.forEach((el) => observer.observe(el))
}

// Layout Pattern
const getLayoutClass = (index) => {
  const pattern = index % 4
  if (pattern === 0) return 'layout-left-large'
  if (pattern === 1) return 'layout-right-small offset-down'
  if (pattern === 2) return 'layout-center'
  if (pattern === 3) return 'layout-left-small offset-up'
  return 'layout-left-large'
}

const goToDetail = (id) => router.push({ name: 'project-detail', params: { id } })
const goToProjectsList = () => router.push({ name: 'projects' })
</script>

<style lang="scss" scoped></style>
