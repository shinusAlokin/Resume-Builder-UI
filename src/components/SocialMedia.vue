<template>
    <v-expansion-panels>
        <v-expansion-panel
          title="Social Media"
        >
        <v-expansion-panel-text>
      <v-text-field
      :value="network"
        @input="$emit('update:network', $event.target.value)"
        label="Network"
        variant="underlined"
        color="teal"
        clearable
        required
      ></v-text-field>

      <v-text-field
      :value="url"
        @input="$emit('update:url', $event.target.value)"
        label="URL"
        required
        variant="underlined"
        color="teal"
        clearable
      ></v-text-field>

      <v-text-field
      :value="user_name"
        @input="$emit('update:user_name', $event.target.value)"
        label="User Name"
        variant="underlined"
        color="teal"
        clearable
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