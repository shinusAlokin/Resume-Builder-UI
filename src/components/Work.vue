<template>
  <v-expansion-panels>
      <v-expansion-panel
        title="Work"
      >
      <v-expansion-panel-text v-for="(i, k) in count" :key="k">
    <v-text-field
      @input="$emit('update:organisation', $event.target.value)"
      label="Organisation"
      required
    ></v-text-field>

    <v-text-field
      @input="$emit('update:job_role', $event.target.value)"
      label="Job Role"
      required
    ></v-text-field>

    <v-textarea
      @input="$emit('update:key_roles', $event.target.value)"
      label="Key Roles"
    ></v-textarea>

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
      name: "Work",
      props:{
        organisation: String,
        job_role: String,
        key_roles:String,
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