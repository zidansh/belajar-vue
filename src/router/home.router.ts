import HomeViewVue from '@/views/home/HomeView.vue'
import HomesViewVue from '@/views/home/HomesView.vue'
import HomessViewVue from '@/views/home/HomessView.vue'

export default {
  path: '/home',
  name: 'home',
  component: HomeViewVue,
  children: [
    { path: 'homes', component: HomesViewVue },
    { path: 'homess', component: HomessViewVue }
  ]
}
