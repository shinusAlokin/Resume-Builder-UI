<template>
    <div class="container">
     
      <div class="left-container"></div>
      <div class="right-container">
        <div  class="listing-alert">
        <v-alert v-model="deleteAlert" type="success" closable
        variant="outlined"
        Dense
         >Deleted successfully</v-alert
    >
  </div>
        <Header title="Resumes" />
        <div class="search-addresume">
          <div></div>
          <AddResumeVuetify  context="Add Resume"/>
        </div>
          <Listing @delete-success="triggerDelete"/>
      </div>

    </div>
  </template>
  
  <script>
  import Header from "@/components/HeaderVuetify.vue"
  import Listing from "@/components/ListingVuetify.vue"
  import AddResumeVuetify from "@/components/AddResumeVuetify.vue"
  
      export default{
        name: "ListingPageView",
        components:{
    Header,
    Listing,
    AddResumeVuetify,
},
        data(){
            return{
                search: "",
                deleteAlert: false
            }
        },
        methods:{
        triggerDelete(){
          setTimeout(() => { this.deleteAlert = true }, 200)
         setTimeout(() => { this.deleteAlert = false }, 5000)
          }
        },
      
      }
  </script>
  
  <style>
  
  .listing-alert{
    width: 100%;
  }

  .container{
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: center;
  }
  
  .right-container{
    width: 95%;
    padding: 1em;
    margin-top: 10px;
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
  