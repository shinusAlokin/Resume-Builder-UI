<template>
    <div class="nav-links">
    <router-link to="/list" class="nav-link">
      <i class="fa-regular fa-less-than"></i> Back to Home
      Page</router-link
    >
  </div>
    <v-container fluid>
      <v-card class="mx-auto" justify>
        <v-card-title class="text">Basic Details</v-card-title>
        <v-spacer></v-spacer>
        <v-card-text justify="center" class="box">
          <v-row justify="center">
            <v-col sm="2"> <h3>Name:</h3> </v-col>
            <v-col >{{preview.basic.name}}</v-col>
            <v-col sm="2"> <h3>Email Address:</h3> </v-col>
            <v-col >{{preview.basic.email_address}}</v-col>
          </v-row>
          <v-row justify="center">
            <v-col sm="2"> <h3>Phone Number:</h3> </v-col>
            <v-col>{{preview.basic.phone_number}}</v-col>
            <v-col sm="2"> <h3>Image URL:</h3> </v-col>
            <v-col>{{preview.basic.image_url}}</v-col>
          </v-row>
          <v-row justify="center">
            <v-col sm="2"> <h3>Summary:</h3> </v-col>
            <v-col>{{preview.basic.summary}}</v-col>
            <v-col sm="2"></v-col>
            <v-col></v-col>
          </v-row>
        </v-card-text>
        <v-spacer></v-spacer>
        <v-card-title class="text">Location Details</v-card-title>
        <v-spacer></v-spacer>
        <v-card-text v-for="loc in preview.location_details">
          <v-row>
            <v-col sm="2"> <h3>Address Line:</h3> </v-col>
            <v-col>{{loc.address_line}}</v-col>
            <v-col sm="2"> <h3>Street Name:</h3> </v-col>
            <v-col>{{loc.street_name}}</v-col>
          </v-row>
          <v-row>
            <v-col sm="2"> <h3>City:</h3> </v-col>
            <v-col>{{loc.city}}</v-col>
            <v-col sm="2"> <h3>Country:</h3> </v-col>
            <v-col>{{loc.country}}</v-col>
          </v-row>
          <v-row>
            <v-col sm="2"> <h3>Zip-Code:</h3> </v-col>
            <v-col>{{loc.zip_code}}</v-col>
            <v-col sm="2"> </v-col>
            <v-col></v-col>
          </v-row>
        </v-card-text>
        <v-spacer></v-spacer>
        <v-card-title class="text">Education Details</v-card-title>
        <v-spacer></v-spacer>
        <v-card-text v-for="edu in preview.education_details">
          <v-row>
            <v-col sm="2"> <h3>Qualification:</h3> </v-col>
            <v-col>{{edu.qualification}}</v-col>
            <v-col sm="2"> <h3>Course Name:</h3> </v-col>
            <v-col>{{edu.course_name}}</v-col>
          </v-row>
          <v-row>
            <v-col sm="2"> <h3>Institue Name:</h3> </v-col>
            <v-col>{{edu.institute_name}}</v-col>
            <v-col sm="2"> <h3>Location:</h3> </v-col>
            <v-col>{{edu.location}}</v-col>
          </v-row>
          <v-row>
            <v-col sm="2"> <h3>Start Date:</h3> </v-col>
            <v-col >{{edu.start_date}}</v-col>
            <v-col sm="2"> <h3>End Date:</h3> </v-col>
            <v-col >{{edu.end_date}}</v-col>
          </v-row>
        </v-card-text>
        <v-spacer></v-spacer>
        <v-card-title class="text">Work Details</v-card-title>
        <v-spacer></v-spacer>
        <v-card-text v-for="work in preview.work_details">
          <v-row>
            <v-col  sm="2"> <h3>Organisation:</h3> </v-col>
            <v-col>{{work.organisation}}</v-col>
            <v-col  sm="2"> <h3>Jobe:</h3> </v-col>
            <v-col>{{work.job_role}}</v-col>
          </v-row>
          <v-row>
            <v-col  sm="2"> <h3>Key Roles:</h3> </v-col>
            <v-col>{{work.key_roles}}</v-col>
            <v-col  sm="2"> <h3>Start Date:</h3> </v-col>
            <v-col>{{work.start_date}}</v-col>
          </v-row>
          <v-row>
            <v-col  sm="2"> <h3>End Date:</h3> </v-col>
            <v-col>{{work.end_date}}</v-col>
            <v-col></v-col>
          </v-row>
        </v-card-text>
        <v-card-title class="text">Skills</v-card-title>
        <v-spacer></v-spacer>
        <v-card-text v-for="skil in preview.skills">
          <v-row >
            <v-col sm="2"> <h3>Skill:</h3> </v-col>
            <v-col>{{skil.skill}}</v-col>
            <v-col sm="2"> <h3>Rating:</h3> </v-col>
            <v-col>{{skil.rating}}</v-col>
          </v-row>
        </v-card-text>
        <v-card-title v-if="preview.projects" class="text">Projects</v-card-title>
        <v-spacer></v-spacer>
        <v-card-text v-for="project in preview.projects">
          <v-row>
            <v-col sm="2"> <h3>Project Title:</h3> </v-col>
            <v-col>{{project.project_title}}</v-col>
            <v-col sm="2"> <h3>Description:</h3> </v-col>
            <v-col>{{project.description}}</v-col>
          </v-row>
          <v-row>
            <v-col sm="2"> <h3>Skills:</h3> </v-col>
            <v-col>{{project.skills}}</v-col>
            <v-col ></v-col>
          </v-row>
        </v-card-text>
        <v-card-title   class="text">Social Media</v-card-title>
        <v-spacer></v-spacer>
        <v-card-text v-if="preview.social_media" v-for="soc in preview.social_media">
          <v-row>
            <v-col  sm="2"> <h3>Network:</h3> </v-col>
            <v-col>{{soc.network}}</v-col>
            <v-col sm="2"> <h3>URL:</h3> </v-col>
            <v-col>{{soc.url}}</v-col>
          </v-row>
          <v-row>
            <v-col  sm="2"> <h3>User Name:</h3> </v-col>
            <v-col>{{soc.user_name}}</v-col>
            <v-col >  </v-col>
            <v-col></v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </v-container>
  </template>
  <script>
  
  import axios from 'axios'
  
  export default{
      data(){
          return{
              id: this.$route.params.id,
              preview: {basic:''},
          }
      },
      methods:{
          async toPreview(){
              await axios.get(this.url).then((res) => {
                  this.preview = res.data
                  console.log(this.preview)
  
              }).catch((err) =>{
                  console.log(err)
              })
  
          },
      },
      computed:{
          server(){
              return `http://127.0.0.1:8000`
          },
          url(){
             return `${this.server}/api/update/resume/${this.id}/`
          },
      },
      created(){
          this.toPreview()
      }
  }
  </script>
  
  <style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;700;900&family=Roboto+Slab:wght@400;800&family=Roboto:wght@100;300;400;500;700;900&display=swap');
  
  .text {
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
    text-align: center;
    font-size: 1.1rem;
    padding-right: 1em;
    border-bottom: 1px solid rgba(185, 176, 176, 0.5);
    border-top: 1px solid rgba(185, 176, 176, 0.5);
  }
  .text:first-child {
    border-top: none;
  }
  .mx-auto {
    border: 1px solid rgba(185, 176, 176, 0.8);
  }

  .v-container--fluid {
    max-width: 80%;
  }
  

  .v-row {
    font-family: 'Roboto', sans-serif;
    font-size: 0.9rem;
    position: relative;
    left: 5%;
  }
  .v-row h3 {
  font-family: 'Roboto', sans-serif;
  font-size: 0.9rem;
  font-weight: 600;
  }
  </style>
  