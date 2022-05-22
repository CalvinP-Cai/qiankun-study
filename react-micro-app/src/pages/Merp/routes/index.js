import * as React from 'react'
import { Switch, Route } from 'react-router-dom'


// 销售管理（二级菜单）
import SalesManage from './SalesManage'

const routes = [
  ...SalesManage
]

export function _expandRoutes (routes = [], { url }) {
  return routes.map(({ exact = true, ...route }) => {
    return (
      <Route
        key={route.path}
        exact={exact}
        path={`${url}${route.path}`}
        component={React.lazy(() => route.component)}
      />
    )
  })
}

const MerpRoutes = ({ match }) => {
  return (
    <Switch>
      {_expandRoutes(routes, match)}
    </Switch>
  )
}

export default MerpRoutes