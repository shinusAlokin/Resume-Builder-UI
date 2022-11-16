<template>
    <div class="main-cont">
      <nav class="nav-bar">
        <h1>Resume Builder</h1>
        
      </nav>
      
  </div>
  <router-view/>
</template>

<script>

export default {
  name: 'App',

  data(){
    return{
      validRules: [
      v => !!v || 'This field is required is required',
      ]
    }
  },
};
</script>

<style >

@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;700;900&family=Roboto+Slab:wght@400;800&display=swap');


h1{
 font-weight: 900;
}

hr{
  opacity: 0.3;
  width: auto;
}

body{
  font-family: 'Poppins', sans-serif;
}

.form-cont{
      margin-bottom: 0.8em;
      font-weight: 500;
    }


.main-cont{
  width: 100%;
  background-color: rgba(236, 246, 246, 0.1);
  color: teal;
 box-shadow: 0 2px 4px 0 rgba(0,0,0,.1);
  padding: 1em 0;
}
.nav-bar{
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}

.v-row{
  align-items: center;
}

.v-expansion-panel-title__overlay{
  font-size: 1.2rem;
}

.adder{
  margin: 10px 15px;
}


.nav-links{
    display: flex;
    align-items: center;
    justify-content: flex-start;
    position: relative;
    left: 5%;
    margin: 1em 0;
  }
  

  .nav-link{
    color:  #00848E;
    font-size: 1.2rem;
    text-decoration: none;
  }

  .nav-links a{
  font-size: 1rem;
}
</style>
