<template>
    <div>
        
    </div>
        <!-- <SearchBar  v-model="search" placeholder="search by name"/> -->
            <!-- <div class="input-container">
                
            <input type="text" v-model="search" placeholder="Search by name or email" @input="getSearchContent"/>
        </div>
        <div class="listing-heading">
            <ul class="heading-list">
                <li  v-for="item in heading" :key="item.id">{{ item.text }}</li>
            </ul>
        </div>
        <div class="listing-container" v-if="search==='' || searchedContent.length == 0 ">
        <span class="looper-span" v-for="item in content" :key="content.basic_details_id">
        <div class="listing-content" v-for="v in item" :key="v.basic_details_id">
 
            <template>
                <DeleteDialog :dialog="dialog" @delete-resume="deleteBasic(v.basic_details_id)" /> 
            </template>   
            <ul class="content-list">
                    <li class="list name-list">{{v.name}}</li>
                    <li class="list email-list">{{v.email_address}}</li>
                    <li class="list phone-list">{{v.phone_number}}</li>
                    <li class="list date-list">{{v.date_applied}}</li>

                    <span class="icon-span">            
                        <v-menu>
                                
                            <template v-slot:activator="{ props }">
                                <v-btn icon="mdi-dots-vertical" v-bind="props"></v-btn>
                            </template>
                            
                            <v-list>
                                <v-list-item class="list-items">                                    
                                    <v-list-item-title> <v-btn class="edit-dlt-btn">Edit</v-btn> </v-list-item-title>
                                </v-list-item>
                                <v-list-item class="list-items">                                
                                    <v-list-item-title><v-btn @click="dialog=true">Delete</v-btn> </v-list-item-title>
                                    
                                </v-list-item>
                            </v-list>                      
                        </v-menu>       
                    </span>                   
            </ul>  
        </div>
    </span>
    </div>

    <div class="listing-container" v-else>
        <span class="looper-span" v-for="item in searchedContent">
        <div class="listing-content" v-for="v in item" >
            
            <ul class="content-list">
                    <li class="list name-list">{{v.name}}</li>
                    <li class="list email-list">{{v.email_address}}</li>
                    <li class="list phone-list">{{v.phone_number}}</li>
                    <li class="list date-list">{{v.date_applied}}</li>
                    
                    <span class="icon-span">
                        <v-menu>
                            <template v-slot:activator="{ props }">
                                <v-btn icon="mdi-dots-vertical" v-bind="props"></v-btn>
                            </template>
                            <template>
                                    <DeleteDialog :dialog="dialog" @delete-resume="deleteBasic(v.basic_details_id)" /> 
                            </template>
                            <v-list>
                                <v-list-item class="list-items">                                    
                                    <v-list-item-title> <v-btn>Edit</v-btn> </v-list-item-title>
                                </v-list-item>
                                <v-list-item class="list-items">        
                                    <v-list-item-title><v-btn @click.stop="dialog = true">Delete</v-btn> </v-list-item-title>
                                </v-list-item>
                            </v-list>
                        </v-menu>
                    </span>                   
            </ul>
        </div>
    </span>
    </div> -->

<!-- <div class="input-container">
                
            <input type="text" v-model="search" placeholder="Search by name or email" @input="getSearchContent"/>
        </div> -->

  <div class="input-container">
    <v-text-field
        density="compact"
        variant="solo"
        placeholder="Search by name or email"
        append-inner-icon="mdi-magnify"
        v-model="search"
        @input="getSearchContent"
      ></v-text-field>
  </div>

    

  <v-table class="content-table" >
    <thead >
      <tr>
        <th class="text-left" v-for="item in heading" >
          {{item.text}}
        </th>
        <th></th>
      </tr>
    </thead >
    <tbody v-for="item in content" :key="item.basic_details_id" v-if="searchContent">
      <tr
        v-for="i in item"
        :key="i.basic_details_id"
      >
        <td>{{ i.name }}</td>
        <td>{{ i.email_address }}</td>
        <td>{{ i.phone_number }}</td>
        <td>{{ i.date_applied }}</td>
        <td>
            <v-menu>
                <template v-slot:activator="{ props }">
                    <v-btn icon="mdi-dots-vertical" v-bind="props"></v-btn>
                </template>
                <v-list>
                    <v-list-item class="list-items">                                    
                        <v-list-item-title> <v-btn>Edit</v-btn> </v-list-item-title>
                    </v-list-item>
                        <v-list-item class="list-items">        
                            <v-list-item-title><v-btn @click.stop="dialog = true">Delete</v-btn> </v-list-item-title>
                                </v-list-item>
                        </v-list>
                    </v-menu>
        </td>
        <template>
                                    <DeleteDialog :dialog="dialog" @delete-resume="deleteBasic(i.basic_details_id)" /> 
                            </template>
      </tr>
      
    </tbody>

    <tbody v-for="item in searchedContent"  v-else>
      <tr
        v-for="i in item"
        :key="i.basic_details_id"
      >
        <td>{{ i.name }}</td>
        <td>{{ i.email_address }}</td>
        <td>{{ i.phone_number }}</td>
        <td>{{ i.date_applied }}</td>
        <td>
            <v-menu>
                <template v-slot:activator="{ props }">
                    <v-btn icon="mdi-dots-vertical" v-bind="props"></v-btn>
                </template>
                            
                <v-list>
                    <v-list-item class="list-items">                                    
                        <v-list-item-title> <v-btn>Edit</v-btn> </v-list-item-title>
                    </v-list-item>
                        <v-list-item class="list-items">        
                            <v-list-item-title><v-btn @click.stop="dialog = true">Delete</v-btn> </v-list-item-title>
                                </v-list-item>
                        </v-list>
                    </v-menu>
        </td>
        <template>
                                    <DeleteDialog :dialog="dialog" @delete-resume="deleteBasic(v.basic_details_id)" /> 
                            </template>
      </tr>
    </tbody>
  </v-table>

       <router-view />
</template>

<script>
import axios from 'axios'
import DeleteDialog from '@/components/DeleteDialog.vue'

export default{

    name: "Listing",
    components:{
        DeleteDialog,
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
            dialog: false
        }
    },
    methods:{
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
    async deleteBasic(id){
        await axios.delete(`http://127.0.0.1:8000/delete/${id}`)
        window.location.reload()
    },
    
    },
    created(){
        this.getContent()
    },

    
    computed:{
        searchContent(){
            return (this.searchedContent.length == 0 || this.search === '')

        }

    },
}
</script>

<style scoped>

    th{
        background-color: rgba(0, 128, 128, 0.4);
    }


    .main-container-listing-comp{
        width: 100%;
    }

    .edit-dlt-btn{
        border: none;
    }

    .listing-container{
        width: 100%;
    }

    .input-container{
        margin-top: -1.5em;
        width: 300px;
    }

    .input-container > input{
        width: 350px;
        border: 1px solid #333;
        padding: 1em;
        height: 30px;
        margin-bottom: 1em;
    }

   ul{
        display: flex;
        list-style: none;
        justify-content:space-between;
        align-items: center;
        text-align: left;
        position: relative;
        padding: 1em;
        /* padding-right: 1em; */
        flex-basis: 10%;
    }

    li{
        font-size: 0.9rem;
        line-height: 30px;
        padding: 0 0.9em;
        width: 24%;
    }

    ul i{
        cursor: pointer;
        position: absolute;
        top: 0;
        left: 0;

    }

    .name-list{
        margin-left: 10px;
    }

    .icon-span{
        position: absolute;
        left: 95%;
    }

    
    .listing-heading{
        margin-top: 20px;
        text-align: center;
        width: 100%;
        padding-top: 0.2em;
        background-color: rgba(0, 128, 128, 0.2);
        box-shadow: 2px 2px 5px rgba(154, 150, 150, 0.2);
    }

    .listing-heading > ul:first-child{
        margin-left: 5px;
    }

    .listing-content{
        width: 100%;
        margin-top: 0;
        box-shadow: 2px 2px 5px rgba(154, 150, 150, 0.2);
        border-bottom: 1px solid rgb(114, 110, 110, 0.1);
    }

    .listing-content ul{
        padding-top: 1em;
    }

    .looper-span{
        width: 100%;
        margin: 0;
    }

    .link-edit-dlt{
        text-decoration: none;
        color: #333;
    }

    .content-table{
        width: 100%;
    }

</style>