 <template>
    <v-expansion-panels focusable>
        <v-expansion-panel
          title="Location Details"
          
        >
        <v-expansion-panel-text v-for="(i, k) in count" :key="k">

      <v-text-field
        @input="$emit('update:address_line', $event.target.value)"
          :value="address_line"
        label="Address Line"
        variant="underlined"
        color="teal"
        clearable
        required
      ></v-text-field>

      <v-text-field
      :value="street_name"
          @input="$emit('update:street_name', $event.target.value)"
        label="Street Name"
        variant="underlined"
        color="teal"
        clearable
      ></v-text-field>

      <v-text-field
          :value="city"
        @input="$emit('update:city', $event.target.value)"
        label="City"
        variant="underlined"
        color="teal"
      ></v-text-field>

      <v-select
      :value="country"
      :items="countries"
      @select="$emit('update:country', $event.target.value)"
      label="Country"
      variant="underlined"
        color="teal"
    ></v-select>

      <v-text-field
      @input="$emit('update:zip_code', $event.target.value)"
        :value="zip_code"
        label="Zip-Code"
        required
        variant="underlined"
        color="teal"
      ></v-text-field>

      <v-btn @click="[addMore, $emit('add-data', data)]">Add</v-btn>
      <v-btn @click="[$emit('remove-data', data), remove]">Remove</v-btn>
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
          countries: Array
        },
        data(){
          return{
            count:1

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