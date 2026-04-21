<script setup>
const links = [
  { label: 'About', target: 'about' },
  { label: 'Skills', target: 'skills' },
  { label: 'Projects', target: 'projects' },
  { label: 'Contact', target: 'contact' },
]

function scrollTo(id) {
  const el = document.getElementById(id)
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>

<template>
  <aside class="sidebar">
    <nav class="toc">
      <a
          v-for="link in links"
          :key="link.href"
          href="#"
          @click.prevent="scrollTo(link.target)"
          class="toc-link"
      >
        {{ link.label }}
      </a>
    </nav>

    <div class="vertical-line"></div>
  </aside>
</template>

<style scoped>
.sidebar {
  position: fixed;
  left: 10%;
  top: 0;
  height: 100vh;
  width: 180px;

  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  z-index: 1000;
}

.toc {
  display: flex;
  flex-direction: column;
  gap: 18px;
}

.toc-link {
  text-decoration: none;
  color: #333;
  font-weight: 600;
  font-size: 1.1rem;
  transition: color 0.2s ease, transform 0.2s ease;
}

.toc-link:hover {
  color: #6c63ff;
  transform: translateX(4px);
}

.vertical-line {
  border-right: 5px solid gray;
  height: 200px;
  margin-left: 30px;
  border-image: linear-gradient(to bottom, #fda774, rgba(0, 0, 0, 0)) 1 100%;
}

/* Tablet + mobile */
@media (max-width: 1600px) {
  .sidebar {
    left: 0;
    right: 0;
    top: auto;
    bottom: 0;

    width: 100%;
    height: auto;

    padding: 12px 16px;
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(8px);
    border-top: 1px solid #eee;
  }

  .toc {
    width: 100%;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    gap: 10px;
  }

  .toc-link {
    font-size: 0.95rem;
    transform: none;
  }

  .toc-link:hover {
    transform: none;
  }

  .vertical-line {
    display: none;
  }
}
</style>