import React, { useState, useEffect } from 'react'
import { Menu, Layout, Button, Space } from 'antd'
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from '@ant-design/icons'
import './index.css'

const { Header, Sider, Content } = Layout

const Home = ({
  history
}) => {
  const [collapsed, setCollapsed] = useState(false)

  useEffect(() => {
    fetch('/api/users')
      .then(response => response.json())
      .then(data => console.log('react-app请求', data));
  }, [])

  const handleMenuItemClick = ({ item, key, keyPath, domEvent }) => {
    console.log(item, key, keyPath)
  }

  const handleGoto = () => {
    window.history.pushState(null, 'app-vue', '/app-vue/#/about')
  }

  const handleGotoThisApp = () => {

  }
  return (
    <Layout>
      {/* <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        style={{
          overflow: 'auto',
          height: '100vh',
          position: 'fixed',
          left: 0,
          top: 0,
          bottom: 0,
        }}
      >
        <div className='logo' />
        <Menu
          theme='dark'
          mode='inline'
          defaultSelectedKeys={['1']}
          items={[
            {
              key: '1',
              icon: <UserOutlined />,
              label: 'nav 1',
            },
            {
              key: '2',
              icon: <VideoCameraOutlined />,
              label: 'nav 2',
            },
            {
              key: '3',
              icon: <UploadOutlined />,
              label: 'nav 3',
            },
          ]}
        />
      </Sider> */}
      <Layout className='site-layout'>
        <Header className='site-layout-background' style={{ padding: 0 }}>
          {React.createElement(
            collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
            {
              className: 'trigger',
              onClick: () => setCollapsed(!collapsed),
            }
          )}
        </Header>
        <Content
          className='site-layout-background'
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
          }}
        >
          <Space>
            <Button onClick={handleGoto}>跳转到其他子应用</Button>
            <Button onClick={handleGotoThisApp}>跳转到该子应用下的其他路由</Button>
          </Space>
        </Content>
      </Layout>
    </Layout>
  )
}

export default Home
