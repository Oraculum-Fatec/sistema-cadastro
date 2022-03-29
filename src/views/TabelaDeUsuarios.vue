<template>
  <div class="tabela">
    <TableView></TableView>
  </div>
  
</template>

<script>
import TableView from '@/components/TableView.vue'

export default {
  name: 'TabelaDeUsuarios',
  components: {
    TableView
  }
}
</script>

<style>
.number {
  color: #aaa;
  display: inline-block;
  margin: 25px 0 15px;
  font-size: 1.2em;
  letter-spacing: uppercase;
  letter-spacing: 1px;
  font-weight: bold;
}
</style>