<script setup>
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";
import Hobby from "@/components/Hobby.vue";
import avian1 from "@/assets/Aboutme/avian_1.png";
</script>

<template>
  <Navbar />
  <div class="about-page">
    <div class="content">
      <div class="container">
        <!-- Kontakt Section -->
        <section id="contact">
          <h2>Kontakt</h2>
          <h3>Serap Aydin</h3>
          <h3>Angewandte Informatik - Hochschule Heilbronn</h3>
          <ul>
            <li>Email: <a href="mailto:serap.aydin28@outlook.de" target="_blank">serap.aydin28@outlook.de</a></li>
            <li>LinkedIn: <a href="https://www.linkedin.com/in/serap-a-2701281b5/" target="_blank">Mein Profil</a></li>
            <li>GitHub: <a href="https://github.com/seay28" target="_blank">GitHub Profil</a></li>
          </ul>
        </section>

        <hr>

        <!-- Studium Section -->
        <section id="studium">
          <h2>Studium</h2>
          <table>
            <tr>
              <td><strong>09.2024 – bis jetzt:</strong></td>
              <td>Angewandte Informatik, Hochschule Heilbronn</td>
            </tr>
            <tr>
              <td><strong>09.2021 – 09.2024:</strong></td>
              <td>Wirtschaftsinformatik, Hochschule Heilbronn</td>
            </tr>
          </table>

          <h2>Berufserfahrung</h2>
          <p><strong>04.2025 - 08.2026:</strong> HIWI-Data Sharing Framework (DSF) - GECKO Institute, Hochschule Heilbronn</p>
          <ul>
            <li>Öffentlichkeitsarbeit: Erstellung von Texten, Beiträgen und redaktionellen Inhalten</li>
            <li>Pflege und Weiterentwicklung der Projektwebseite <a href="https://dsf.dev/">dsf.dev</a> </li>
            <li>Konzeption und Gestaltung von UI/UX Mockups</li>
          </ul>
        </section>

        <hr>

        <!-- Banner Section -->
        <div class="banner">
          <Hobby />
          <img :src="avian1" alt="Birds" class="sketch" />
        </div>
      </div>
    </div>
  </div>

  <Footer />
</template>

<style scoped>
.hero {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 40px;
  margin-top: 60px;
}

.sketch {
  gap: 10px;
  margin-top: 20px;
  width: 100%;
  border-radius: 10px;
}

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

ul {
  list-style-type: square;
  padding: 1rem;
}

ul li {
  margin-bottom: 8px;
}

h2 {
  color: #6b62fd;
}

hr {
  margin: 40px 0;
}

.banner {
  background: linear-gradient(131deg, rgba(255, 105, 170), rgb(255, 169, 115));
  margin-top: 30px;
  border-radius: 10px;
  padding: 10px;
}

@media (max-width: 768px) {
  .page {
    flex-direction: column;
  }

  .content {
    padding: 20px;
  }

  .sketch {
    width: 80%;
    margin-top: 20px;
  }


}
</style>