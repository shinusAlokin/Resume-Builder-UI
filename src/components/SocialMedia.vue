<template>
    <v-expansion-panels>
        <v-expansion-panel
          title="Social Media"
        >
        <v-expansion-panel-text>
      <v-text-field
        @input="$emit('update:network', $event.target.value)"
        label="Network"
        variant="solo"
        required
      ></v-text-field>

      <v-text-field
        @input="$emit('update:url', $event.target.value)"
        :counter="10"
        label="URL"
        required
        variant="solo"
      ></v-text-field>

      <v-text-field
        @input="$emit('update:user_name', $event.target.value)"
        :counter="10"
        label="User Name"
        variant="solo"
        required
      ></v-text-field>

      <v-btn @click="[addMore, $emit('add-data', data)]">Add</v-btn>
      <v-btn @click="[remove, $emit('remove-data', data)]">Remove</v-btn>
        </v-expansion-panel-text>
        
      </v-expansion-panel>
      </v-expansion-panels>
  </template>    


<script>
    export default {
      name: "SocialMedia",
        props:{
            network: String,
            user_name: String,
            url: String
        },
  
        data(){
            return{
              count: 1
            }
        },
        methods:{
        remove(){
          if (this.count > 1){
            this.count--
          }
          
        },
        addMore(){
          this.count++

        }
      }

    }
</script>