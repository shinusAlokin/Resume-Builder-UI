<template>
    <v-expansion-panels focusable>
        <v-expansion-panel
          title="Skills"
        >
        <v-expansion-panel-text v-for="(i, k) in count" :key="k">
      <v-text-field
      :value="skill"
        @input="$emit('update:skill', $event.target.value)"
        label="Skill"
        required
        variant="underlined"
        color="teal"
      ></v-text-field>

      <v-text-field
    @input="$emit('update:rating', $event.target.value)"
    label="Rating"
    :value="rating"
    placeholder="Out of 10"
    :items="range"
    variant="underlined"
    color="teal"
    ></v-text-field>

  
    <v-btn @click="[addMore, $emit('add-data', data)]">Add</v-btn>
      <v-btn @click="[$emit('remove-data', data), remove]">Remove</v-btn>
        </v-expansion-panel-text>
      
      </v-expansion-panel>
      </v-expansion-panels>
  </template>    


<script>
    export default{
        name: "Skills",
        props:{
          skill: String,
          rating: String
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