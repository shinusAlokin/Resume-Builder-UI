<template>
  <v-expansion-panels>
    <v-expansion-panel title="Work">
      <v-expansion-panel-text v-for="(i, k) in count" :key="k">
        <v-container fluid>
          <v-row no-gutters="false">
            <v-col cols="1" sm="2">Organisation*</v-col>
            <v-col cols="12" sm="8">
              <v-text-field
                :value="organisation"
                @input="$emit('update:organisation', $event.target.value)"
                placeholder="Organisation"
                required
                variant="underlined"
                color="teal"
              ></v-text-field>
            </v-col>
          </v-row>
          <hr />

          <v-row>
            <v-col cols="1" sm="2">Job Role*</v-col>
            <v-col cols="12" sm="8">
              <v-text-field
                :value="job_role"
                @input="$emit('update:job_role', $event.target.value)"
                placeholder="Job Role"
                required
                variant="underlined"
                color="teal"
              ></v-text-field>
            </v-col>
          </v-row>
          <hr />

          <v-row>
            <v-col cols="1" sm="2">Key Roles*</v-col>
            <v-col cols="12" sm="8">
              <v-textarea
                :value="key_roles"
                @input="$emit('update:key_roles', $event.target.value)"
                placeholder="Key Roles"
                variant="underlined"
                color="teal"
              ></v-textarea>
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
                variant="underlined"
                color="teal"
                required
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
