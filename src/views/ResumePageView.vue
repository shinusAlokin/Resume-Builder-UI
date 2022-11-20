<template>
  <title>Home</title>
  <div>
    <v-alert v-model="error_alert" type="error" closable variant="outlined"
    dense
      >{{error}}</v-alert
    >
  </div>
  
  <div class="sub-head">
        <h3>Create Resume</h3>
  </div>
  <v-divider></v-divider>

  <div class="nav-links">
    <router-link to="/" class="nav-link">
      <i class="fa-regular fa-less-than"></i>&nbsp; Back to Home
      Page</router-link
    >
  </div>
 
  

  <template>
    <Dialog
      :dialog="dialog"
      alertType="success"
      buttonColor="Teal"
      action="Preview"
      :preview="preview"
      heading="Created"
      goHome = true
      :to="`/api/resume/preview/${currenLastId}`"
      message="Resume created successfully"
    />
  </template>

  <template>
    <Dialog
      :dialog="cancelDialog"
      alertType="warning"
      buttonColor="Teal"
      action="Yes"
      :preview="preview"
      heading="Cancel"
      to="/"
      cancelText="No"
      message="Cancel resume creation and go back to Home Page?"
    />

  </template>

  <template>
    <Dialog
      :dialog="emptyAlert"
      alertType="info"
      buttonColor="Teal"
      cancelText="Ok"
      heading="Empty Section"
      message="You should enter atleast one entry for this required field "
    />
  </template>


  <v-form class="main-form">
    <div class="required">
    <small>fields indicated with * is required</small>
  </div>
    <div class="form-cont basic-detail">
      <BasicDetails
        v-model:name="basic.name"
        v-model:email="basic.email"
        v-model:phone="basic.phone"
        v-model:image="basic.image"
        v-model:summary="basic.summary"
      />
    </div>

    <div class="form-cont location" >
      <Location
        v-for="(item, index) in locationDetails"
        v-model:address_line="item.address_line"
        v-model:street_name="item.street_name"
        v-model:city="item.city"
        v-model:country = "item.country"
        v-model:zip_code="item.zip_code"
        @add-data="adder(locationDetails)"
        @remove-data="remover(locationDetails, index)"
      />
    </div>
   
    

    <div class="form-cont education" >
      <Education
        v-for="(item, index) in educationDetails"
        v-model:qualification="item.qualification"
        v-model:course_name="item.course_name"
        v-model:institute_name="item.institute_name"
        v-model:location="item.location"
        v-model:start_date="item.start_date"
        v-model:end_date="item.end_date"
        @add-data="adder(educationDetails)"
        @remove-data="remover(educationDetails, index)"
      />
    </div>

    <div class="form-cont work" >
      <Work
        v-for="(item,index) in workDetails"
        v-model:organisation="item.organisation"
        v-model:job_role="item.job_role"
        v-model:key_roles="item.key_roles"
        v-model:start_date="item.start_date"
        v-model:end_date="item.end_date"
        @add-data="adder(workDetails)"
        @remove-data="remover(workDetails, index)"
      />
    </div>

    <div class="form-cont skills" >
      <Skills
      v-for="(item,index) in skillDetails"
        v-model:skill="item.skill"
        v-model:rating="item.rating"
        @add-data="adder(skillDetails)"
        @remove-data="remover(skillDetails,index)"
      />
    </div>
   

    <div class="form-cont projects" >
      <Projects
        v-for="(item, index) in projects"
        v-model:project_title="item.project_title"
        v-model:skills="item.skills"
        v-model:description="item.description"
        @add-data="adder(projects)"
        @remove-data="remover(projects, index)"
      />
    </div>

    <div class="form-cont social_media" >
      <SocialMedia
        v-for="item in socialMedia"
        v-model:network="item.network"
        v-model:user_name="item.user_name"
        v-model:url="item.url"
        @add-data="adder(socialMedia)"
        @remove-data="remover(socialMedia)"
      />
    </div>
  <div class="btn-div">
    <v-btn class="mr-4 btn" @click.prevent="addBasic"> Save </v-btn>
    <v-btn class="cancel-resume-btn" @click="cancelDialog = true">Cancel</v-btn>
  </div>
    
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
import Dialog from '@/components/Dialog.vue'

  export default {

    name:"ResumePageView",

    data(){
      return{
        error:'',
        emptyAlert: false,
        alert: false,
        error_alert: false,
        dialog:false,
        cancelDialog:false,
        preview: true,
        panelCount:0,
        cancel:true,
        count:1,
        currenLastId: 0,
        

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
        workDetails:[{organisation:'', job_role:'',
                          key_roles:'',  start_date:'', end_date:''}],

        }
    },
    components:{
        BasicDetails,
        Location,
        Education,
        Work,
        Skills,
        Projects,
        SocialMedia,
        Dialog
      },

      computed:{
        failed(){
          return this.error
        },
        lastIdUpdated(){
          return this.currenLastId
        }

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


        await axios.post(`http://127.0.0.1:8000/api/new/resume`, newResume)
        .then((res) =>{
          console.log(res.data)
          if(res.data.hasOwnProperty('error_message')){
            this.error_alert = true
            this.dialog = false
            this.error = res.data.error_message[0].msg
          }
          else{
            this.currenLastId = res.data.created_id
            this.dialog=true
            this.error_alert = false

          }
          window.scrollTo(0,0)

        })
        .catch((err) =>{
          console.log(err)
        })

      },

      adder(listDict){
        let keys = []
        for(let key in listDict[0]){
          keys.push(key)
        }
        let newDict = {}
        keys.forEach((i) => {
          newDict[i] = ''
        })
        listDict.push(newDict)
      },

      remover(list, index){
        if(list.length > 1){
          list.splice(index, 1) 
          this.emptyAlert = false
      }
      else{
        this.emptyAlert = true
      }
    }
  }
  }
</script>

<style scoped>

.cancel-resume-btn{
  color: teal;
}



.btn {
  background-color: teal;
  color: white;
  width: 100px;
}


.main-form {
  margin: 1em;
  box-shadow: 5px 5px 20px rgba(240, 230, 245, 1);
  padding: 1em;
}
</style>
