import React, { Suspense } from 'react'
// 选择hashRouter 还是 BrowsersRouter 
// 参考：https://www.ruanyifeng.com/blog/2016/05/react_router.html
import { HashRouter as Router, Switch, Route } from 'react-router-dom'

// import store from '../store'

// 首页
import Home from '../pages/Home'

const routes = () => (
  <Router basename={window.__POWERED_BY_QIANKUN__ ? '/app-react' : '/'}>
    <Suspense fallback={null}>  
      <Switch>
        <Route exact path="/"  component={<Home />}/>
        <Route exact path="/home"  component={Home}/>
      </Switch>
    </Suspense>
  </Router>
)

export default routes