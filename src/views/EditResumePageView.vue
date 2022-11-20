<template>
  <div>
    <v-alert v-model="error_alert" type="error" closable 
    variant="outlined" dense prominent
      >{{error}}</v-alert
    >
  </div>
  
  <div class="sub-head">
        <h3>Update Resume</h3>
  </div>
  <v-divider></v-divider>

  <div class="nav-links">
    <router-link to="/" class="nav-link">
      <i class="fa-regular fa-less-than" aria-hidden="true"></i> Back to Home
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
      goHome = true
      heading="update"
      :to="`/api/resume/preview/${id}`"
      message="Resume updated successfully"
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
      message="Cancel edit resume and go back to Home Page?"
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
        v-model:email="basic.email_address"
        v-model:phone="basic.phone_number"
        v-model:image="basic.image_url"
        v-model:summary="basic.summary"
      />
    </div>

    <div class="form-cont location" >
      <Location
        v-for="(item, index) in locationDetails"
        v-model:address_line="item.address_line"
        v-model:street_name="item.street_name"
        v-model:city="item.city"
        v-model:country="item.country"
        v-model:zip_code="item.zip_code"
        :countries="countries"
        @add-data="adder(locationDetails)"
        @remove-data="remover(locationDetails, removeLocation, item.id, index)"
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
        @remove-data="remover(educationDetails, removeEducation, item.id, index)"
      />
    </div>

    <div class="form-cont work" >
      <Work
        v-for="(item, index) in workDetails"
        v-model:organisation="item.organisation"
        v-model:job_role="item.job_role"
        v-model:key_roles="item.key_roles"
        v-model:start_date="item.start_date"
        v-model:end_date="item.end_date"
        @add-data="adder(workDetails)"
        @remove-data="remover(workDetails, removeWork, item.id, index)"
      />
    </div>

    <div class="form-cont skills" >
      <Skills
        v-for="(item, index) in skillDetails"
        v-model:skill="item.skill"
        v-model:rating="item.rating"
        @add-data="adder(skillDetails)"
        @remove-data="remover(skillDetails, removeSkill, item.id, index)"
      />
    </div>

    <div class="form-cont projects" >
      <Projects
        v-for="(item, index) in projects"
        v-model:project_title="item.project_title"
        v-model:skills="item.skills"
        v-model:description="item.description"
        @add-data="adder(projects)"
        @remove-data="remover(projects,removeProject, item.id, index)"
      />
    </div>

    <div class="form-cont social_media" >
      <SocialMedia
        v-for="(item, index) in socialMedia"
        v-model:network="item.network"
        v-model:user_name="item.user_name"
        v-model:url="item.url"
        @add-data="adder(socialMedia)"
        @remove-data="remover(socialMedia,removeSocialMedia, item.id, index)"
      />
    </div>
    <div class="btn-div">
      <v-btn class="mr-4 btn" @click="updateResume"> Save </v-btn>
      <v-btn class="cancel-resume-btn" @click="cancelDialog = true">Cancel</v-btn>
    </div>
    
  </v-form>
  <router-view />
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
    name:"EditResumePageView",
    data(){
      return{
        error_alert: false,
        error:'',
        count:1,
        emptyAlert: false, 
        dialog: false,
        toEdit:[],
        preview: true,
        cancelDialog:false,
        id: this.$route.params.id,
      basic:'',
      locationDetails:'',
      skillDetails:'',
      socialMedia:'',
      projects:'',
      educationDetails:'',
      workDetails:''
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
    methods: {
      async toUpdate(){
          await axios.get(this.url).then((res) => {
              this.toEdit = res.data
              this.basic = this.toEdit.basic
              this.locationDetails = this.toEdit.location_details
              this.skillDetails = this.toEdit.skills
              this.projects = this.toEdit.projects
              this.socialMedia = this.toEdit.social_media
              this.workDetails = this.toEdit.work_details
              this.educationDetails = this.toEdit.education_details
          }).catch((err) =>{
              console.log(err)
          })
      },
     async updateResume(){
          const updatedResume = {
              name:this.basic.name,
              email_address: this.basic.email_address,
              phone_number: this.basic.phone_number,
              image_url: this.basic.image_url,
              summary: this.basic.summary,
              location_details:[...this.locationDetails],
              social_media:[...this.socialMedia],
              work_details:[...this.workDetails],
              education_details:[...this.educationDetails],
              skills:[...this.skillDetails],
              projects:[...this.projects],
          }
          await axios.put(this.url, updatedResume, {
              headers:{
                  'Content-type':'application/json'
              }
          }).then((res) =>{
              console.log(res.data)
              if(res.data.hasOwnProperty('error_message')){
                this.error = res.data.error_message[0].msg
                this.error_alert = true
                window.scrollTo(0,0)
                console.log(this.error)
        }
        else{
          this.error_alert = false
          this.dialog = true
        }
          })
      },
      adder(listDict){
        let keys = []
        for(let key in listDict[0]){
          if(key !== 'id'){
              keys.push(key)
          }
        }
        let newDict = {}
        keys.forEach((i) => {
          newDict[i] = ''
        })
        newDict.basic_details_id = this.id
        listDict.push(newDict)
      },
      async remover(list, item_url, item_id, index){
        if (item_id && list.length > 1){
          await axios.delete(item_url + `${item_id}`)
          list.splice(index, 1)
        }
        else if(list.length > 1){
          list.splice(index, 1)
        }
        else{
          this.emptyAlert = true
        }
      }
    },
    computed:{
      server(){
          return `http://127.0.0.1:8000`
      },
      url(){
         return `${this.server}/api/update/resume/${this.id}`
      },
      removeSkill(){
          return `${this.server}/delete_skills/${this.id}/skill/`
      },
      removeProject(){
          return `${this.server}/delete_project/${this.id}/project/`
      },
      removeSocialMedia(){
          return `${this.server}/delete_social_media/${this.id}/social_media/`
      },
      removeEducation(){
          return `${this.server}/delete_education/${this.id}/edu/`
      },
      removeWork(){
          return `${this.server}/delete_work/${this.id}/work/`
      },
      removeLocation(){
          return `${this.server}/delete_location/${this.id}/location/`
      },
    },
    created(){
      this.toUpdate()
    }
  }
</script>

<style scoped>
.expansion {
  margin-top: 80px;
}
.btn {
  background-color: teal;
  color: white;
}

.cancel-resume-btn{
  color: teal;
}
.main-form {
  margin: 1em;
  box-shadow: 5px 5px 20px rgba(240, 230, 245, 1);
  padding: 1em;
}
.form-cont {
  margin-bottom: 0.8em;
}
</style>