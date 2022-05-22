import React, { Suspense } from 'react'
// 选择hashRouter 还是 BrowsersRouter 
// 参考：https://www.ruanyifeng.com/blog/2016/05/react_router.html
import { HashRouter as Router, Switch, Route } from 'react-router-dom'

// import store from '../store'

// 首页
const Home = React.lazy(() => import('../pages/Home'))

// MERP版（商贸版）
const Merp = React.lazy(() => import('../pages/Merp/routes'))

const routes = () => (
  <Router basename={window.__POWERED_BY_QIANKUN__ ? '/app-react' : '/'}>
    <Suspense fallback={null}>  
      <Switch>
        <Route exact path="/"  component={Home}/>
        <Route exact path="/home"  component={Home}/>

        <Route path="merp" component={Merp} />
      </Switch>
    </Suspense>
  </Router>
)

export default routes