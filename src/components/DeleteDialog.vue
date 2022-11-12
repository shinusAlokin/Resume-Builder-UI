<template>
    <v-row justify="center">
      <!-- <v-btn 
      @click.stop="dialog = true">

      </v-btn> -->

      <v-dialog
        v-model="dialog"
      width="600"
      >
      <v-alert
      density="compact"
      prominent
      type="warning"
      closable
    >
      Delete Entry?
    </v-alert>
        <v-card>
          <v-card-title class="text-h5">
            
          </v-card-title>
  
          <v-card-text>
            Are you sure you want to delete?
          </v-card-text>
  
          <v-card-actions>
            <v-spacer></v-spacer>
  
            <v-btn
              color="green darken-1"
              text
              @click="dialog = false"
            >
              Cancel
            </v-btn>
  
            <v-btn
              color="red darken-1"
              text
              @click="$emit('delete-resume', basic_details_id)"
            >
              Delete
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
  </template>

<script>
  export default {
    name: "DeleteDialog",
    props:{
        dialog: Boolean,
        basic_details_id: Number
    },
  }
</script>

<style>
    .alert-box{
        padding: 1em;
        height: 400px;
    }
</style>