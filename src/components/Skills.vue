<template>
    <v-expansion-panels focusable>
        <v-expansion-panel
          title="Skills"
        >
        <v-expansion-panel-text v-for="(i, k) in count" :key="k">
      <v-text-field
        @input="$emit('update:skill', $event.target.value)"
        :counter="10"
        label="Skill"
        required
      ></v-text-field>

      <v-text-field
    @input="$emit('update:rating', $event.target.value)"
    label="Rating"
    placeholder="Out of 10"
    :items="range"
    variant="solo"
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