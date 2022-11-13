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
  background-color:  rgba(0, 128, 128, 0.7);
  color:  rgb(45, 2, 45);
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
  color: rgb(45, 2, 45);
}
.nav-link:hover{
  color: #fff;
}
</style>
