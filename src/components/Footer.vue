<script setup xmlns="http://www.w3.org/1999/html">

</script>

<template>
  <footer id="contact">
    <p class="title">Let’s connect🌻 </p>

    <div class="links">

      <a href="https://github.com/seay28" target="_blank" class="link-card">
        GitHub
      </a>

      <a href="https://www.linkedin.com/in/serap-a-2701281b5/" target="_blank" class="link-card">
        LinkedIn
      </a>

      <a href="mailto:serap.aydin28@outlook.de" class="link-card email">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M5.404 14.596A6.5 6.5 0 1 1 16.5 10a1.25 1.25 0 0 1-2.5 0 4 4 0 1 0-.571 2.06A2.75 2.75 0 0 0 18 10a8 8 0 1 0-2.343 5.657.75.75 0 0 0-1.06-1.06 6.5 6.5 0 0 1-9.193 0ZM10 7.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5Z" clip-rule="evenodd" />
        </svg>
        Email
      </a>

    </div>
    <a href="https://www.flaticon.com/free-icons/lotus" title="lotus icons">Lotus icons created by Freepik - Flaticon</a>
  </footer>
</template>

<style scoped>
footer {
  text-align: center;
  padding: 60px 20px;
  margin-top: 100px;
  background: linear-gradient(135deg, #ff69aa, #ffa973);
  color: white;
  border-radius: 20px 20px 0 0;
}

.title {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 25px;
}

/* Layout */
.links {
  display: flex;
  justify-content: center;
  gap: 15px;
  flex-wrap: wrap;
  margin-bottom: 2rem;
}


.link-card {
  display: flex;
  align-items: center;
  gap: 8px;

  padding: 10px 16px;
  background: white;
  color: #6b62fd;
  text-decoration: none;

  border-radius: 12px;
  font-weight: 500;

  transition: all 0.25s ease;
}


.link-card:hover {
  transform: translateY(-3px);
  background: #6b62fd;
  color: white;
  box-shadow: 0 6px 20px rgba(0,0,0,0.15);
}


.link-card svg {
  width: 18px;
  height: 18px;
}


.email {
  font-weight: 600;
}
</style>