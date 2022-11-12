 <template>
    <v-expansion-panels >
        <v-expansion-panel
          title="Location Details"
          
        >
        <v-expansion-panel-text v-for="(i, k) in count" :key="k">

      <v-text-field
      
        @input="$emit('update:address_line', $event.target.value)"
        :counter="10"
        label="Address Line"
        required
      ></v-text-field>

      <v-text-field

          @input="$emit('update:street_name', $event.target.value)"
        label="Street Name"
      ></v-text-field>

      <v-text-field

        @input="$emit('update:city', $event.target.value)"
        label="City"
      ></v-text-field>

      <v-select

      @select="$emit('update:country', $event.target.value)"
    label="Country"
    :items="items"
    ></v-select>

      <v-text-field

      @input="$emit('update:zip_code', $event.target.value)"
        label="Zip-Code"
        required
      ></v-text-field>
      <v-btn @click="[addMore, $emit('add-data', data)]">Add</v-btn>
      <v-btn @click="remove">Remove</v-btn>
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
          zip_code: String
        },
        data(){
          return{
            items:['India', 'America', 'England', 'France', 'Pakistan', 'Russia'],
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