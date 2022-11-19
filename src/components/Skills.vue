<template>
  <v-expansion-panels >
    <v-expansion-panel title="Skills" expand>
      <v-expansion-panel-text  >
        <v-col>
        <v-container fluid>
          <v-row>
            <v-col cols="1" sm="2" class="label-col">Skill*</v-col>
            <v-col cols="12" sm="8">
              <v-text-field
                :value="skill"
                :rules = "[v => !!v || 'Skill is required']"
                @input="$emit('update:skill', $event.target.value)"
                placeholder="Skill"
                required
                variant="underlined"
                color="teal"
              ></v-text-field>
            </v-col>
          </v-row>
          <v-divider></v-divider>

          <v-row>
            <v-col cols="1" sm="2" class="label-col">Rating</v-col>
            <v-col cols="12" sm="8">
              <v-text-field
                @input="$emit('update:rating', $event.target.value)"
                placeholder="Rating out of 10"
                :value="rating"
                :rules="rules"
                variant="underlined"
                color="teal"
              ></v-text-field>
            </v-col>
          </v-row>
          <v-divider></v-divider>
        </v-container>
        <div class="add-rm-btn">
        <v-btn
           @click="$emit('add-data')" 
            color="#00848E"
            variant="plain"
            ><i class="fas fa-plus" aria-hidden="true"></i>Add Skill</v-btn
          >
          <v-btn variant="plain" color="#00848E" @click="[$emit('remove-data', data), remove]" 
            ><i class="fas fa-minus" aria-hidden="true"></i>Remove</v-btn
          >
        </div>
      </v-col>

      </v-expansion-panel-text>
    </v-expansion-panel>
  </v-expansion-panels>
</template>

<script>
export default{
    name: "Skills",
    props:{
      skill: String,
      panelCount:Number,
      rating: String,
      ind:Number
    },
    data(){
        return{
          panel:'',
          count: 1,
          rules: [ v => !!v  || 'This field is required',],
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

    },
  },
  computed:{
        currentPanel(){
          return this.panel
        }
      }
}
</script>
