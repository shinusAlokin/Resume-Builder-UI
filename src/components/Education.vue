<template>
    <v-expansion-panels>
        <v-expansion-panel
          title="Education "
        >
        <v-expansion-panel-text v-for="(i, k) in count" :key="k">
      <v-text-field
      :value="qualification"
        @input="$emit('update:qualification', $event.target.value)"
        label="Qualification"
        variant="underlined"
        color="teal"
        clearable
        required
      ></v-text-field>

      <v-text-field
      :value="course_name"
        @input="$emit('update:course_name', $event.target.value)"
        label="Course Name"
        variant="underlined"
        color="teal"
        clearable
      ></v-text-field>

      <v-text-field
      :value="institute_name"
          @input="$emit('update:institute_name', $event.target.value)"
        label="Institute Name"
        variant="underlined"
        color="teal"
        clearable
      ></v-text-field>

      <v-text-field
      :value="location"
          @input="$emit('update:location', $event.target.value)"
        label="Location"
        variant="underlined"
        color="teal"
        clearable
      ></v-text-field>

    <v-text-field
    :value="start_date"
    type="date"
    @input="$emit('update:start_date', $event.target.value)"
    label="Start Date"
    variant="underlined"
        color="teal"
        clearable
        >
    </v-text-field>

      <v-text-field
      :value="end_date"
        type="date"
        @input="$emit('update:end_date', $event.target.value)"
        label="End Date"
        required
        variant="underlined"
        color="teal"
        clearable
      ></v-text-field>
  
      <v-btn @click="[addMore, $emit('add-data', data)]">Add</v-btn>
      <v-btn @click="[$emit('remove-data', data), remove]">Remove</v-btn>
        </v-expansion-panel-text>
      
      </v-expansion-panel>
      </v-expansion-panels>
  </template>    


<script>
    export default{
        name: "Education",
        props:{
          qualification: String,
          course_name: String,
          institute_name:String,
          location:String,
          start_date:String,
          end_date:String
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

<style>

</style>