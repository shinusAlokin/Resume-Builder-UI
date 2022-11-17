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
                :rules = "[v => !!v || 'Organisation is required']"
                variant="underlined"
                color="teal"
              ></v-text-field>
            </v-col>
          </v-row>
          <v-divider ></v-divider>

          <v-row>
            <v-col cols="1" sm="2">Job Role*</v-col>
            <v-col cols="12" sm="8">
              <v-text-field
                :value="job_role"
                @input="$emit('update:job_role', $event.target.value)"
                placeholder="Job Role"
                required
                :rules = "[v => !!v || 'Job Role is required']"
                variant="underlined"
                color="teal"
              ></v-text-field>
            </v-col>
          </v-row>
          <v-divider></v-divider>

          <v-row>
            <v-col cols="1" sm="2">Key Roles*</v-col>
            <v-col cols="12" sm="8">
              <v-textarea
                :value="key_roles"
                :rules = "[v => !!v || 'Key Roles is required']"
                @input="$emit('update:key_roles', $event.target.value)"
                placeholder="Key Roles"
                variant="underlined"
                color="teal"
              ></v-textarea>
            </v-col>
          </v-row>
          <v-divider></v-divider>

          <v-row>
            <v-col cols="1" sm="2">Start Date*</v-col>
            <v-col cols="12" sm="8">
              <v-text-field
                :value="start_date"
                :rules = "[v => !!v || 'Start Date is required']"
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
                variant="underlined"
                color="teal"
                required
              ></v-text-field>
            </v-col>
          </v-row>
          <v-divider></v-divider>

          <div class="add-rm-btn">
          <v-btn
            @click="[addMore, $emit('add-data', data)]"
            color="#00848E"
            variant="plain"
            ><i class="fas fa-plus" aria-hidden="true"></i>Add Work Experience</v-btn
          >
          <v-btn variant="plain" color="#00848E" @click="[$emit('remove-data', data), remove]" 
            ><i class="fas fa-minus" aria-hidden="true"></i>Remove</v-btn
          >
        </div>
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

<style>
.add-rm-btn{
  color: #00848E;
}
</style>