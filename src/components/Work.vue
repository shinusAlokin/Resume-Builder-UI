<template>
    <v-expansion-panels>
        <v-expansion-panel
          title="Work"
        >
        <v-expansion-panel-text>
      <v-text-field
        v-model="organisation"
        :counter="10"
        label="Organisation"
        required
      ></v-text-field>
      <v-text-field
        v-model="jobRole"
        label="Job Role"
      ></v-text-field>
      <v-text-field
        v-model="keyRoles"
        label="Key Roles"
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
        name: "Work"
    }
</script>