import Animate from './components/Animate.vue';
import Text from './components/Text.vue';
import Index from './components/Index.vue';
import App from './App.vue';

export default [
  {path: '/', component: App, name: 'main', children: [
    {path: 'animate',component: Animate, name: 'animate'},
    {path: 'text', component: Text, name: 'text'}
  ]},
  {path: '/index', component: Index, name: 'index'}
]