<template>
    
    <v-expansion-panels>
        <v-expansion-panel
          title="Projects"
        >
        <v-expansion-panel-text>
      <v-text-field
        @input="$emit('update:project_title', $event.target.value)"
        label="Project Title"
        required
      ></v-text-field>

      <v-text-field
    @input="$emit('update:skills', $event.target.value)"
    label="Skills"
    ></v-text-field>

      <v-textarea
      @input="$emit('update:description', $event.target.value)"
    label="Description"
    ></v-textarea>
    <v-btn @click="[addMore, $emit('add-data', data)]">Add</v-btn>
      <v-btn @click="[$emit('remove-data', data), remove]">Remove</v-btn>
        </v-expansion-panel-text>
      
      </v-expansion-panel>
      </v-expansion-panels>
  </template>    


<script>
    export default{
        name: "Projects",
        props:{
          project_title: String,
          skills: String,
          description: String
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