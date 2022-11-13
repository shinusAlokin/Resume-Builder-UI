<template>
  <v-expansion-panels>
      <v-expansion-panel
        title="Work"
      >
      <v-expansion-panel-text v-for="(i, k) in count" :key="k">
    <v-text-field
    :value="organisation"
      @input="$emit('update:organisation', $event.target.value)"
      label="Organisation"
      required
      variant="underlined"
        color="teal"
    ></v-text-field>

    <v-text-field
    :value="job_role"
      @input="$emit('update:job_role', $event.target.value)"
      label="Job Role"
      required
      variant="underlined"
      color="teal"
    ></v-text-field>

    <v-textarea
    :value="key_roles"
      @input="$emit('update:key_roles', $event.target.value)"
      label="Key Roles"
      variant="underlined"
        color="teal"
    ></v-textarea>

  <v-text-field
  :value="start_date"
  type="date"
  @input="$emit('update:start_date', $event.target.value)"
  label="Start Date"
  variant="underlined"
        color="teal"
  >
  </v-text-field>

    <v-text-field
    :value="end_date"
      type="date"
      @input="$emit('update:end_date', $event.target.value)"
      label="End Date"
      placeholder="dd/mm/yyyy"
      variant="underlined"
        color="teal"
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