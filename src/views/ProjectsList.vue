<template>
  <div class="projects-list-page">
    <section class="text-hero-section">
      <div class="hero-container" data-aos="fade-up">
        <div class="hero-label">ARCHIVE</div>
        <h2 class="hero-title">
          all projects <sup>({{ allProjects.length }})</sup>
        </h2>
      </div>
    </section>

    <div class="container-fluid" data-aos="fade-up" data-aos-delay="300">
      <div v-if="!allProjects || allProjects.length === 0" class="no-projects">
        <p>PROJECT DATA NOT FOUND.</p>
      </div>

      <div v-else class="projects-grid-wrap">
        <div class="projects-grid">
          <div
            v-for="(project, index) in allProjects"
            :key="project.id"
            class="project-card"
            @click="goToDetail(project.id)"
          >
            <div class="project-thumbnail">
              <img
                :src="
                  project.thumbnail || 'https://via.placeholder.com/600x400/333/fff?text=No+Image'
                "
                :alt="project.title"
              />
              <div class="project-overlay">
                <span class="view-detail">VIEW CASE</span>
              </div>
            </div>

            <div class="project-info">
              <div class="info-header">
                <span class="project-idx">{{ String(index + 1).padStart(2, '0') }}</span>
                <div class="project-meta">
                  <span v-if="project.year" class="meta-item">{{ project.year }}</span>
                  <span v-if="project.role" class="meta-item">{{ project.role }}</span>
                </div>
              </div>

              <h3 class="project-title">{{ project.title }}</h3>
              <p class="project-description">{{ project.description }}</p>

              <div v-if="project.tags && project.tags.length" class="project-tags">
                <span v-for="tag in project.tags" :key="tag" class="tag"> #{{ tag }} </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div v-if="allProjects && allProjects.length > 0" class="projects-stats">
        <span class="stat-label">TOTAL ARCHIVED</span>
        <span class="stat-value">{{ allProjects.length }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { projects } from '@/data/projects'

const router = useRouter()
const allProjects = ref([])

onMounted(() => {
  try {
    allProjects.value = projects
  } catch (error) {
    console.error('❌ 프로젝트 로드 에러:', error)
  }
})

const goToDetail = (projectId) => {
  router.push({ name: 'project-detail', params: { id: projectId } })
}
</script>
