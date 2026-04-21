<script setup>
import Navbar from "@/components/Navbar.vue"
import Intro from "@/components/Intro.vue"
import Skills from "@/components/Skills.vue"
import Projects from "@/components/Projects.vue"
import Footer from "@/components/Footer.vue"
import Sidebar from "@/components/Sidebar.vue";

</script>

<template>
  <Navbar />
  <div class="page">
    <Sidebar />
    <div class="content">
      <div class="container">
        <Intro />

        <Skills />

        <Projects />
      </div>
    </div>
  </div>

  <Footer />
</template>

<style scoped>
.page {
  display: flex;
}

.content {
  flex: 1;
  display: flex;
  justify-content: center;
  padding: 40px 20px;
}

.container {
  width: 100%;
  max-width: 1000px;
}

@media (max-width: 768px) {
  .page {
    flex-direction: column;
  }

  .content {
    padding: 20px;
  }
}
</style>