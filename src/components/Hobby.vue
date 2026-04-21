<script setup>
import star from "@/assets/Aboutme/star.jpg"
import sp1 from "@/assets/Aboutme/sp1.jpg"
import img from "@/assets/Aboutme/img-0314.jpg"
import snowy from "@/assets/Aboutme/snowyscene.png"
import dune from "@/assets/Aboutme/dune3.JPG"
import donut from "@/assets/Aboutme/Donut3.png"
import pixel from "@/assets/Aboutme/Sprite-0002.gif"
</script>

<template>
  <!-- Section: Hobby -->
  <div class="banner">
  <section id="hobby">


    <h2>Meine Hobbys<img :src="pixel"/></h2>

    <ul>
      <li>Sprachen lernen (Japanisch & Französisch)</li>
      <li>Zeichnen und digitale Kunst</li>
      <li>3D-Modellierung</li>
    </ul>


    <div class="gallery">
      <img :src="star" alt="Star" class="gallery-img" />
      <img :src="sp1" alt="Special Image 1" class="gallery-img" />
      <img :src="img" alt="Special Image 2" class="gallery-img" />

      <img :src="donut" alt="Star" class="gallery-img" />
      <img :src="snowy" alt="Special Image 1" class="gallery-img" />
      <img :src="dune" alt="Special Image 2" class="gallery-img" />
    </div>
  </section>
  </div>


</template>

<style scoped>
.gallery {
  display: flex;
  gap: 10px;
  justify-content: center;
  margin-top: 20px;
  flex-wrap: wrap; /* Damit die Bilder bei kleinen Bildschirmen umbrechen */
}

.gallery-img {
  width: 100%; /* Die Breite des Bildes passt sich dem Container an */
  max-width: 320px; /* Maximale Breite für große Displays */
  height: auto; /* Die Höhe passt sich automatisch an */
  border-radius: 10px;
  object-fit: cover; /* Falls das Bild den Container überschreitet, wird es passend zugeschnitten */
}

h2 {
  font-size: 2.5rem;
  margin: 20px;
  color: #fdfdfd;
}

@media (max-width: 768px) {
  .gallery-img {
    width: 100%; /* Auf kleineren Bildschirmen nehmen die Bilder die volle Breite ein */
    margin-top: 20px;
  }
}
</style>