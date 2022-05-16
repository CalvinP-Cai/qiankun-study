import React from 'react'
import { inject, observer } from 'mobx-react-lite'

const Login = () => {
  return (
    <div>
      登录
    </div>
  )
}

export default inject('store')(observer(Login))