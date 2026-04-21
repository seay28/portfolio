<script setup>

</script>

<template>
  <section id="skills">
    <div class="banner">
    <h2>Skills</h2>
    <p> Meine Fähigkeiten.</p>
    </div>

    <div class="test">
    <div class="category">
      <h3>Languages</h3>
      <div class="tags">
        <span>Java</span>
        <span>Kotlin</span>
        <span>Python</span>
        <span class="basic">C</span>
      </div>

      <div class="category">
        <h3>Web</h3>
        <div class="tags">
          <span>HTML</span>
          <span>CSS</span>
          <span>Vuejs</span>
        </div>
      </div>

      <div class="category">
        <h3>Design</h3>
        <div class="tags">
          <span>Figma</span>
        </div>
      </div>

      <div class="category">
        <h3>Modellierungssprachen</h3>
        <div class="tags">
          <span>UML</span>
          <span>ERD</span>
          <span>BPMN</span>
          <span>EPK</span>
        </div>
      </div>

      <div class="category">
        <h3>Tools</h3>
        <div class="tags">
          <span>Git</span>
          <span>Docker</span>
        </div>
      </div>

      <div class="category">
        <h3>Methods & Frameworks</h3>
        <div class="tags">
          <span>Scrum</span>
          <span>Design Thinking</span>
        </div>
      </div>
    </div>
    </div>
  </section>
</template>

<style scoped>
.skills {
  padding: 30px 0px;
  text-align: left;
}

h2 {
  font-size: 2.5rem;
  margin-bottom: 5px;
  color: #fdfdfd;
}
.basic {
  color: #333333;
}

h3{
  margin-bottom: 5px;
  color: #6b62fd;
}

.tags {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;

}

.tags span {
  background: #f3f3ff;
  color: #6b62fd;
  padding: 8px 14px;
  border-radius: 999px;
  font-size: 0.9rem;
  transition: 0.2s;

}
.tags span:hover {
  background: #6b62fd;
  color: #ffffff;
  padding: 8px 16px;
}

.banner {
  background:
      linear-gradient(131deg, rgba(255, 105, 170), rgb(255, 169, 115));
  margin-top: 30px;
  padding: 30px;
  border-radius: 20px 20px 0px 0px;
}

.test {

  border-radius: 0px 0px 20px 20px;
  border:solid;

  border-image:
      linear-gradient(
          to bottom,
          #fda774,
          rgba(0, 0, 0, 0)
      ) 1 100%;
  padding: 30px;
}
</style>