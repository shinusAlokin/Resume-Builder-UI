<template>
  <v-expansion-panels focusable>
    <v-expansion-panel title="Skills">
      <v-expansion-panel-text v-for="(i, k) in count" :key="k">
        <v-container fluid>
          <v-row>
            <v-col cols="1" sm="1" class="label-col">Skill*</v-col>
            <v-col cols="12" sm="8">
              <v-text-field
                :value="skill"
                @input="$emit('update:skill', $event.target.value)"
                placeholder="Skill"
                required
                variant="underlined"
                color="teal"
              ></v-text-field>
            </v-col>
          </v-row>
          <hr />

          <v-row>
            <v-col cols="1" sm="1" class="label-col">Rating*</v-col>
            <v-col cols="12" sm="8">
              <v-text-field
                @input="$emit('update:rating', $event.target.value)"
                placeholder="Rating out of 10"
                :value="rating"
                :items="range"
                variant="underlined"
                color="teal"
              ></v-text-field>
            </v-col>
          </v-row>
          <hr />
        </v-container>

        <v-btn
          color="teal"
          @click="[addMore, $emit('add-data', data)]"
          class="adder"
          >Add More</v-btn
        >
        <v-btn @click="[$emit('remove-data', data), remove]" class="remover"
          >Remove</v-btn
        >
      </v-expansion-panel-text>
    </v-expansion-panel>
  </v-expansion-panels>
</template>

<script>
export default{
    name: "Skills",
    props:{
      skill: String,
      rating: String
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
