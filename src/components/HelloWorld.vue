<template>
  <main>
    <v-expansion-panels focusable>
    <v-expansion-panel
    >
      <v-expansion-panel-header>Basic Details</v-expansion-panel-header>
      <v-expansion-panel-content>
    <form>
    <v-text-field
      v-model="name"
      :error-messages="nameErrors"
      :counter="10"
      label="Name"
      required
      @input="$v.name.$touch()"
      @blur="$v.name.$touch()"
    ></v-text-field>
    <v-text-field
      v-model="email"
      :error-messages="emailErrors"
      label="E-mail"
      required
      @input="$v.email.$touch()"
      @blur="$v.email.$touch()"
    ></v-text-field>
    <v-text-field
      v-model="phoneNumber"
      label="Phone"
      required
    ></v-text-field>
    <v-text-field
      v-model="imageUrl"
      label="Image"
      required
    ></v-text-field>
    <v-text-field
      v-model="summary"
      label="Summary"
      required
    ></v-text-field>
    <v-btn
      class="btn"
      @click="submit"
    >
      submit
    </v-btn>
  </form>
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-expansion-panels>
  <div></div>
  </main>
  
</template>

<script>
  import { validationMixin } from 'vuelidate'
  import { required, maxLength, email } from 'vuelidate/lib/validators'
  import axios from 'axios'

  export default {
    mixins: [validationMixin],

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

    data(){
      return{
      name: '',
      email: '',
      phoneNumber:'',
      imageUrl:'',
      summary:''
      }
      
    },

    computed: {
      checkboxErrors () {
        const errors = []
        if (!this.$v.checkbox.$dirty) return errors
        !this.$v.checkbox.checked && errors.push('You must agree to continue!')
        return errors
      },
      selectErrors () {
        const errors = []
        if (!this.$v.select.$dirty) return errors
        !this.$v.select.required && errors.push('Item is required')
        return errors
      },
      nameErrors () {
        const errors = []
        if (!this.$v.name.$dirty) return errors
        !this.$v.name.maxLength && errors.push('Name must be at most 10 characters long')
        !this.$v.name.required && errors.push('Name is required.')
        return errors
      },
      emailErrors () {
        const errors = []
        if (!this.$v.email.$dirty) return errors
        !this.$v.email.email && errors.push('Must be valid e-mail')
        !this.$v.email.required && errors.push('E-mail is required')
        return errors
      },
    },

    methods: {
      async submit(e) {
        e.preventDefault()
        const newDetails = {
          name: this.name,
          email_address: this.email,
          phone_number: this.phoneNumber,
          image_url: this.imageUrl,
          summary: this.summary
        }
        await axios.post(`http://127.0.0.1:8000/create_basic`, newDetails).then((res)=>{
          console.log(res)
        })

      },
      clear () {
        this.$v.$reset()
        this.name = ''
        this.email = ''
        this.select = null
        this.checkbox = false
      },
    },
  }
</script>

<style scoped>
  .btn{
    background-color: teal;
  }
</style>