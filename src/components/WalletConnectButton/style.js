import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  walletButton: {
    width: '100%',
    fontFamily: 'Be Vietnam, sans-serif',
    fontSize: '14px',
    color: 'white',
    fontWeight: 600,
    margin: '32px 0',
    lineHeight: 3,
    backgroundImage: `linear-gradient( 267.54deg, rgb(255, 220, 36) 1.63%, rgb(255, 92, 0) 98.05%)`,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    textTransform: 'none',
  },
  walletProgress: {
    height: '24px !important',
    width: '24px !important',
    color: 'white',
  },
}))

export default useStyles
