import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/Main.vue'
import CategoryEdit from '../views/CategoryEdit.vue'
import CategoryList from '../views/CategoryList.vue'
import ItemEdit from '../views/ItemEdit.vue'
import ItemList from '../views/ItemList.vue'

Vue.use(VueRouter)

const routes = [{
  path: '/',
  name: 'main',
  component: Main,
  children: [{
    path: '/categories/create',
    name: 'category_edit',
    component: CategoryEdit
  }, {
    path: '/categories/edit/:id',
    name: 'category_edit',
    component: CategoryEdit,
    props: true
  }, {
    path: '/categories/list',
    name: 'category_list',
    component: CategoryList
  }, {
    path: '/items/create',
    name: 'item_edit',
    component: ItemEdit
  }, {
    path: '/items/edit/:id',
    name: 'item_edit',
    component: ItemEdit,
    props: true
  }, {
    path: '/items/list',
    name: 'item_list',
    component: ItemList
  }]
}]

const router = new VueRouter({
  routes
})

export default router
