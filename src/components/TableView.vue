<template lang="">
    <Table :userList = this.cadastros> </Table>
    <div>
    <button class="buttonTable" @click="changePage(-1)" :disabled="currentPage<2">Back</button>
    <label class=number>{{this.currentPage}}</label>
    <button class="buttonTable" @click="changePage(1)">Next</button>
    </div>
</template>

<script>

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

        this.cadastros = tableService.getUsers(this.currentPage);
    },

    methods: {
        changePage(nextPage) {
            //nextPage is 1 or -1
            //change current table page
            this.currentPage = this.currentPage + nextPage

            this.cadastros = tableService.getUsers(this.currentPage)
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
