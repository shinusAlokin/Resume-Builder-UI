<template>
    <div v-if="alert">
      <v-alert v-model="alert" type="success" closable>Successfully Edited.</v-alert>
    </div>
      
  <v-form class="main-form">
    <div class="form-cont basic-detail">
      <BasicDetails 
      v-model:name="basic.name"
      v-model:email="basic.email_address"
      v-model:phone="basic.phone_number"
      v-model:image="basic.image_url"
      v-model:summary="basic.summary"
       />
    </div>
    
    <div class="form-cont location" v-for="item in locationDetails">
      <Location v-model:address_line="item.address_line"
      v-model:street_name="item.street_name"
      v-model:city="item.city"
      v-model:country="item.country"
      v-model:zip_code="item.zip_code"
      :countries="countries"
      @add-data="adder(locationDetails)"
      @remove-data="remover(locationDetails, removeLocation, item.id)" 
      />
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
        @remove-data="remover(educationDetails, removeEducation, item.id)"
      />
    </div>
  
    <div class="form-cont work" v-for="item in workDetails">
      <Work 
        v-model:organisation="item.organisation"
        v-model:job_role="item.job_role"
        v-model:key_roles="item.key_roles"
        v-model:start_date="item.start_date"
        v-model:end_date="item.end_date"
        @add-data="adder(workDetails)"
        @remove-data="remover(workDetails,removeWork, item.id)"
      />
    </div>
  
  
    <div class="form-cont skills" v-for="item in skillDetails">
      <Skills 
      v-model:skill="item.skill"
      v-model:rating="item.rating" 
      @add-data="adder(skillDetails)" 
      @remove-data="remover(skillDetails, removeSkill, item.id)"
      :skill_id="item.id"
      />
    </div>
    
    <div class="form-cont projects" v-for="item in projects">
      <Projects 
        v-model:project_title=item.project_title
        v-model:skills=item.skills
        v-model:description=item.description 
        @add-data="adder(projects)" 
        @remove-data="remover(projects,removeProject, item.id)" />
    </div>
  
    <div class="form-cont social_media" v-for="item in socialMedia">
      <SocialMedia 
        v-model:network="item.network" 
        v-model:user_name="item.user_name" 
        v-model:url="item.url"
        @add-data="adder(socialMedia)" 
        @remove-data="remover(socialMedia,removeProject, item.id)" />
    </div>
  
    <v-btn
          class="mr-4 btn"
          @click="updateResume"
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
  
      name:"ResumePageView",
  
      data(){
        return{
          alert: false,
          count:1,
          toEdit:[],
          
          id: this.$route.params.id,
          countries:['India', 'China'],

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
          SocialMedia
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
            await axios.put(this.url, updatedResume, {
                headers:{
                    'Content-type':'application/json'
                }
                
            }).then((res) =>{
                console.log(res.data)
                this.alert = true
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
  
        async remover(list, item_url, item_id){
          if (list.length > 1){
            await axios.delete(item_url + `${item_id}`)
            list.pop()
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
            return `${this.server}/education/${this.id}/edu/`
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
    .expansion{
      margin-top: 80px;
    }
      .btn{
        background-color: teal;
      }
  
      .main-form{
        margin: 1em;
        box-shadow: 5px 5px 20px rgba(240, 230, 245, 1);
        padding: 1em;
      }
  
      .form-cont{
        margin-bottom: 0.8em;
      }
    
    </style>