<template>

    <div class="add-resume-listingpage">
        <i class="fa fa-plus" aria-hidden="true"></i>
        <router-link to="/api/resume/new">{{context}}</router-link>
        <router-view /> 
    </div>
   
</template>

<script>
    export default{
        name: "AddResumeVuetify",
        props:{
            context:String
        }
    }
</script>

<style>

    .add-resume-listingpage{
        color: teal;
        float: right;
        font-size: 0.8rem;
        padding: 5px;
        cursor: pointer;
    }
    .add-resume-listingpage  a{
        text-decoration: none; 
        color: #00848E;
        cursor: pointer;
        font-size: 1rem;
    }

    @media (max-width:630px){
        .add-resume-listingpage{
            font-size: 10px !important;
  }
  .add-resume-listingpage a{
            font-size: 10px !important;
  }
}
</style>