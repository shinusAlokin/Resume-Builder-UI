<template>
    <v-expansion-panels>
        <v-expansion-panel
          title="Skills"
        >
        <v-expansion-panel-text>
      <v-text-field
        v-model="skill"
        :counter="10"
        label="Skill"
        required
      ></v-text-field>
      <v-select
      v-model="rating"
    label="Rating"
    :items="range"
    variant="solo"
    ></v-select>

  
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
    export default{
        name: "Skills",
        data(){
            return{
                range: [...Array(11).keys()]
            }
        }
    }
</script>