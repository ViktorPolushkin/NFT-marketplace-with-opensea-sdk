import React from 'react'
import { PageHeader, Select, Empty, Button } from 'antd'
import { generateTokenCards } from 'helpers'
import SmartWrap from 'components/SmartWrap'

import './style.less'

const { Option } = Select

const Browse = ({
  tokens,
  rate,
  onViewItem,
  onClickLike,
  onClickCard,
  onEmptyCreate,
  onClickEdit,
}) => {
  return (
    <div className='browse'>
      <div className='browse-page-header'>
        <PageHeader
          className='browse-page-header-title'
          title={ 'Browses' }
          extra={ [
            <Select
              key={ 'browse-search' }
              showSearch
              style={ { width: 200 } }
              placeholder='Search to Select'
              optionFilterProp='children'
              defaultValue={ 'recentListed' }
              filterOption={ (input, option) =>
                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
              }
              filterSort={ (optionA, optionB) =>
                optionA.children
                  .toLowerCase()
                  .localeCompare(optionB.children.toLowerCase())
              }
            >
              <Option value='recentListed'>Recently Listed</Option>
              <Option value='recentCreated'>Recently created</Option>
              <Option value='highestPrice'>Highest Price</Option>
              <Option value='lowestPrice'>Lowest Price</Option>
              <Option value='highestLastSale'>Highest Last Sale</Option>
              <Option value='expiring'>Expiring Soon</Option>
              <Option value='oldest'>Oldest</Option>
              <Option value='mostViews'>Most Views</Option>
            </Select>,
          ] }
        />
      </div>
      <div className='browse-assets'>
        { tokens.length ? (
          <SmartWrap>
            {generateTokenCards(
              tokens,
              rate,
              onClickEdit,
              onClickCard,
              onViewItem,
              onClickLike,
            ) }
          </SmartWrap>
        ) : (
          <Empty
            className={ 'browse-empty' }
            image={ Empty.PRESENTED_IMAGE_SIMPLE }
            imageStyle={ {
              height: 144,
              width: 144,
            } }
            description={ <span>There are no items to show.</span> }
          >
            <Button type='primary' onClick={ onEmptyCreate }>
              Create Now
            </Button>
          </Empty>
        ) }
      </div>
    </div>
  )
}

export default Browse
