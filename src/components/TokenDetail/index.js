import React from 'react'
import { Link } from 'react-router-dom'
import { PageHeader, Button, Collapse, Table, Image, Empty } from 'antd'
import {
  CaretRightOutlined,
  CopyrightOutlined,
  FileTextOutlined,
  NodeIndexOutlined,
  SwapOutlined,
  LikeOutlined,
  EyeOutlined,
  LineChartOutlined,
} from '@ant-design/icons'
import Chart from 'components/Chart'

import './style.less'

const { Panel } = Collapse

const offerColumns = [
  {
    title: 'From',
    dataIndex: 'from',
    key: 'from',
  },
  {
    title: 'Prise',
    dataIndex: 'prise',
    key: 'prise',
    sorter: (priseA, priseB) => priseA.value - priseB.value,
  },
  {
    title: 'Action',
    key: 'action',
    render: () => (
      <Button size={'large'} type='primary' shape={'round'}>
        Accept
      </Button>
    ),
  },
]

const transactionColumns = [
  {
    title: 'Event',
    dataIndex: 'event',
    key: 'event',
  },
  {
    title: 'Prise',
    dataIndex: 'prise',
    key: 'prise',
    sorter: (priseA, priseB) => priseA.value - priseB.value,
  },
  {
    title: 'From',
    dataIndex: 'from',
    key: 'prise',
    render: text => <Link to={''}>{text}</Link>,
  },
  {
    title: 'To',
    dataIndex: 'to',
    key: 'to',
    render: text => <Link to={''}>{text}</Link>,
  },
  {
    title: 'Date',
    dataIndex: 'date',
    key: 'date',
  },
]

const TokenDetail = ({ token, onSellToken }) => {
  const {
    collectionId,
    id,
    address,
    type,
    detail: { url, name, description, creator, owner, listed },
    offer,
    meta: { views, likes },
  } = token

  console.log('listed:', listed)

  const chartConfigs = {
    type: 'line',
    width: '100%',
    height: 240,
    dataFormat: 'json',
    dataSource: {
      /* see data tab */
      value: 1000,
    },
  }

  return (
    <div className='token-detail'>
      <PageHeader
        className='token-detail-header-title'
        title={'Token information'}
        extra={[
          !listed && (
            <Button
              size={'large'}
              key='primary'
              type={'primary'}
              shape={'round'}
              onClick={() => onSellToken(collectionId, id)}
            >
              Sell Item
            </Button>
          ),
        ]}
      />
      <div className='token-detail-wrapper'>
        <div className='token-detail-wrap'>
          <div className='token-detail-summary'>
            <div className='token-detail-summary-media'>
              <div className='token-detail-summary-image'>
                <div className='token-detail-summary-image-wrap'>
                  {url ? (
                    <Image src={url} alt='token_image' preview={{ url }} />
                  ) : (
                    <span style={{ color: '#fff8' }}>No Image</span>
                  )}
                </div>
              </div>
              <div className='token-detail-summary-bar'>
                <div>
                  <EyeOutlined />
                  {parseInt(views)}
                </div>
                <div>
                  <LikeOutlined />
                  {parseInt(likes)}
                </div>
              </div>
            </div>
            <div className='token-detail-summary-properties'>
              <Collapse
                defaultActiveKey={['creator']}
                expandIconPosition={'right'}
                expandIcon={({ isActive }) => (
                  <CaretRightOutlined rotate={isActive ? 90 : 0} />
                )}
                className='token-detail-summary-properties-collapse'
              >
                <Panel
                  className='token-detail-summary-properties-panel'
                  header={
                    <div className='token-detail-summary-properties-panel-header'>
                      <CopyrightOutlined />
                      <div>Creator</div>
                    </div>
                  }
                  key='creator'
                >
                  <div>
                    <span>Created by </span>
                    <Link to={''}>{`${creator.slice(0, 4)}...${creator.slice(
                      creator.length - 3
                    )}`}</Link>
                  </div>
                </Panel>
                <Panel
                  className='token-detail-summary-properties-panel'
                  header={
                    <div className='token-detail-summary-properties-panel-header'>
                      <FileTextOutlined />
                      <div>Description</div>
                    </div>
                  }
                  key='description'
                >
                  <div>{description}</div>
                </Panel>
                <Panel
                  className='token-detail-summary-properties-panel'
                  header={
                    <div className='token-detail-summary-properties-panel-header'>
                      <NodeIndexOutlined />
                      <div>Chain information</div>
                    </div>
                  }
                  key='chainInfo'
                >
                  <div className='token-detail-summary-properties-content'>
                    <div className='token-detail-summary-properties-content-item'>
                      <div>Contract Address</div>
                      <a
                        href={`https://etherscan.io/address/${address}`}
                        target='_blank'
                        rel='noreferrer'
                      >
                        {`${address.slice(0, 4)} ... ${address.slice(
                          address.length - 3
                        )}`}
                      </a>
                    </div>
                    <div className='token-detail-summary-properties-content-item'>
                      <div>Token Id</div>
                      <div>{`${id.slice(0, 16)}...`}</div>
                    </div>
                    <div className='token-detail-summary-properties-content-item'>
                      <div>Chain info</div>
                      <div>{type}</div>
                    </div>
                  </div>
                </Panel>
              </Collapse>
            </div>
          </div>
          <div className='token-detail-main'>
            <div className='token-detail-main-wrap'>
              <Link
                to={`/collection/${collectionId}`}
                className='token-detail-main-collection'
              >
                {collectionId}
              </Link>
              <div className='token-detail-main-name'>{name}</div>
              <div className='token-detail-main-owner'>
                Owned by{' '}
                <Link to={''}>{`${owner.slice(0, 4)}...${owner.slice(
                  owner.length - 3
                )}`}</Link>
              </div>
              <div className='token-detail-main-offers'>
                <Collapse
                  defaultActiveKey={['priseHistory']}
                  expandIconPosition={'right'}
                  expandIcon={({ isActive }) => (
                    <CaretRightOutlined rotate={isActive ? 90 : 0} />
                  )}
                  className='token-detail-history-collapse'
                >
                  <Panel
                    className='token-detail-history-panel'
                    header={
                      <div className='token-detail-history-panel-header'>
                        <LineChartOutlined />
                        <div>Prise History</div>
                      </div>
                    }
                    key='priseHistory'
                  >
                    <div style={{ width: '100%', height: 240 }}>
                      <Chart chartConfigs={chartConfigs} />
                    </div>
                  </Panel>
                  <Panel
                    className='token-detail-history-panel'
                    header={
                      <div className='token-detail-history-panel-header'>
                        <SwapOutlined />
                        <div>Transaction History</div>
                      </div>
                    }
                    key='transactionHistory'
                  >
                    <Table columns={offerColumns} />
                  </Panel>
                </Collapse>
              </div>
            </div>
          </div>
        </div>
        <div className='token-detail-history'>
          <div className='token-detail-history-wrap'>
            <Collapse
              defaultActiveKey={['history']}
              expandIconPosition={'right'}
              expandIcon={({ isActive }) => (
                <CaretRightOutlined rotate={isActive ? 90 : 0} />
              )}
              className='token-detail-history-collapse'
            >
              <Panel
                className='token-detail-history-panel'
                header={
                  <div className='token-detail-history-panel-header'>
                    <SwapOutlined />
                    <div>Transaction History</div>
                  </div>
                }
                key='history'
              >
                <Table columns={transactionColumns} />
              </Panel>
            </Collapse>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TokenDetail
