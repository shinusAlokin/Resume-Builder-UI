<template>
  <v-expansion-panels>
    <v-expansion-panel title="Education ">
      <v-expansion-panel-text v-for="(i, k) in count" :key="k">
        <v-container fluid>
          <v-row>
            <v-col cols="1" sm="2">Qualification*</v-col>
            <v-col cols="12" sm="8">
              <v-text-field
                :value="qualification"
                @input="$emit('update:qualification', $event.target.value)"
                placeholder="Qualification"
                variant="underlined"
                color="teal"
                clearable
                required
              ></v-text-field>
            </v-col>
          </v-row>
          <hr />

          <v-row>
            <v-col cols="1" sm="2">Course Name*</v-col>
            <v-col cols="12" sm="8">
              <v-text-field
                :value="course_name"
                @input="$emit('update:course_name', $event.target.value)"
                placeholder="Course Name"
                variant="underlined"
                color="teal"
                clearable
              ></v-text-field>
            </v-col>
          </v-row>
          <hr />

          <v-row>
            <v-col cols="1" sm="2">Institute Name*</v-col>
            <v-col cols="12" sm="8">
              <v-text-field
                :value="institute_name"
                @input="$emit('update:institute_name', $event.target.value)"
                placeholder="Institute Name"
                variant="underlined"
                color="teal"
                clearable
              ></v-text-field>
            </v-col>
          </v-row>
          <hr />

          <v-row>
            <v-col cols="1" sm="2">Location*</v-col>
            <v-col cols="12" sm="8">
              <v-text-field
                :value="location"
                @input="$emit('update:location', $event.target.value)"
                placeholder="Location"
                variant="underlined"
                color="teal"
                clearable
              ></v-text-field>
            </v-col>
          </v-row>
          <hr />

          <v-row>
            <v-col cols="1" sm="2">Start Date*</v-col>
            <v-col cols="12" sm="8">
              <v-text-field
                :value="start_date"
                onfocus="(this.type='date')"
                @input="$emit('update:start_date', $event.target.value)"
                placeholder="Start Date"
                variant="underlined"
                color="teal"
                clearable
              >
              </v-text-field>
            </v-col>
          </v-row>
          <hr />

          <v-row>
            <v-col cols="1" sm="2">End Date*</v-col>
            <v-col cols="12" sm="8">
              <v-text-field
                :value="end_date"
                onfocus="(this.type='date')"
                @input="$emit('update:end_date', $event.target.value)"
                placeholder="End Date"
                required
                variant="underlined"
                color="teal"
                clearable
              ></v-text-field>
            </v-col>
          </v-row>
          <hr />

          <v-btn
            color="teal"
            @click="[addMore, $emit('add-data', data)]"
            class="adder"
            >Add More</v-btn
          >
          <v-btn @click="[$emit('remove-data', data), remove]" class="remover"
            >Remove</v-btn
          >
        </v-container>
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
