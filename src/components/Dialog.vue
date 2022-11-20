<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" width="600">
      
      <v-card>
        <v-alert density="compact" text prominent variant="outlined" :type="alertType" closable>
        {{heading}}
      </v-alert>
        <v-card-title class="text-h5"> </v-card-title>

        <v-card-text>
          {{message}}
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>
          <div v-if="goHome">
            <a href="/" class="nav-link"
              ><v-btn text> Back to Home </v-btn></a
            >
          </div>
          <div v-else>
            <v-btn color="grey" text @click="dialog = false"> {{cancelText}} </v-btn>
          </div>
          

          <div v-if="!preview">
            <v-btn :color="buttonColor" text @click="$emit('something')">
              {{action}}
            </v-btn>
          </div>

          <div v-else>
            <a :href="to" class="nav-link"
              ><v-btn :color="buttonColor" text> {{action}} </v-btn></a
            >

            <router-view />
          </div>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  name: "Dialog",
  props:{
      previewId:Number,
      dialog: Boolean,
      basic_details_id: Number,
      alertType: String,
      buttonColor: String,
      message: String,
      alertMessage:String,
      heading: String,
      action: String,
      to: String,
      preview:{
        type: Boolean,
        default: false
      },
      cancelText:{
        type:String,
        default: "Cancel"
      },
      goHome:{
        type:Boolean,
        default: false
      }
  },
  methods:{
    reload(){
      window.location.reload()
    }
  },
}
</script>

<style>
.alert-box {
  padding: 1em;
  height: 400px;
}
</style>
