<template>
  <div class="tabela">
    <Table></Table>
  </div>
  <div>
    <button>Right</button>
    <label class=number>1</label>
    <button>Left</button>
  </div>
</template>

<script>
import Table from '@/components/Table.vue'

export default {
  name: 'TabelaDeUsuarios',
  components: {
    Table
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