<template>
  <div class="main-cont">
    <nav class="nav-bar">
      <h1>Resume Builder</h1>
    </nav>
  </div>
  <router-view />
</template>

<script>

export default {
  name: 'App',

  data(){
    return{
      validRules: [
      v => !!v || 'This field is required',
      ]
    }
  },
  watch:{
    '$route':{
      handler: (to, from) =>{
        document.title = to.meta.title || 'Resume Builder'
      },
      immediate: true
    }

  },

};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;700;900&family=Roboto+Slab:wght@400;800&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;700;900&family=Roboto+Slab:wght@400;800&family=Roboto:wght@100;300;400;500;700;900&display=swap");

h1 {
  font-weight: 900;
  font-family: "Roboto", sans-serif;
}

hr {
  opacity: 0.3;
  width: auto;
}

body {
  font-family: "Poppins", sans-serif;
}

.form-cont {
  margin-bottom: 0.8em;
  font-weight: 500;
}

.main-cont {
  width: 100%;
  background-color: rgba(236, 246, 246, 0.1);
  color: teal;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
  padding: 1em 0;
}
.nav-bar {
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}

.v-row {
  align-items: center;
}

.v-expansion-panel-title__overlay {
  font-size: 1.2rem;
}

.adder {
  margin: 10px 15px;
}

.nav-links {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  position: relative;
  left: 3%;
  margin: 1em 0;
}

.nav-link {
  color: #00848e;
  font-size: 1.2rem;
  text-decoration: none;
}

.nav-links a {
  font-size: 1rem;
  /* color: rgb(244, 246, 248); */
}

.v-expansion-panel-text {
  background: rgb(245, 245, 245);
  background: linear-gradient(
    90deg,
    rgba(245, 245, 245, 0.9) 16%,
    rgba(255, 255, 255, 1) 16%
  );
}

.add-rm-btn {
  position: relative;
  left: 16%;
}
.v-cont {
  width: 100%;
}
.sub-head {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  position: relative;
  margin-top: 1.1em;
  left: 3%;
}

.btn-div {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
}

.required {
  display: flex;
  justify-content: flex-start;
  color: #333;
  align-items: center;
  margin: 0.5em 0;
}

@media (max-width: 900px) {
  .v-expansion-panel-text {
    background: rgb(224, 245, 245);
    background: linear-gradient(
      90deg,
      rgba(224, 245, 245, 1) 0%,
      rgba(255, 255, 255, 1) 0%
    );
  }
}
</style>
