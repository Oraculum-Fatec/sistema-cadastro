<template>
  <form class="formTable">
    <h1 class="title">Lista de Usuários</h1>

    <table class="table-hover" id="usuarios">
      <thead>
        <tr>
          <th>ID</th>
          <th>Nome</th>
          <th>E-Mail</th>
          <th>Telefone</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in userList" :key="user.id">
          <td>{{ user.id }}</td>
          <td>{{ user.name }}</td>
          <td>{{ user.email }}</td>
          <td>{{ user.phone }}</td>
        </tr>
      </tbody>
    </table>
  </form>
</template>

<script>


export default {
  name: "Table",
  props:[
    "userList"
  ],
  beforeMount() {
  },
};
</script>

<style>
.formTable {
  max-width: 721px;
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

#usuarios td,
#usuarios th {
  border: 1px solid #ddd;
  padding: 8px;
}

#usuarios tr:nth-child(even) {
  background-color: #f2f2f2;
}

#usuarios tr:hover {
  background-color: #ddd;
}

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
