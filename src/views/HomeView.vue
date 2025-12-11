<script setup>
// import TheWelcome from '../components/TheWelcome.vue'
</script>

<template>
  <main>
    <section class="section-main">
      <div class="container">
        <div class="main-title">
          <!-- <h1>UI/UX DEVEL{}PE</h1>
          <p>Portfolio</p> -->
          <h1>Bienvenue!</h1>
        </div>
        <div class="main-foot">
          <dl>
            <dt>KANG MINJU</dt>
            <dd>juicexoffee@gmail.com</dd>
          </dl>
          <p>UI/UX Development Portfolio</p>
        </div>
      </div>
    </section>
    <section class="section-about">
      <div class="container">
        <h2 class="section-title">{ About Me }</h2>
        <div class="row-container">
          <div class="about-row">
          <div class="profile">
            <div class="profile-img">

            </div>
            <dl>
              <dt>강민주 / KANG MINJU</dt>
              <dd>1992.11.04</dd>
              <dd>juicexoffee@gmail.com</dd>
            </dl>
          </div>
          <div class="desc">
            <dl>
              <dt>CHARACTER</dt>
              <dd>안녕하세요</dd>
            </dl>
            <dl>
              <dt>EDUCATION</dt>
              <dd>안녕하세요</dd>
            </dl>
            <dl>
              <dt>EXPERIENCES</dt>
              <dd>안녕하세요</dd>
            </dl>
            <dl>
              <dt>SKILLS</dt>
              <dd>안녕하세요</dd>
            </dl>
          </div>
        </div>
        </div>
        
      </div>
    </section>
    <section class="section-works">
      <div class="container">
        <h2 class="section-title" style="text-align: right;">{ Works }</h2>
        <p class="page-description">지금까지 작업했던 프로젝트들을 소개합니다</p>
        <Works />
      </div>
      
    </section>
  </main>
</template>
<script>
import Works from '@/views/Projects.vue'
</script>