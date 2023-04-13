<template>
  <v-expansion-panels focusable v-model="panel">
    <v-expansion-panel title="Basic Details*" expand>
      <v-form>
        <v-expansion-panel-text>
          <v-container fluid>
            <v-row>
              <v-col cols="1" sm="2">Name*</v-col>
              <v-col cols="12" sm="8">
                <v-text-field
                  :rules="nameRules"
                  v-model="basicDetails.name"
                  placeholder="Name"
                  variant="underlined"
                  color="teal"
                  required
                ></v-text-field>
              </v-col>
            </v-row>
            <v-divider></v-divider>

            <v-row>
              <v-col cols="1" sm="2">Email*</v-col>
              <v-col cols="12" sm="8">
                <v-text-field
                  :rules="emailRules"
                  v-model="basicDetails.email"
                  placeholder="E-mail"
                  variant="underlined"
                  color="teal"
                  required
                ></v-text-field>
              </v-col>
            </v-row>
            <v-divider></v-divider>

            <v-row>
              <v-col cols="1" sm="2">Phone Number*</v-col>
              <v-col cols="12" sm="8">
                <v-text-field
                  :rules="phonerules"
                  v-model="basicDetails.phone"
                  placeholder="Phone Number"
                  variant="underlined"
                  color="teal"
                  required
                ></v-text-field>
              </v-col>
            </v-row>
            <v-divider></v-divider>

            <v-row>
              <v-col cols="1" sm="2">Image URL</v-col>
              <v-col cols="12" sm="8">
                <v-text-field
                  v-model="basicDetails.image_url"
                  placeholder="Image Url"
                  required
                  variant="underlined"
                  color="teal"
                ></v-text-field>
              </v-col>
            </v-row>
            <v-divider></v-divider>

            <v-row>
              <v-col cols="1" sm="2">Summary*</v-col>
              <v-col cols="12" sm="8">
                <v-textarea
                  auto-grow
                  :rules="[(v) => !!v || 'Summary is required']"
                  v-model="basicDetails.summary"
                  placeholder="Summary"
                  variant="underlined"
                  color="teal"
                  required
                ></v-textarea>
              </v-col>
            </v-row>
            <v-divider></v-divider>
          </v-container>
        </v-expansion-panel-text>
      </v-form>
    </v-expansion-panel>
  </v-expansion-panels>
</template>

<script>
import axios from "axios";

export default {
  name: "BasicDetails",
  props: {
    basic: {
      name: String,
      email: String,
      phone: String,
      image: String,
      summary: String,
    }
  },

  data() {
    return {
      panel: 0,
      basicDetails: {}
    };
  },
  computed: {
    nameRules() {
      return [
        (v) => !!v || "Name is required",
        (v) => (v && v.length >= 3) || "Name must be  atleast 3 characters",
        (v) => /[A-Za-z]/.test(v) || "Invalid Name",
      ];
    },
    emailRules() {
      return [
        (v) => !!v || "E-mail is required",
        (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
      ];
    },

    phonerules() {
      return [
        (v) => !!v || "Phone is required",
        (v) =>
          /^((1|91)?(\d{3}))?[- ]?(\d{3})[- ]?(\d{4})$/.test(v) ||
          "Enter valid Phone Number",
      ];
    },
  },
  watch: {
    basic: {
      handler(value) {
        this.basicDetails = Object.assign({}, value)
      },
      deep: true,
      immediate: true
    }
  }
};
</script>
