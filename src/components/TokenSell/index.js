import React, { useState } from 'react'
import { PageHeader, InputNumber, Upload, Button, Select, message } from 'antd'
import { SettingOutlined, SolutionOutlined } from '@ant-design/icons'

import TokenSellMethodCard from 'components/TokenSellMethodCard'

import './style.less'

import BNBSYMBOL from 'resources/CoinLogo/bnb-dark-256.svg'

const { Option } = Select

const CoinTypeSelect = () => (
  <Select className='input-round-left' defaultValue='BNB' size={'large'}>
    <Option value='BNB'>
      {`BNB  `}
      <img
        className='image-bottomed'
        src={BNBSYMBOL}
        alt='BNB'
        width={18}
        height={18}
      />
    </Option>
  </Select>
)

const TokenSell = ({ currentPrise, onPriceChange, onPostListing }) => {
  return (
    <div className='token-sell'>
      <PageHeader
        className='token-edit-header'
        title={'Set price to see your NFT'}
      />
      <div className='token-sell-wrap'>
        <div className='token-sell-setting'>
          <div className='token-sell-title'>
            <SettingOutlined />
            <span>Setting</span>
          </div>
          <div className='token-sell-setting-field'>
            <span>Select your sell method</span>
            <div className='token-sell-setting-field-method'>
              <TokenSellMethodCard
                title={'Set Price'}
                content={'Sell at a fixed price'}
                select={true}
                onSelect={() => {}}
              />
              <TokenSellMethodCard
                title={'Highest Bid'}
                content={'Auction to the highest bidder'}
                select={false}
                onSelect={() => {}}
                disabled
              />
            </div>
          </div>
          <div className='token-sell-setting-field'>
            <span className='token-sell-setting-field-prise-title'>Price:</span>
            <div className='spanner'></div>
            <div className='token-sell-setting-field-prise'>
              <CoinTypeSelect />
              <InputNumber
                style={{ width: 150, marginLeft: -2 }}
                className='input-round-right'
                defaultValue={currentPrise || 0}
                min='0'
                step='0.00000001'
                stringMode
                size={'large'}
                onChange={onPriceChange}
              />
            </div>
          </div>
        </div>
        <div className='token-sell-summary'>
          <div className='token-sell-title'>
            <SolutionOutlined />
            <span>Summary</span>
          </div>
          <div className='token-sell-summary-field'>
            <div className='token-sell-summary-field-title'>Listing</div>
            <Button
              size={'large'}
              type={'primary'}
              shape={'round'}
              onClick={onPostListing}
            >
              Post your listing
            </Button>
          </div>
          <div className='token-sell-summary-field'>
            <div className='token-sell-summary-field-title'>Fees</div>
            <span>
              Listing is free! At the time of the sale, the following fees will
              be deducted
            </span>
            <div className='token-sell-summary-field-fees'>
              <div className='token-sell-summary-field-fees-target'>
                To Focus Platform
              </div>
              <div className='spanner-dotted'></div>
              <div className='token-sell-summary-field-fees-amount'>2 %</div>
            </div>
            <div className='token-sell-summary-field-fees'>
              <div className='token-sell-summary-field-fees-target'>
                To Focus Community
              </div>
              <div className='spanner-dotted'></div>
              <div className='token-sell-summary-field-fees-amount'>2 %</div>
            </div>
            <div className='token-sell-summary-field-fees'>
              <div className='token-sell-summary-field-fees-target'>Total</div>
              <div className='spanner-dotted'></div>
              <div className='token-sell-summary-field-fees-amount'>4 %</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TokenSell
