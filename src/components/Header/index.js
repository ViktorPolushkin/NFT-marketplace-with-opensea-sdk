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

import LOGO from 'resources/logo_single.svg'

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
      <Button icon={<LogoutOutlined />} onClick={() => logoutHandler()}>
        Logout
      </Button>
    </div>
  )

  return (
    <header className='header'>
      <Link to={PATHS.DASHBOARD}>
        <img src={LOGO} alt={'app logo'} height={48} />
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
            <Link to={PATHS.COLLECTIONS}>Create</Link>
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
              <a href={'/'} onClick={e => ignoreHref(e)}>
                Account
              </a>
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
            <a
              href={'/'}
              className='connect-wallet'
              onClick={e => ignoreHref(e)}
            >
              Connect Wallet
            </a>
          </Menu.Item>
        )}
      </Menu>
    </header>
  )
}

export default Header
