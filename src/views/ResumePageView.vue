<template>
  <div v-if="alert">
    <v-alert v-model="alert" type="success" closable>Successfully created.</v-alert>
  </div>
    
<v-form class="main-form">
  <div class="form-cont basic-detail">
    <BasicDetails 
    v-model:name="basic.name"
    v-model:email="basic.email"
    v-model:phone="basic.phone"
    v-model:image="basic.image"
    v-model:summary="basic.summary"
     />
  </div>
  
  <div class="form-cont location" v-for="item in locationDetails">
    <Location v-model:address_line="item.address_line"
    v-model:street_name="item.street_name"
    v-model:city="item.city"
    v-model:country="item.country"
    v-model:zip_code="item.zip_code"
    @add-data="adder(locationDetails)"
    @remove-data="remover(locationDetails)" 
    increment="count"/>
  </div>
  

  <div class="form-cont education" v-for="item in educationDetails">
    <Education 
      v-model:qualification="item.qualification"
      v-model:course_name="item.course_name"
      v-model:institute_name="item.institute_name"
      v-model:location="item.location"
      v-model:start_date="item.start_date"
      v-model:end_date="item.end_date"
      @add-data="adder(educationDetails)"
      @remove-data="remover(educationDetails)"
    />
  </div>

  <div class="form-cont education" v-for="item in workDetails">
    <Work 
      v-model:qualification="item.qualification"
      v-model:course_name="item.course_name"
      v-model:institute_name="item.institute_name"
      v-model:location="item.location"
      v-model:start_date="item.start_date"
      v-model:end_date="item.end_date"
      @add-data="adder(workDetails)"
      @remove-data="remover(workDetails)"
    />
  </div>


  <div class="form-cont skills" v-for="item in skillDetails">
    <Skills 
    v-model:skill="item.skill"
    v-model:rating="item.rating" 
    @add-data="adder(skillDetails)" 
    @remove-data="remover(skillDetails)"/>
  </div>
  
  <div class="form-cont projects" v-for="item in projects">
    <Projects 
      v-model:project_title=item.project_title
      v-model:skills=item.skills
      v-model:description=item.description 
      @add-data="adder(projects)" 
      @remove-data="remover(projects)" />
  </div>

  <div class="form-cont social_media" v-for="item in socialMedia">
    <SocialMedia 
      v-model:network="item.network" 
      v-model:user_name="item.user_name" 
      v-model:url="item.url"
      @add-data="adder(socialMedia)" 
      @remove-data="remover(socialMedia)" />
  </div>

  <v-btn
        class="mr-4 btn"
        @click="addBasic"
      >
        submit
      </v-btn>
</v-form>
  
</template>


<script>
import axios from 'axios'
import BasicDetails from '@/components/BasicDetails.vue'
import Location from '@/components/Location.vue'
import Education from '@/components/Education.vue'
import Work from '@/components/Work.vue'
import Skills from '@/components/Skills.vue'
import Projects from '@/components/Projects.vue'
import SocialMedia from '@/components/SocialMedia.vue'

  export default {

    data(){
      return{
        alert: false,
        count:1,

        basic:{
        name: '',
        email: '',
        phone: '',
        image: '',
        summary: '',
        },

        locationDetails:[{address_line: '',street_name: '',city: '',country: '',zip_code:''},],
        skillDetails:[{skill:'',rating:''}],
        socialMedia:[{network:'', user_name:'', url:''}],
        projects:[{project_title:'', skills:'', description:''}],
        educationDetails:[{qualification:'', course_name:'', 
                          institute_name:'', location:'', start_date:'', end_date:''}],
        workDetails:[{network:'', user_name:'', url:''}],
      
        }
    },
    components:{
        BasicDetails,
        Location,
        Education,
        Work,
        Skills,
        Projects, 
        SocialMedia
      },


    methods: {

      async addBasic(){
        console.log("calling")
        const newResume={
          name:this.basic.name,
          email_address: this.basic.email,
          phone_number: this.basic.phone,
          image_url: this.basic.image,
          summary: this.basic.summary,
          location_details:[...this.locationDetails],
          social_media:[...this.socialMedia],
          work_details:[...this.workDetails],
          education_details:[...this.educationDetails],
          skills:[...this.skillDetails],
          projects:[...this.projects],
        }
        console.log(newResume)

        await axios.post(`http://127.0.0.1:8000/api/new/resume`, newResume)
        .then((res) =>{
          this.alert = true
          this.name=''
          console.log(res.data)
        }).catch((err) =>{
          console.log(err)
        })
      },
      adder(list){
        const newDict = list[0]
        list.push(newDict)
      },
      remover(list){
        if (list.length > 1){
          list.pop()
        }
      }
    }
  }

</script>

  <style scoped>
  .expansion{
    margin-top: 80px;
  }
    .btn{
      background-color: teal;
    }

    main-form{
      margin: 1em;
      box-shadow: 5px 5px 20px rgba(240, 230, 245, 1);
      padding: 1em;
    }

    .form-cont{
      margin-bottom: 0.8em;
    }
  
  </style>