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
    container: '#root',
    activeRule: '/app-react',
    loader: (loading) => {
      console.log('react-micro-app is loading:', loading)
    },
    props: {

    }
  },
  {
    name: 'vue-micro-app',
    entry: '//localhost:8082',
    container: '#root',
    activeRule: '/app-vue',
    // activeRule: location => location.pathname.startsWith('wework')
    loader: (loading) => {
      console.log('vue-micro-app is loading:', loading)
    },
    props: {

    }
  },
],
{
  beforeLoad: [
    app => {
      console.log('[LifeCycle] before load %c%s', 'color: green;', app.name);
    },
  ],
  beforeMount: [
    app => {
      console.log('[LifeCycle] before mount %c%s', 'color: green;', app.name);
    },
  ],
  afterUnmount: [
    app => {
      console.log('[LifeCycle] after unmount %c%s', 'color: green;', app.name);
    },
  ],
})

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

// 第一个微应用 mount 后需要调用的方法，比如开启一些监控或者埋点脚本。
runAfterFirstMounted(() => {
  console.log('[MainApp] first app mounted');
});