import { createRouter, createWebHistory } from 'vue-router'
import Cadastro from '../views/Cadastro.vue'
import TabelaDeUsuarios from '../views/TabelaDeUsuarios.vue'

const routes = [
  {
    path: '/',
    name: 'cadastro',
    component: Cadastro
  },
  {
    path: '/tabela',
    name: 'tabeladeusuarios',
    component: TabelaDeUsuarios
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
