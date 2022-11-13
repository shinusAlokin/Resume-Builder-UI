<template>
    <div class="main-cont">
      <nav class="nav-bar">
        <h2>Resume Builder</h2>
        <div class="nav-links">
          <router-link to="/list" class="nav-link">Home</router-link>
        </div>
      </nav>
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
  width: 100%;
  background-color: rgb(22, 68, 68);
  color:  #ddd;
  box-shadow: 5px 2px 10px #ddd;
  padding: 1em 0;
}
.nav-bar{
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  position: relative;
}
.nav-links{
  position: relative;
  left: 15%;
  margin-right: 0.4em;
}

.nav-link{
  text-decoration: none;
  color: #ddd;
}
.nav-link:hover{
  color: #fff;
}
</style>
