<script setup>
import { ref, computed } from 'vue'

// Importing images
import Num1 from '@/assets/picture/numbud1.png'
import Num2 from '@/assets/picture/numbud2.png'
import AB1 from '@/assets/picture/abstandsrechner.png'
import AB2 from '@/assets/picture/abstandsrechner2.png'
import AB3 from '@/assets/picture/abstandsrechner3.png'
import AB4 from '@/assets/picture/abstandsrechner4.png'
import Zen1 from '@/assets/Picture/zen1.png'
import Zen2 from '@/assets/Picture/zen2.png'
import Zen3 from '@/assets/Picture/zen3.png'
import Zen4 from '@/assets/Picture/zen4.png'
import Event1 from '@/assets/Picture/Event1.png'
import Event2 from '@/assets/Picture/Event2.png'
import Event3 from '@/assets/Picture/Event3.png'
import Vin1 from '@/assets/Picture/vin1.png'
import Vin2 from '@/assets/Picture/vin2.png'
import Vin3 from '@/assets/Picture/vin3.png'
import Koch1 from '@/assets/Picture/Koch1.png'
import Koch2 from '@/assets/Picture/Koch2.png'
import Koch3 from '@/assets/Picture/Koch3.png'
import Match from '@/assets/Picture/match.jpg'
import STM from '@/assets/Picture/vishnu-mohanan-unsplash.jpg'

const selectedTag = ref('All')

const filterTags = ['All', 'Apps', 'Website', 'UX&UI', 'Embedded']

const projects = [
  {
    title: 'Taschenrechner App',
    description: 'Projekt im 1. Semester des Studiengangs Angewandte Informatik im Kurs „Mobile Systems“. Entwicklung einer Kotlin-App zur Durchführung grundlegender Rechenoperationen.',
    tags: ['Apps'],
    technologies: ['Kotlin', ' Jetpack Compose Material 3'],
    role: ['Entwickler'],
    images: [
      { src: Num1, alignVertical: true },
      { src: Num2, alignVertical: true }
    ]
  },
  {
    title: 'Abstandsrechner mit OpenStreetMap',
    description: 'Projekt im 1. Semester des Studiengangs Angewandte Informatik im Modul „Mobile Systems“. Entwicklung einer Kotlin-App zur Berechnung der Distanz zwischen zwei Koordinaten auf einer Karte. Die Distanz kann durch Auswahl auf der Karte oder durch manuelle Eingabe von Koordinaten bestimmt werden.',
    tags: ['Apps'],
    technologies: ['Kotlin', ' Jetpack Compose Material 3'],
    role: ['Entwickler'],
    images: [
      { src: AB1, alignVertical: true },
      { src: AB2, alignVertical: true },
      { src: AB3, alignVertical: true },
      { src: AB4, alignVertical: true }
    ]
  },
  {
    title: 'UI App design',
    description: 'Projekt im 3. Semester des Studiengangs Angewandte Informatik im Modul „Projektmanagement & Entwicklertools“. Im Rahmen eines Scrum-Prozesses wurde ein Tutorial für UI-Design-Tools erstellt.',
    tags: ['UX&UI'],
    technologies: ['Figma'],
    role: ['Entwickler', 'Product Owner', 'Designer'],
    images: [
      {src: Zen1, alignVertical: true},
      {src: Zen2, alignVertical: true},
      {src: Zen3, alignVertical: true},
      {src: Zen4, alignVertical: true}
    ]
  },
  {
    title: 'Vinfinity: Thrifiting App',
    description: 'Projekt im Rahmen des Studiengangs Wirtschaftsinformatik. Entwicklung eines High-Fidelity-UI-Mockups für eine Thrifting- und Vintage-Mode-App unter Anwendung des Design-Thinking-Ansatzes – von der Nutzeranalyse bis zum interaktiven Prototypen. Der Fokus lag auf einer intuitiven Benutzerführung sowie der gezielten Suche nach Vintage-Kleidungsstücken anhand individueller Kriterien.',
    tags: ['UX&UI'],
    technologies: ['Figma', 'Design Thinking'],
    role: ['Designer'],
    images: [
      {src: Vin1, alignVertical: true},
      {src: Vin2, alignVertical: true},
      {src: Vin3, alignVertical: true}
    ]
  },
  {
    title: 'EventsBC – Eventmanagement-Webanwendung',
    description: 'Teamprojekt im Rahmen des Studiengangs Wirtschaftsinformatik. Konzeption und Entwicklung eines webbasierten Prototyps für den Bildungscampus Heilbronn zur Organisation, Verwaltung und Darstellung von Veranstaltungen. Übernahme der Rolle des Product Owners mit Fokus auf Planung, Definition von User Stories und Abstimmung mit Stakeholdern.',
    tags: ['Website'],
    technologies: ['Python', 'Flask', 'SQlite', 'HTML&CSS', 'Scrum',],
    role: ['Product Owner'],
    images: [
      {src: Event1, alignVertical: false},
      {src: Event2, alignVertical: false},
      {src: Event3, alignVertical: false}
    ]
  },
  {
    title: 'Rezept Website',
    description: 'Projekt im Rahmen des Studiengangs Wirtschaftsinformatik. Entwicklung eines webbasierten Prototyps für eine Rezeptplattform mit Fokus auf grundlegende Funktionalität und Struktur.',
    tags: ['Website'],
    technologies: ['Python', 'Flask', 'HTML&CSS'],
    role: ['Entwickler'],
    images: [
      {src: Koch1, alignVertical: false},
      {src: Koch2, alignVertical: false},
      {src: Koch3, alignVertical: false}
    ]
  },
  {
    title: 'Embedded Systems Projekte',
    description: `Diverse Projekte im 2. und 3. Semester des Studiengangs Angewandte Informatik im Vertiefungsmodul „Mobile Computing“. Schwerpunkt auf Mikrocontrollern, Sensorik und hardwarenaher Programmierung.<ul>
      <li>Interaktives Binärzahl-Spiel mit dem STM NUCLEO-G431KB (Kurs: Technische Informatik)</li>
      <li>ESP32 zur Auslesung von Temperatur- und Luftdruckdaten über einen BMP280-Sensor (Kurs: Grundlagen der Sensorik)</li>
      <li>Assembler-Programmierung für ARM Cortex-M4 (STM32F411RE Nucleo) in C und Assembler (Kurs: Praktische Technische Informatik)</li>
      <li>Assembler-Programm für den PIC12F675 (Kurs: Praktische Technische Informatik)</li>
    </ul>`,
    tags: ['Embedded'],
    technologies: ['C', 'C++', 'ASM'],
    role: ['Entwickler'],
    images: [
      { src: STM, alignVertical: false }
    ]
  },
  {
    title: 'Work in Progress: Matchcontrol',
    description: 'Ein Projekt aus meinem aktuellen Semester: Matchcontrol wird eine Vereinsverwaltungssoftware.',
    tags: ['Website'],
    technologies: ['Java', 'Springboot', 'PostgreSQL', 'Vuejs', 'Scrum',],
    role: ['Entwickler'],
    images: [
      {src: Match, alignVertical: false},
    ]
  },
]

const filteredProjects = computed(() => {
  if (selectedTag.value === 'All') {
    return projects
  }

  return projects.filter(project => project.tags.includes(selectedTag.value))
})

const setTag = (tag) => {
  selectedTag.value = tag
}
</script>

<template>
  <section id="projects">
    <div class="banner">
      <h2>Projects</h2>
      <p>Hier ist eine Auswahl an Projekten, die ich während meines Studiums entwickelt habe.</p>
    </div>
    <div class="test">
      <div class="filter-tags">
        <button
            v-for="tag in filterTags"
            :key="tag"
            class="filter-btn"
            :class="{ active: selectedTag.value === tag }"
            @click="setTag(tag)"
        >
          {{ tag }}
        </button>
      </div>
    </div>
    <div class="projects">
      <div class="card" v-for="project in filteredProjects" :key="project.title">
        <h3>{{ project.title }}</h3>
        <p v-html="project.description"></p>

        <div class="tags">
          <span v-for="role in project.role" :key="role">{{ role }}</span>
        </div>

        <div class="tags">
          <span v-for="tech in project.technologies" :key="tech">{{ tech }}</span>
        </div>

        <div v-if="project.images.length" class="images">
          <img
              v-for="(image, index) in project.images"
              :key="index"
              :src="image.src"
              :alt="project.title"
              :class="image.alignVertical ? 'vertical' : 'horizontal'"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
#projects {
  padding: 20px 0;
}

h2 {
  font-size: 2.5rem;
  margin-bottom: 5px;
  color: #000000;
}
h3{
  margin-bottom: 5px;
  font-size: 1.5rem;
  color: #6b62fd;
}


.filter-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin: 10px 0 10px;
}

.filter-btn {
  border: none;
  padding: 10px 16px;
  border-radius: 999px;
  background: #f3f3ff;
  color: #6b62fd;
  font-weight: 600;
  cursor: pointer;
  transition: 0.2s ease;
}

.filter-btn:hover {
  background: #e5e2ff;
}

.filter-btn.active {
  background: #6b62fd;
  color: white;
}

.projects {
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 10px;
}

.card {
  padding: 20px;
  background: #ffffff;
  border-radius: 16px;
  box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.08);
}

.card h3 {
  margin-bottom: 8px;
}

.card p {
  margin-bottom: 14px;
  line-height: 1.5;
  color: black;
}

.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 14px;
}

.tags span {
  background: #f3f3ff;
  color: #6b62fd;
  padding: 6px 12px;
  border-radius: 999px;
  font-size: 0.9rem;
  font-weight: 500;
}

.card a {
  display: inline-block;
  margin-bottom: 16px;
  color: #6b62fd;
  font-weight: 600;
  text-decoration: none;
}

.card a:hover {
  text-decoration: underline;
}

.images {
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  padding: 12px;
  background-color: rgb(253, 253, 253);
  border-radius: 25px;
  justify-content: center;
}

.card img {
  width: 100%;
  height: auto;
  border-radius: 20px;
  display: block;
  border-style: solid;
  border-color: #b1aaff;
}

.card img.vertical {
  max-width: 200px;
}

.card img.horizontal {
  max-width: 300px;
}

.banner {
  background:
      linear-gradient(131deg, rgba(255, 105, 170), rgb(255, 169, 115));
  margin-top: 30px;
  padding: 30px;
  border-radius: 20px 20px 0 0;
}
.test {
  border:solid;
  border-image:
      linear-gradient(
          to bottom,
          #fda774,
          rgba(0, 0, 0, 0)
      ) 1 100%;
  padding: 20px;
}
@media (max-width: 768px) {
  .card img.vertical {
    max-width: 120px;

  }

  .card img.horizontal {
    max-width: 180px;
  }

}
</style>