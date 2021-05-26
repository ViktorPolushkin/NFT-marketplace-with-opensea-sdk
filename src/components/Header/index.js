import React from 'react'
import { Link } from 'react-router-dom'
import { Menu, Popover, Avatar, Button } from 'antd'
import {
  ProfileFilled,
  LoadingOutlined,
  LogoutOutlined,
  MenuOutlined,
  UserOutlined,
} from '@ant-design/icons'

import PATHS from 'constants/Path'

// import LOGO from 'constants/Logo'
import LOGO from 'resources/Logo/Logo.png'

import './style.less'

const PopoverHeader = ({ avatar, nickname, walletId }) => (
  <div className='pop-over'>
    <div className='pop-over-info'>
      <div className='pop-over-info-name'>{nickname}</div>
      <div className='pop-over-info-walletId'>{walletId}</div>
    </div>
    <Avatar
      size={'large'}
      src={avatar}
      icon={!avatar && <UserOutlined />}
    ></Avatar>
  </div>
)

const ignoreHref = e => {
  e.preventDefault()
}

const Header = ({
  avatar,
  nickname,
  walletId,
  isPending,
  isAuthenticated,
  isError,
  loginHandler,
  logoutHandler,
  ...otherProps
}) => {
  const PopoverMenu = () => (
    <div className='pop-over-body-wrap'>
      <Link to={PATHS.PROFILE}>
        <ProfileFilled />
        <span>Profile</span>
      </Link>
      <Button
        size={'large'}
        icon={<LogoutOutlined />}
        onClick={() => logoutHandler()}
        shape={'round'}
      >
        Logout
      </Button>
    </div>
  )

  return (
    <header className='header'>
      <Link to={PATHS.DASHBOARD}>
        <img src={LOGO} alt={'app logo'} width={170} height={32} />
      </Link>
      <Menu
        style={{
          flexGrow: 1,
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-end',
          backgroundColor: 'transparent',
          borderBottom: 0,
        }}
        mode='horizontal'
        expandIcon={<MenuOutlined />}
      >
        <Menu.Item className='menu-item' key={'assets'}>
          <Link to={PATHS.BROWSE_ASSETS}>Browse</Link>
        </Menu.Item>
        <Menu.Item className='menu-item' key={'creators'}>
          <Link to={PATHS.CREATORS}>Creators</Link>
        </Menu.Item>
        {isAuthenticated && (
          <Menu.Item className='menu-item' key={'collections'}>
            <Link to={PATHS.COLLECTION}>Create</Link>
          </Menu.Item>
        )}
        {isAuthenticated ? (
          <Menu.Item className='menu-item' key={'account'}>
            <Popover
              placement={'bottomLeft'}
              title={
                <PopoverHeader
                  avatar={avatar}
                  nickname={nickname}
                  walletId={`${walletId.slice(0, 4)} ... ${walletId.slice(
                    walletId.length - 3
                  )}`}
                />
              }
              content={<PopoverMenu />}
              trigger='click'
            >
              <Link to={'/'} onClick={e => ignoreHref(e)}>
                Account
              </Link>
            </Popover>
          </Menu.Item>
        ) : isPending ? (
          <Menu.Item className='menu-item' key={'account'}>
            <LoadingOutlined />
          </Menu.Item>
        ) : (
          <Menu.Item
            className='menu-item'
            key={'account'}
            onClick={() => loginHandler()}
          >
            <Link
              to={'/'}
              className='connect-wallet'
              onClick={e => ignoreHref(e)}
            >
              Connect Wallet
            </Link>
          </Menu.Item>
        )}
      </Menu>
    </header>
  )
}

export default Header
