<template>
    <v-expansion-panels>
        <v-expansion-panel
          title="Education "
        >
        <v-expansion-panel-text v-for="(i, k) in count" :key="k">
      <v-text-field
        @input="$emit('update:qualification', $event.target.value)"
        label="Qualification"
        required
      ></v-text-field>

      <v-text-field
        @input="$emit('update:course_name', $event.target.value)"
        label="Course Name"
      ></v-text-field>

      <v-text-field
          @input="$emit('update:institute_name', $event.target.value)"
        label="Institute Name"
      ></v-text-field>

      <v-text-field
          @input="$emit('update:location', $event.target.value)"
        label="Location"
      ></v-text-field>

    <v-text-field
    type="date"
    @input="$emit('update:start_date', $event.target.value)"
    label="Start Date">
    </v-text-field>

      <v-text-field
        type="date"
        @input="$emit('update:end_date', $event.target.value)"
        label="End Date"
        required
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