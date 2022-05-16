import React, { Switch } from "react"
import { Route } from 'react-router-dom'

const Home = ({
  match
}) => {
  
  const routes = []

  return (
    <Switch>
      {routes.map(({ exact = true, ...route }) => {
        return (
          <Route
            key={route.path}
            exact={exact}
            path={`${match.url}${route.path}`}
            component={React.lazy(() => route.component)}
          />
        )
      })}
    </Switch>
  )
}

export default Home