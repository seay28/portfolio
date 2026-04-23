<script setup>
import { createRouter, createWebHistory } from 'vue-router'

</script>

<template>
  <nav class="navbar">
    <img src="../assets/lotus.png" alt="lotuslogo" class="logo" />
    <div class="links">
      <router-link to="/" class="nav-links"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 13" fill="currentColor" class="icon-small">
        <path d="M8.543 2.232a.75.75 0 0 0-1.085 0l-5.25 5.5A.75.75 0 0 0 2.75 9H4v4a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-1a1 1 0 1 1 2 0v1a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1V9h1.25a.75.75 0 0 0 .543-1.268l-5.25-5.5Z" />
      </svg>
        Home</router-link>
      <router-link to="/about-me" class="nav-links">Über mich</router-link>
    </div>
  </nav>
</template>

<style scoped>
.navbar{
  display:flex;
  justify-content:space-between;
  align-items:center;
  padding:20px 40px;
  background: #ff69aa;
  background: linear-gradient(131deg,rgba(255, 105, 170, 1) 0%, rgba(255, 169, 115, 1) 100%);}

.nav-links{
  margin-left:20px;
  text-decoration:none;
  color:#333;
}

.logo{
  font-weight:bold;
  font-size: 1rem;
}
img {
  width: 2.5rem;
}

.navbar .nav-links{
  color: white;
  font-weight: bolder;
  padding: 14px 20px;
  text-decoration: none;
  text-align: center;
}
.navbar .nav-links:hover {
  background-color: #6b62fd;
  color: #ffffff;
}

.icon-small {
  width: 1rem;
  height: 1rem;
}
</style>