<template>
  <v-expansion-panels>
    <v-expansion-panel title="Education ">
      <v-expansion-panel-text >
        <v-row v-for="(i, k) in count" :key="k">
        <v-container fluid >
          <v-row>
            <v-col cols="1" sm="2">Qualification*</v-col>
            <v-col cols="12" sm="8">
              <v-text-field
                :rules = "[v => !!v || 'Qualification  is required']"
                :value="qualification"
                @input="$emit('update:qualification', $event.target.value)"
                placeholder="Qualification"
                variant="underlined"
                color="teal"
                required
              ></v-text-field>
            </v-col>
          </v-row>
          <v-divider></v-divider>

          <v-row>
            <v-col cols="1" sm="2">Course Name*</v-col>
            <v-col cols="12" sm="8">
              <v-text-field
                :rules = "[v => !!v || 'Course Name is required']"
                :value="course_name"
                @input="$emit('update:course_name', $event.target.value)"
                placeholder="Course Name"
                variant="underlined"
                color="teal"
              ></v-text-field>
            </v-col>
          </v-row>
          <v-divider></v-divider>

          <v-row>
            <v-col cols="1" sm="2">Institute Name*</v-col>
            <v-col cols="12" sm="8">
              <v-text-field
                :value="institute_name"
                :rules = "[v => !!v || 'Institute Name is required']"
                @input="$emit('update:institute_name', $event.target.value)"
                placeholder="Institute Name"
                variant="underlined"
                color="teal"
              ></v-text-field>
            </v-col>
          </v-row>
          <v-divider></v-divider>

          <v-row>
            <v-col cols="1" sm="2">Location*</v-col>
            <v-col cols="12" sm="8">
              <v-text-field
                :value="location"
                :rules = "[v => !!v || 'Location is required']"
                @input="$emit('update:location', $event.target.value)"
                placeholder="Location"
                variant="underlined"
                color="teal"
              ></v-text-field>
            </v-col>
          </v-row>
          <v-divider></v-divider>

          <v-row>
            <v-col cols="1" sm="2">Start Date*</v-col>
            <v-col cols="12" sm="8">
              <v-text-field
                :rules = "[v => !!v || 'Start Date is required']"
                :value="start_date"
                onfocus="(this.type='date')"
                @input="$emit('update:start_date', $event.target.value)"
                placeholder="Start Date"
                variant="underlined"
                color="teal"
              >
              </v-text-field>
            </v-col>
          </v-row>
          <v-divider></v-divider>

          <v-row>
            <v-col cols="1" sm="2">End Date*</v-col>
            <v-col cols="12" sm="8">
              <v-text-field
                :value="end_date"
                :rules = "[v => !!v || 'End Date is required']"
                onfocus="(this.type='date')"
                @input="$emit('update:end_date', $event.target.value)"
                placeholder="End Date"
                required
                variant="underlined"
                color="teal"
              ></v-text-field>
            </v-col>
          </v-row>
          <v-divider></v-divider> 
        </v-container>

          <div class="add-rm-btn">
          <v-btn
            @click="[$emit('add-data', data), addMore]"
            color="#00848E"
            variant="plain"
            ><i class="fas fa-plus" aria-hidden="true"></i>Add Education</v-btn
          >
          <v-btn variant="plain" color="#00848E" @click="[$emit('remove-data', data), remove]" 
            ><i class="fas fa-minus" aria-hidden="true"></i>Remove</v-btn
          >
        </div>
      </v-row>
        
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

<style></style>
