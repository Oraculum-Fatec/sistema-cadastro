
<template lang="">
    <tableModel userList = this.cadastros></tableModel>
</template>

<script>
//const {tableModel} = require("./tableModel")
const {tableService} = require("../services/table.service")


export default {
    data() {
        return {
            cadastros: null,
            currentPage: 1
        }
    },
    created() {
        //request first page of table on app creation
        this.cadastros = tableService.getUsers(this.currentPage);
        
    },

    beforeMount() {
        
    },
    methods: {
        changePage(nextPage) {
            //nextPage is 1 or -1
            //change current table page
            this.currentPage = this.currentPage + nextPage
            //request current table page
            this.cadastros = tableService.getUsers(this.currentPage)
        }
    },
}
</script>

<style lang="">
    
</style>