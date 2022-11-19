<template>
  <v-expansion-panels>
    <v-expansion-panel title="Social Media">
      <v-expansion-panel-text>
        <v-col v-for="(i, k) in count" :key="k">
        <v-container fluid>
          <v-row>
            <v-col cols="1" sm="2">Network</v-col>
            <v-col cols="12" sm="8">
              <v-text-field
                :value="network"
                @input="$emit('update:network', $event.target.value)"
                placeholder="Network"
                variant="underlined"
                color="teal"
                clearable
                required
              ></v-text-field>
            </v-col>
          </v-row>
          <v-divider></v-divider>

          <v-row>
            <v-col cols="1" sm="2">URL</v-col>
            <v-col cols="12" sm="8">
              <v-text-field
                :value="url"
                @input="$emit('update:url', $event.target.value)"
                placeholder="URL"
                required
                variant="underlined"
                color="teal"
              ></v-text-field>
            </v-col>
          </v-row>
          <v-divider></v-divider>
          <v-row>
            <v-col cols="1" sm="2">User Name</v-col>
            <v-col cols="12" sm="8">
              <v-text-field
                :value="user_name"
                @input="$emit('update:user_name', $event.target.value)"
                placeholder="User Name"
                variant="underlined"
                color="teal"
                required
              ></v-text-field>
            </v-col>
          </v-row>
          <v-divider></v-divider>
        </v-container>

        <div class="add-rm-btn">
        <v-btn
            @click="[addMore, $emit('add-data', data)]"
            color="#00848E" 
            variant="plain"
            ><i class="fas fa-plus" aria-hidden="true"></i>Add Social Media</v-btn
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
export default {
  name: "SocialMedia",
    props:{
        network: String,
        user_name: String,
        url: String
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
