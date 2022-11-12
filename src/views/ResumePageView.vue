<template>
  <div v-if="alert">
    <v-alert v-model="alert" type="success" closable>Successfully created.</v-alert>
  </div>
    
<v-form >
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
    @add-data="addMoreLoc" />
  </div>
  
  <Education />
  <Work />
  <Skills />
  <Projects />
  <SocialMedia />
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
        basic:{
        name: '',
        email: '',
        phone: '',
        image: '',
        summary: '',
        },
        locationDetails:[
          {
            address_line: '',
            street_name: '',
            city: '',
            country: '',
            zip_code:''
          },
        ],
        alert: false
        
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

      // computed:{
      //   getaddress_line(){
      //     return this.locationDetails.map(x => x.address_line).toString()
      //   }, 
      //   getstreet_name(){
      //     return this.locationDetails.map(x => x.street_name)
      //   },
      //   getCity(){
      //     return this.locationDetails.map(x => x.city)
      //   },
      //   getCountry(){
      //     return this.locationDetails.map(x => x.country)
      //   },
      //   getZip(){
      //     return this.locationDetails.map(x => x.zip_code)
      //   },
      // },

    methods: {

      async addBasic(){
        console.log("calling")
        const basicDetails={
          name:this.basic.name,
          email_address: this.basic.email,
          phone_number: this.basic.phone,
          image_url: this.basic.image,
          summary: this.basic.summary,
          location_details:[
            ...this.locationDetails
          ],
          social_media:[],
          work_details:[],
          education_details:[],
          skills:[],
          projects:[],
        }
        console.log(basicDetails)
        console.log(this.locationDetails)
        await axios.post(`http://127.0.0.1:8000/api/new/resume`, basicDetails)
        .then((res) =>{
          this.alert = true
          this.name=''
          console.log(res.data)
        }).catch((err) =>{
          console.log(err)
        })
      },
      addMoreLoc(){
        const location = {
            address_line: '',
            street_name: '',
            city: '',
            country: '',
            zip_code:''
          }
        
        this.locationDetails.push(location)
      }
  
    },

      }

</script>

  <style scoped>
  .expansion{
    margin-top: 80px;
  }
    .btn{
      background-color: teal;
    }

    form{
      margin: 1em;
      box-shadow: 5px 5px 20px rgba(240, 230, 245, 1);
    }
    .form-cont{
      margin-bottom: 0.8em;
    }
  </style>