import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup'
import ToggleButton from '@material-ui/lab/ToggleButton'

import useStyles from './style'

import PATHS from 'constants/Path'

const CustomButtonGroup = ({ items = [], location, ...otherProps }) => {
  const [selectedValue, setSelectedValue] = useState('Dashboard')
  const classes = useStyles()

  useEffect(location => {
    setSelectedValue(location)
  }, [])

  const generateButtonGroup = items =>
    items.map((item, index) => {
      return (
        <ToggleButton
          key={index}
          className={classes.button}
          value={item}
          area-label={item}
        >
          <Link className={classes.link} to={PATHS[item.toUpperCase()]}>
            {item}
          </Link>
        </ToggleButton>
      )
    })

  const toggleChangeHandler = (value, nextValue) => {
    if (nextValue !== null) {
      setSelectedValue(nextValue)
    }
  }

  return (
    <ToggleButtonGroup
      className={classes.buttonGroup}
      value={selectedValue}
      onChange={toggleChangeHandler}
      exclusive
    >
      {generateButtonGroup(items)}
    </ToggleButtonGroup>
  )
}

export default CustomButtonGroup
