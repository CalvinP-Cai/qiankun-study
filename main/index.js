import { 
  loadMicroApp,
  registerMicroApps,
  initGlobalState,
  setDefaultMountApp,
  runAfterFirstMounted,
  start
} from 'qiankun'

// loadMicroApp({
//   name: '',
//   entry: '',
//   container: '',
//   props: {
//     message: 'Hello qiankun',
//   }
// })
/**
 * Step1 企业微信鉴权，查询菜单
 */


/**
 * Step2 注册子应用
 */

registerMicroApps([
  {
    name: 'react-micro-app',
    entry: '//localhost:3000',
    container: '#container',
    activeRule: '/app-react'
  },
  {
    name: 'vue-micro-app',
    entry: '//localhost:8082',
    container: '#container',
    activeRule: '/app-vue'
  },
])

const { onGlobalStateChange, setGlobalState } = initGlobalState({
  user: 'qiankun',
});


onGlobalStateChange((value, prev) => console.log('[onGlobalStateChange - master]:', value, prev));

setGlobalState({
  ignore: 'master',
  user: {
    name: 'master',
  },
});

/**
 * Step3 设置默认进入的子应用
 */
setDefaultMountApp('/app-react');


/**
 * Step4 启动应用
 */
start()


runAfterFirstMounted(() => {
  console.log('[MainApp] first app mounted');
});