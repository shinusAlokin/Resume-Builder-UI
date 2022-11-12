<template>
    <v-expansion-panels focusable >
        <v-expansion-panel
          title="Basic Details"
        >
        <v-expansion-panel-text>
      <v-text-field
          :value="name"
          @input="$emit('update:name', $event.target.value)"
        label="Name"
        required
        clearable
      ></v-text-field>

      <v-text-field
     
      @input="$emit('update:email', $event.target.value)"
          :value="email"
        label="E-mail"
        required
        clearable
      ></v-text-field>

      <v-text-field
      :value="phone"
        @input="$emit('update:phone', $event.target.value)"
        label="Phone Number"
          variant="solo"
        required
        clearable
      ></v-text-field>

      <v-text-field
        :value="image"
        @input="$emit('update:image', $event.target.value)"
        label="Image Url"
        required
        clearable
        variant="solo"
      ></v-text-field>

      <v-textarea
      :value="summary"
          @input="$emit('update:summary', $event.target.value)"
        label="Summary"
        required
        clearable
      ></v-textarea>
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
            name: String,
            email: String,
            phone: String,
            image: String,
            summary: String
        },

  
      computed: {
        checkboxErrors () {
          const errors = []
          if (!this.v$.checkbox.$dirty) return errors
          !this.v$.checkbox.checked && errors.push('You must agree to continue!')
          return errors
        },
        selectErrors () {
          const errors = []
          if (!this.v$.select.$dirty) return errors
          !this.v$.select.required && errors.push('Item is required')
          return errors
        },
        nameErrors () {
          const errors = []
          if (!this.v$.name.$dirty) return errors
          !this.v$.name.maxLength && errors.push('Name must be at most 10 characters long')
          !this.v$.name.required && errors.push('Name is required.')
          return errors
        },
        emailErrors () {
          const errors = []
          if (!this.v$.email.$dirty) return errors
          !this.v$.email.email && errors.push('Must be valid e-mail')
          !this.v$.email.required && errors.push('E-mail is required')
          return errors
        },
      },

      
  }

</script>