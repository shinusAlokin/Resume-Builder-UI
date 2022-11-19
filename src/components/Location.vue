<template>
  <v-expansion-panels focusable class="accordion"  v-model="panel" >
    <v-expansion-panel title="Location Details"  expand>
      <v-expansion-panel-text v-for="(i, k) in count" :key="k">
        <v-container fluid>
          <v-row>
            <v-col cols="1" sm="2">Address Line*</v-col>
            <v-col cols="12" sm="8">
              <v-text-field
                @input="$emit('update:address_line', $event.target.value)"
                :value="address_line"
                :rules = "[v => !!v || 'Address Line is required']"
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
                :value="street_name"
                :rules = "[v => !!v || 'Street Name is required']"
                @input="$emit('update:street_name', $event.target.value)"
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
                :value="city"
                :rules = "[v => !!v || 'City  is required']"
                @input="$emit('update:city', $event.target.value)"
                placeholder="City"
                variant="underlined"
                color="teal"
              ></v-text-field>
            </v-col>
          </v-row>
          <v-divider></v-divider>

          <!-- <v-row>
            <v-col cols="1" sm="2">Country*</v-col>
            <v-col cols="12" sm="8">
              <v-combobox
              :rules = "[v => !!v || 'Country is required']"
                v-model="selectedCountry"
                :items="countries"
                placeholder="Country"
                variant="underlined"
                color="teal"
              ></v-combobox>
            </v-col>
          </v-row>
          <v-divider></v-divider> -->

          <v-row>
            <v-col cols="1" sm="2">Country*</v-col>
            <v-col cols="12" sm="8">
              <v-select
                v-model="selectedCountry"
                :items="countries"
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
                @input="$emit('update:zip_code', $event.target.value)"
                :value="zip_code"
                :rules = "[v => !!v || 'Zip-Code is required']"
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
          <v-btn
            @click="[addMore, $emit('add-data', data)]"
            color="#00848E"
            variant="plain"
            ><i class="fas fa-plus" aria-hidden="true"></i>Add Address</v-btn
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
    name: "Location",
    props:{
      address_line: String,
      street_name: String,
      city: String,
      country: String,
      zip_code: String,
    },
    data(){
      return{
        panel:1,
        count:1,
        countries:['India', 'US', 'UK', 'Qatar', 'France', 'Italy', 'Germany']
  }
},
computed: {
    selectedCountry: {
      // getter
      get() {
        return this.country
      },
      // setter
      set(newValue) {
        this.$emit('update:country', newValue)
      }
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
  },
}
</script>
