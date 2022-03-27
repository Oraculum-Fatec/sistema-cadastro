<template>
  <form>
    <h1 class="title">Lista de Usuários</h1>

    <table class="table-hover" id="usuarios">
      <thead>
        <tr>
          <th>ID</th>
          <th>Nome</th>
          <th>E-Mail</th>
          <th>Senha</th>
          <th>Telefone</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in items" :key="item.id">
          <td>{{ item.id}}</td>
          <td>{{ item.nome}}</td>
          <td>{{ item.email }}</td>
          <td>{{ item.password}}</td>
          <td>{{ item.telefone}}</td>
        </tr>
      </tbody>
    </table>
  </form>
</template>

<script>
import TableView from '@/components/TableView.vue'

export default {
  data() {
    return {
      items:
      [
        { id: 1, nome: 'Arthur', email: 'art@email.com', password: 'art123', telefone: '11111-1111'},
        { id: 2, nome: 'Rodrigo', email: 'rod@email.com', password: 'rod123', telefone: '22222-2222'},
        { id: 3, nome: 'Pedro', email: 'ped@email.com', password: 'ped123', telefone: '33333-3333'},
        { id: 4, nome: 'Thiago', email: 'thi@email.com', password: 'thi123', telefone: '44444-4444'}
      ]
    };
  }
};
</script>

<style>
form {
  max-width: 420px;
  margin: 30px auto;
  max-height: 483px;
  background: white;
  text-align: left;
  padding: 40px;
  border-radius: 10px;
}
table {
  color: #aaa;
  font-size: 0.8em;
  font-weight: bold;
}
#usuarios {
  border-collapse: collapse;
  width: 100%;
}

#usuarios td, #usuarios th {
  border: 1px solid #ddd;
  padding: 8px;
}

#usuarios tr:nth-child(even){background-color: #f2f2f2;}

#usuarios tr:hover {background-color: #ddd;}

#usuarios th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: #534292;
  color: white;
}
.title {
  display: flex;
  justify-content: center;
  margin: 4px;
  margin-top: -8px;
  color: #534292;
  font-style: italic;
  font-family: fangsong;
}
</style>