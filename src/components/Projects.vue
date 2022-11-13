<template>
    
    <v-expansion-panels>
        <v-expansion-panel
          title="Projects"
        >
        <v-expansion-panel-text>
      <v-text-field
      :value="project_title"
        @input="$emit('update:project_title', $event.target.value)"
        label="Project Title"
        variant="underlined"
        color="teal"
        clearable
        required
      ></v-text-field>

      <v-text-field
      :value="skills"
    @input="$emit('update:skills', $event.target.value)"
    label="Skills"
    variant="underlined"
        color="teal"
    ></v-text-field>

      <v-textarea
      :value="description"
      @input="$emit('update:description', $event.target.value)"
    label="Description"
    variant="underlined"
    color="teal"
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