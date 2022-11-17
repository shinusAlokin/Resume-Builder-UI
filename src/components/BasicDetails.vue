<template>
  <v-expansion-panels focusable v-model="panel">
    <v-expansion-panel title="Basic Details" expand>
      <v-form>
        <v-expansion-panel-text>
          <v-container fluid>
            <v-row>
              <v-col cols="1" sm="2">Name*</v-col>
              <v-col cols="12" sm="8">
                <v-text-field
                lazyvalidation
                  :value="name"
                  :rules="nameRules"
                  @input="$emit('update:name', $event.target.value)"
                  placeholder="Name"
                  variant="underlined"
                  color="teal"
                  required
                  clearable
                ></v-text-field>
              </v-col>
            </v-row>
            <v-divider></v-divider>

            <v-row>
              <v-col cols="1" sm="2">Email*</v-col>
              <v-col cols="12" sm="8">
                <v-text-field
                  @input="$emit('update:email', $event.target.value)"
                  :value="email"
                  :rules="emailRules"
                  placeholder="E-mail"
                  variant="underlined"
                  color="teal"
                  required
                ></v-text-field>
              </v-col>
            </v-row>
            <v-divider></v-divider>

            <v-row>
              <v-col cols="1" sm="2">Phone Number*</v-col>
              <v-col cols="12" sm="8">
                <v-text-field
                  :value="phone"
                  :rules="phonerules"
                  @input="$emit('update:phone', $event.target.value)"
                  placeholder="Phone Number"
                  variant="underlined"
                  color="teal"
                  required
                ></v-text-field>
              </v-col>
            </v-row>
            <v-divider></v-divider>

            <v-row>
              <v-col cols="1" sm="2">Image URL</v-col>
              <v-col cols="12" sm="8">
                <v-text-field
                  :value="image"
                  @input="$emit('update:image', $event.target.value)"
                  placeholder="Image Url"
                  required
                  variant="underlined"
                  color="teal"
                ></v-text-field>
              </v-col>
            </v-row>
            <v-divider></v-divider>

            <v-row>
              <v-col cols="1" sm="2">Summary*</v-col>
              <v-col cols="12" sm="8">
                <v-textarea
                  :value="summary"
                  :rules = "[v => !!v || 'Summary is required']"
                  @input="$emit('update:summary', $event.target.value)"
                  placeholder="Summary"
                  variant="underlined"
                  color="teal"
                  required
                  clearable
                ></v-textarea>
              </v-col>
            </v-row>
            <v-divider></v-divider>
          </v-container>
        </v-expansion-panel-text>
      </v-form>
    </v-expansion-panel>
  </v-expansion-panels>
</template>

<script>
import axios from 'axios'
import { useVuelidate } from '@vuelidate/core'



  export default {

    name: "BasicDetails",
      props:{
          name: String,
          email: String,
          phone: String,
          image: String,
          summary: String
      },

    data(){
      return{
        panel:0,
        nameRules: [
                    v => !!v  || 'Name is required',
                    v => (v && v.length >= 3) || 'Name must be more than 3 characters',
                    ],
        emailRules: [
                    v => !!v || 'E-mail is required',
                    v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
                    ],
        phonerules: [
                      v => !!v || 'Phone is required',
                      v =>  /^((1|91)?(\d{3}))?[- ]?(\d{3})[- ]?(\d{4})$/.test(v) ||'Enter valid Phone Number'
        ]

      }
    },


    }
</script>
