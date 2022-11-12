<template>
    <div class="container">
      <div class="left-container"></div>
      <div class="right-container">
        <Header title="Resumes" />
        <div class="search-addresume">
          <!-- <SearchBar  placeholder="searches by email or name" /> -->
          <div></div>
          <AddResumeVuetify  context="Add Resume"/>
        </div>
          <Listing />
      </div>

    </div>
  </template>
  
  <script>
  import Header from "@/components/HeaderVuetify.vue"
  import Listing from "@/components/ListingVuetify.vue"
  import AddResumeVuetify from "@/components/AddResumeVuetify.vue"
  import DeleteDialog from "@/components/DeleteDialog.vue"
  
      export default{
        name: "ListingPageView",
        components:{
    Header,
    Listing,
    AddResumeVuetify,
    DeleteDialog
},
        data(){
            return{
                search: ""
            }
        }
      }
  </script>
  
  <style>
  
  .container{
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: center;
  }
  
  .left-container{
    width: 16%;
  }
  .right-container{
    width: 100%;
    padding: 1em;
    margin-top: 10px;
    left: 30%;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
  }
  
  .search-addresume{
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-top: 10px;
  }
  
  </style>
  