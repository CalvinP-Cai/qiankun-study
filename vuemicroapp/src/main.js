import './public-path'
import Vue from "vue";
import App from "./App.vue";
import routes from "./router";
import VueRouter from "vue-router";

Vue.config.productionTip = false;

Vue.use(VueRouter)

let router = null
let instance = null

function render (props = {}) {
  let {container} = props
  router = new VueRouter({
    base: window.__POWERED_BY_QIANKUN__ ? '/app-vue' : '/',
    // "hash" | "history" | "abstract"
    mode: 'hash',
    routes
  })

  instance = new Vue({
    router: router,
    render: (h) => h(App),
  }).$mount(container ? container.querySelector('#root') : "#root");
}

// 独立运行时
if (!window.__POWERED_BY_QIANKUN__) {
  render();
}

function storeTest(props) {
  console.log('storeTest props:', props);
  props.onGlobalStateChange &&
    props.onGlobalStateChange(
      (value, prev) => console.log(`[onGlobalStateChange - ${props.name}]:`, value, prev),
      true,
    );
  props.setGlobalState &&
    props.setGlobalState({
      ignore: props.name,
      user: {
        name: props.name,
      },
    });
}

export async function bootstrap() {
  console.log('[vue] vue app bootstraped');
}
export async function mount(props) {
  console.log('[vue] props from main framework', props);
  storeTest(props)
  render(props);
}
export async function unmount() {
  instance.$destroy();
  instance.$el.innerHTML = '';
  instance = null;
  router = null;
}
