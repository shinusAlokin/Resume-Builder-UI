<template>
  <v-expansion-panels focusable class="accordion">
    <v-expansion-panel title="Location Details">
      <v-expansion-panel-text v-for="(i, k) in count" :key="k">
        <v-container fluid>
          <v-row>
            <v-col cols="1" sm="2">Address Line*</v-col>
            <v-col cols="12" sm="8">
              <v-text-field
                @input="$emit('update:address_line', $event.target.value)"
                :value="address_line"
                placeholder="Address Line"
                variant="underlined"
                color="teal"
                clearable
                required
              ></v-text-field>
            </v-col>
          </v-row>
          <hr />

          <v-row>
            <v-col cols="1" sm="2">Street Name*</v-col>
            <v-col cols="12" sm="8">
              <v-text-field
                :value="street_name"
                @input="$emit('update:street_name', $event.target.value)"
                placeholder="Street Name"
                variant="underlined"
                color="teal"
                clearable
              ></v-text-field>
            </v-col>
          </v-row>
          <hr />

          <v-row>
            <v-col cols="1" sm="2">City*</v-col>
            <v-col cols="12" sm="8">
              <v-text-field
                :value="city"
                @input="$emit('update:city', $event.target.value)"
                placeholder="City"
                variant="underlined"
                color="teal"
              ></v-text-field>
            </v-col>
          </v-row>
          <hr />

          <v-row>
            <v-col cols="1" sm="2">Country*</v-col>
            <v-col cols="12" sm="8">
              <v-combobox
                :value="country"
                :items="countries"
                placeholder="Country"
                @input="$emit('update:country', $event.target.value)"
                variant="underlined"
                color="teal"
              ></v-combobox>
            </v-col>
          </v-row>
          <hr />

          <v-row>
            <v-col cols="1" sm="2">Zip-Code* </v-col>
            <v-col cols="12" sm="8">
              <v-text-field
                @input="$emit('update:zip_code', $event.target.value)"
                :value="zip_code"
                placeholder="Zip-Code"
                variant="underlined"
                color="teal"
                required
              ></v-text-field>
            </v-col>
          </v-row>
          <hr />

          <v-btn
            color="teal"
            @click="[addMore, $emit('add-data', data)]"
            class="adder"
            >Add More</v-btn
          >
          <v-btn @click="[$emit('remove-data', data), remove]" class="remover"
            >Remove</v-btn
          >
        </v-container>
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
        countr: this.country,
        count:1,
        countries:["India", "Japan", "USA", "France", "UK", "Qatar", "Italy"]

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
