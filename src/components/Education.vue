<template>
    <v-expansion-panels>
        <v-expansion-panel
          title="Education "
        >
        <v-expansion-panel-text>
      <v-text-field
        v-model="qualification"
        :counter="10"
        label="Qualification"
        required
      ></v-text-field>
      <v-text-field
        v-model="courseName"
        label="Course Name"
      ></v-text-field>
      <v-text-field
        v-model="instituteName"
        label="Institute Name"
      ></v-text-field>
    <v-text-field
    type="date"
    v-model="startDate"
    label="Start Date">
    </v-text-field>

      <v-text-field
        type="date"
        v-model="endDate"
        label="End Date"
        required
      ></v-text-field>
  
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
        name: "Education"
    }
</script>