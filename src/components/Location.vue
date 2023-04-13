<template>
  <v-expansion-panels focusable class="accordion" v-model="panel">
    <v-expansion-panel title="Location Details*" expand>
      <v-expansion-panel-text v-for="(i, k) in count" :key="k">
        <v-container fluid>
          <v-row>
            <v-col cols="1" sm="2">Address Line*</v-col>
            <v-col cols="12" sm="8">
              <v-text-field
                v-model="locationDetails[k].address_line"
                :rules="[(v) => !!v || 'Address Line is required']"
                placeholder="Address Line"
                variant="underlined"
                color="teal"
                required
              ></v-text-field>
            </v-col>
          </v-row>
          <v-divider></v-divider>

          <v-row>
            <v-col cols="1" sm="2">Street Name*</v-col>
            <v-col cols="12" sm="8">
              <v-text-field
                v-model="locationDetails[k].street_name"
                :rules="[(v) => !!v || 'Street Name is required']"
                placeholder="Street Name"
                variant="underlined"
                color="teal"
              ></v-text-field>
            </v-col>
          </v-row>
          <v-divider></v-divider>

          <v-row>
            <v-col cols="1" sm="2">City*</v-col>
            <v-col cols="12" sm="8">
              <v-text-field
                :rules="[(v) => !!v || 'City  is required']"
                v-model="locationDetails[k].city"
                placeholder="City"
                variant="underlined"
                color="teal"
              ></v-text-field>
            </v-col>
          </v-row>
          <v-divider></v-divider>

          <v-row>
            <v-col cols="1" sm="2">Country*</v-col>
            <v-col cols="12" sm="8">
              <v-select
                v-model="locationDetails[k].country"
                :items="['India', 'US']"
                placeholder="Country"
                variant="underlined"
                color="teal"
              ></v-select>
            </v-col>
          </v-row>
          <v-divider></v-divider>

          <v-row>
            <v-col cols="1" sm="2">Zip-Code* </v-col>
            <v-col cols="12" sm="8">
              <v-text-field
                v-model="locationDetails[k].zip_code"
                placeholder="Zip-Code"
                variant="underlined"
                color="teal"
                required
              ></v-text-field>
            </v-col>
          </v-row>
          <v-divider></v-divider>
        </v-container>
        <div class="add-rm-btn">
          <v-btn @click="addMore" color="#00848E" variant="plain"
            ><i class="fas fa-plus" aria-hidden="true"></i>Add Address</v-btn
          >
          <v-btn
            variant="plain"
            color="#00848E"
            @click="remove"
            ><i class="fas fa-minus" aria-hidden="true"></i>Remove</v-btn
          >
        </div>
      </v-expansion-panel-text>
    </v-expansion-panel>
  </v-expansion-panels>
</template>

<script>
export default {
  name: "Location",
  props: {
    location_details: {
      address_line: String,
      street_name: String,
      city: String,
      country: String,
      zip_code: String,
    },
  },
  data() {
    return {
      panel: 1,
      count: 1,
      locationDetails: [],
    };
  },
  
  methods: {
    remove() {
      if (this.count > 1) {
        this.count--;
      }
    },
    addMore() {
      this.count++;
      this.$emit("addLocation");
    },
  },
  watch: {
    location_details: {
      handler(value) {
        this.locationDetails = [...value];
      },
      deep: true,
      immediate: true,
    },
  },
};
</script>
