<template lang="">
    <Table :userList = this.cadastros> </Table>
    <div>
    <button class="buttonTable" @click="changePage(-1)" :disabled="currentPage<2">Back</button>
    <label class=number>{{this.currentPage}}</label>
    <button class="buttonTable" @click="changePage(1)">Next</button>
    </div>
</template>

<script>

//const {tableModel} = require("./tableModel")
const {tableService} = require("../services/table.service")

import Table from "./Table.vue"

export default {
    components:{
        Table
    },
    data() {
        return {
            cadastros: null,
            currentPage: 1
        }
    },

    created() {
        //request first page of table on app creation (uncomment after backend integration)

        //this.cadastros = tableService.getUsers(this.currentPage);

        //temp data
        this.cadastros = 
            [
                { id: 1, nome: 'Arthur', email: 'art@email.com', password: 'art123', telefone: '11111-1111'},
                { id: 2, nome: 'Rodrigo', email: 'rod@email.com', password: 'rod123', telefone: '22222-2222'},
                { id: 3, nome: 'Pedro', email: 'ped@email.com', password: 'ped123', telefone: '33333-3333'},
                { id: 4, nome: 'Thiago', email: 'thi@email.com', password: 'thi123', telefone: '44444-4444'}
            ]
        
    },

    methods: {
        changePage(nextPage) {
            //nextPage is 1 or -1
            //change current table page
            this.currentPage = this.currentPage + nextPage
            
            //request current table page(uncomment when backend integration is added)
            //this.cadastros = tableService.getUsers(this.currentPage)

            //temp data
            this.cadastros =   

            [
                { id: 5, nome: 'Rodrigo', email: 'rod@email.com', password: 'rod123', telefone: '55555-5555'},
                { id: 6, nome: 'Henrique', email: 'hen@email.com', password: 'hen123', telefone: '66666-6666'},
                { id: 7, nome: 'Sandro', email: 'san@email.com', password: 'san123', telefone: '77777-7777'},
                { id: 8, nome: 'João', email: 'jo@email.com', password: 'jo123', telefone: '88888-8888'}
            ]
            
        }
        
    },
}
</script>

<style>
.buttonTable{
     background: #534292;
 
  width: 210px;
  padding: 10px 20px;
  margin-top: 20px;
  color: white;
  border-radius: 20px;
  box-shadow: 3px 3px 4px 3px rgba(0, 0, 0, 0.2)
}
</style>