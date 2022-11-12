<template>
  <div class="main-cont">
    <h2>Resume Builder</h2>
    <div class="nav-links">
      <router-link to="/list" class="nav-link">Home</router-link>
    </div>
   
  </div>
  <router-view/>
    
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>

<style >
.main-cont{
  position: relative;
  width: 100%;
  background-color: rgb(58, 57, 57);
  color: wheat;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1em;
}

.nav-links{
  position: relative;
  left: 30%;
}

.nav-link{
  text-decoration: none;
  color: wheat;
}
.nav-link:hover{
  color: teal;
}
/* .main-container > h2{
  position: relative;
  left: 50%;
} */

  /* .nav-links{
    position: relative;
    margin-left: auto;
    text-decoration: none;
  }

 .nav-links > a{
    text-decoration: none;
    color: teal;
  } */
</style>
