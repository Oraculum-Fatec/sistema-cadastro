<template>
  <nav>
    <router-link to="/">Cadastro</router-link> |
    <router-link to="/tabela">Tabela de Usuarios</router-link>
  </nav>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #f8f8f8;
}

body{
  background: #534292;
  overflow: hidden;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #f8f8f8;
  letter-spacing: 0.8px;
  text-decoration: none;
}

nav a.router-link-exact-active {
  top: 2px;
  position: relative;
  top: 3px;
  text-decoration: overline;
}
</style>
