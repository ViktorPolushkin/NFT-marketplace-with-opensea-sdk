import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  footerWrapper: {
    width: '100%',
    padding: '12px 48px 24px',
    fontFamily: 'Be Vietnam, sans-serif',
    fontSize: '12px',
    color: 'grey',
    fontWeight: 600,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  footerLink: {
    color: 'black',
    fontWeight: 500,
    padding: '0 5px',

    '&:hover': {
      fontWeight: 700,
      textDecoration: 'none',
    },
  },
  footerTitle: {
    fontFamily: 'Be Vietnam, sans-serif',
    fontSize: '16px',
    color: 'grey',
    fontWeight: 600,
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
    margin: 'auto',
  },
}))

export default useStyles
