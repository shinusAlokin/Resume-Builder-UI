<template>
    
    <v-expansion-panels>
        <v-expansion-panel
          title="Projects"
        >
        <v-expansion-panel-text>
      <v-text-field
        v-model="projectTitle"
        :counter="10"
        label="Project Title"
        required
      ></v-text-field>
      <v-text-field
      v-model="skills"
    label="Skills"
    ></v-text-field>
      <v-textarea
      v-model="description"
    label="Description"
    ></v-textarea>

  
      <v-btn
        class="mr-4 btn"
        @click="submit"
      >
        submit
      </v-btn>
      <v-btn @click="clear">
        clear
      </v-btn>
        </v-expansion-panel-text>
      
      </v-expansion-panel>
      </v-expansion-panels>
  </template>    


<script>
  import axios from 'axios'
  
  import { useVuelidate } from '@vuelidate/core'
    
  import { required, maxLength, email } from '@vuelidate/validators'
  
  
    export default {
        
      setup(){
      return {
        v$: useVuelidate()
      }
    },
  
      validations: {
        name: { required, maxLength: maxLength(10) },
        email: { required, email },
        select: { required },
        checkbox: {
          checked (val) {
            return val
          },
        },
      },

      name: "BasicDetails",
        props:{
            value:{
                type: String,
                default: ""
            }
        },
  
      data(){
        return{
          network: '',
          url: '',
          username: '',
        }
        
      },

      watch:{
        name(val){
            this.$emit('updated', val)
        },
        email(val){
            this.$emit('updated', val)
        },
        phone(val){
            this.$emit('updated', val)
        },
        image(val){
            this.$emit('updated', val)
        },
        summary(val){
            this.$emit('updated', val)
        },
      }
    }
</script>