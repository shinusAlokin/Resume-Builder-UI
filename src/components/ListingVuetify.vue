<template>
    <div class="input-container">
      <v-text-field
        density="compact"
        variant="outlined"
        color="#333"
        placeholder="Search by name or email"
        prepend-inner-icon="mdi-magnify"
        v-model="search"
        @input="getSearchContent"
      ></v-text-field>
    </div>

    <template>
      <Dialog
        :dialog="dialog"
        alertType="warning"
        heading="Delete"
        buttonColor="red"
        message="Are you sure you want to delete resume?"
        action="Delete"
        @something="[deleteBasic(deleteId), $emit('delete-success')]"
      />
    </template>

    <v-table fluid class="content-table elevation-1" focusable
    :pagination.sync="page"
    items-per-page="6" 
    @page-count = "pageCount = $event">
      <thead>
        <tr>
          <th class="text-left" v-for="item in heading">
            <div class="items">{{item.text}}</div>
          </th>
          <th></th>
        </tr>
      </thead>
      <tbody
        v-for="item in content"
        :key="item.basic_details_id"
        v-if="searchContent"
      >
        <tr v-for="i in item" :key="i.basic_details_id">
          <td class="tb-td">{{ capitalizeName(i.name) }}</td>
          <td class="tb-td">{{ i.email_address }}</td>
          <td class="tb-td">{{ formatPhoneNumber(i.phone_number) }}</td>
          <td class="tb-td">{{ i.date_applied }}</td>
          <td>
            <v-menu>
              <template v-slot:activator="{on, props }">
                <v-icon v-bind="props">mdi-dots-vertical</v-icon>
              </template>
              <v-list>
                <v-list-item class="list-items">
                  <v-list-item-title>
                    <router-link
                      :to="`api/resume/edit/${i.basic_details_id}`"
                      class="edit-link"
                      ><v-btn class="edit-dlt" variant="plain">Edit</v-btn></router-link
                    >
                  </v-list-item-title>
                </v-list-item>
                <v-list-item class="list-items">
                  <v-list-item-title
                    ><v-btn
                    class="edit-dlt"
                      variant="plain"
                      @click="triggerDelete(i.basic_details_id)"
                      >Delete</v-btn
                    >
                  </v-list-item-title>
                </v-list-item>
                <v-list-item class="list-items">
                  <v-list-item-title>
                    <router-link
                      :to="`api/resume/preview/${i.basic_details_id}`"
                      class="edit-link"
                      ><v-btn class="edit-dlt" variant="plain">Preview</v-btn></router-link
                    >
                  </v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
          </td>
        </tr>
      </tbody>
  
      <tbody v-for="item in searchedContent" v-else>
        <tr v-for="i in item" :key="i.basic_details_id" >
          <td>{{ capitalizeName(i.name) }}</td> 
          <td>{{ i.email_address }}</td>
          <td>{{ formatPhoneNumber(i.phone_number) }}</td>
          <td>{{ i.date_applied }}</td>
          <td>
            <v-menu>
              <template v-slot:activator="{on, props }">
                <v-icon v-bind="props">mdi-dots-vertical</v-icon>
              </template>
  
              <v-list>
                <v-list-item class="list-items">
                  <v-list-item-title>
                    <router-link
                      :to="`api/resume/edit/${i.basic_details_id}`"
                      class="edit-link"
                      ><v-btn class="edit-dlt" variant="plain">Edit</v-btn></router-link
                    >
                  </v-list-item-title>
                </v-list-item>
                <v-list-item class="list-items">
                  <v-list-item-title
                    ><v-btn
                      class="edit-dlt"
                      variant="plain"
                      @click="triggerDelete(i.basic_details_id)"
                      >Delete</v-btn
                    >
                  </v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
          </td>
        </tr>
      </tbody>
   
    </v-table>
   
    <router-view />
    <!-- <div class="text-center">
    <v-pagination
      v-model="page"
      :length="6"
    ></v-pagination>
  </div> -->
  
  </template>
  
  <script>
  import axios from 'axios'
  import Dialog from '@/components/Dialog.vue'
  
  export default{
  
      name: "Listing",
      components:{
          Dialog,
      },
      data(){
          return{
              heading:[
                  {id:1, text: 'Name'},
                  {id:2, text: 'Email'},
                  {id:3, text: 'Phone'},
                  {id:4, text: 'Applied On'}
              ],
              content:[],
              searchedContent:[],
              search:'',
              dialog: false,
              deleteId: 0,
              deleteAlert: true,
              page:1,
              pageCount:0,
              pagination: {
                ascending: true,
                sortBy:"name",
                rowsPerPage: 5,
                page: 1
            }
          }
      },
      methods:{
          capitalizeName(name){
            let capitalized = ''
            name.split(' ').forEach((i) => {
                capitalized += i[0].toUpperCase() + i.slice(1).toLowerCase() + ' '
            })
            return capitalized

              },
  
          formatPhoneNumber(num){
             let pattern = /^(1|91)?(\d{3})(\d{3})(\d{4})$/
             let match = num.match(pattern)
              if (match){
                 let intCode = (match[1] ? '+1' :'')
                 return [intCode, '(', match[2], ') ', match[3], '-', match[4]].join('')
              }
              return num
          },
  
         async getContent(){
             await axios.get(`http://127.0.0.1:8000/get_basic/`, {
              headers:{
                      'content-type':'application/json',
                      'Accept':'application/json'
                  }
              }).then((response) =>{
                  this.content = response.data
                  console.log(response.data)

              }).catch((error) => {
                  console.log(error)
              })
      },
      async getSearchContent(){
          await axios.get(`http://127.0.0.1:8000/api/search/${this.search}`,{
              headers:{
                  'Content-type':'application/json'
              }
          }).then((response) =>{
              this.searchedContent = response.data
              console.log(response.data)
          }).catch((error) => {
              console.log(error)
          })
      },
      async deleteBasic(id, search=false){
          await axios.delete(`http://127.0.0.1:8000/delete/${id}`)
            this.dialog = false
            this.getContent()
            window.scrollTo(0, 0)
        
      },
      triggerDelete(id){
          this.dialog = true
          this.deleteId = id
      }
  
      },
      created(){
          this.getContent()
      },
      
      // mounted(){
      //   this.getContent()
      // },
  
      computed:{
          searchContent(){
              return (this.searchedContent.length == 0 || this.search === '')
          },
          visiblePages(){
            return this.content.slice((this.page - 1) * 6, this.page * 6)
          }
  
      },
  }
  </script>
  
  <style scoped>
  .content-table {
    box-shadow: 2px 2px 4px 0 rgba(0,0,0,.1);
  }

  .items {
    font-size: 0.9rem;
  }

 tbody tr{
    cursor: pointer;
  }
 tbody tr:hover{
    background-color:rgba(6, 78, 78, 0.1);
    transition: 0.3s;
  }

  .content-table th {
    background-color: rgba(13, 164, 164, 0.2);
  }
  
  .edit-link {
    text-decoration: none;
    color: black;
  }
  
  .input-container {
    margin-top: -1.5em;
    width: 33%;
    font-size: 1em;
  }
  .content-table {
    width: 100%;
  }

  .list-items{
    width: 100%;
  }

  .edit-dlt{
    color: black;
    width: 100%;
    margin: 0;
    opacity: 1;
  }
  .edit-dlt:hover{
    color: teal;
    background-color: #fff;
  }

  @media (max-width:630px){
    .content-table{
      max-width: 100%;
    }

    .content-table td{
      font-size:8px !important;
      padding-right: 0 !important;
      padding-left: 2px !important;
    }
    .content-table td:first-child{
      padding-left: 0.5em !important;
    }
    .items{
      font-size:9px ;
      padding-right: 0 !important;
      padding-left: 0 !important;
    }
    .input-container{
      font-size: 8px !important;
      width: 50%;
    }
    
    
  }
  </style>
  