<template>
  <v-expansion-panels>
    <v-expansion-panel title="Projects">
      <v-expansion-panel-text>
        <v-container fluid>
          <v-row>
            <v-col cols="1" sm="2">Project Title</v-col>
            <v-col cols="12" sm="8">
              <v-text-field
                :value="project_title"
                @input="$emit('update:project_title', $event.target.value)"
                placeholder="Project Title"
                variant="underlined"
                color="teal"
                clearable
                required
              ></v-text-field>
            </v-col>
          </v-row>
          <v-divider></v-divider>

          <v-row>
            <v-col cols="1" sm="2">Skills</v-col>
            <v-col cols="12" sm="8">
              <v-text-field
                :value="skills"
                @input="$emit('update:skills', $event.target.value)"
                placeholder="Skills"
                variant="underlined"
                color="teal"
              ></v-text-field>
            </v-col>
          </v-row>
          <v-divider></v-divider>

          <v-row>
            <v-col cols="1" sm="2">Description</v-col>
            <v-col cols="12" sm="8">
              <v-textarea
                :value="description"
                @input="$emit('update:description', $event.target.value)"
                placeholder="Description"
                variant="underlined"
                color="teal"
                required="true"
              ></v-textarea>
            </v-col>
          </v-row>
          <v-divider></v-divider>
        </v-container>
        <div class="add-rm-btn">
        <v-btn
            @click="[addMore, $emit('add-data', data)]"
            color="#00848E"
            variant="plain"
            ><i class="fas fa-plus" aria-hidden="true"></i>Add Project</v-btn
          >
          <v-btn variant="plain" color="#00848E" @click="[$emit('remove-data', data), remove]" 
            ><i class="fas fa-minus" aria-hidden="true"></i>Remove</v-btn
          >
        </div>
      </v-expansion-panel-text>
    </v-expansion-panel>
  </v-expansion-panels>
</template>

<script>
export default{
    name: "Projects",
    props:{
      project_title: String,
      skills: String,
      description: String
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
