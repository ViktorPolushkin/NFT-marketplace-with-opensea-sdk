import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  buttonGroup: {
    fontSize: 16,
    fontFamily: 'Be Vietnam, sans-serif',
    fontWeight: 600,
    borderRadius: 100,
    textTransform: 'none',
  },
  button: {
    fontSize: 14,
    padding: 0,
    fontFamily: 'Be Vietnam, sans-serif',
    fontWeight: 600,
    borderRadius: 100,
    textTransform: 'none',
    backgroundColor: '#e0e0e0',
    overflow: 'hidden',

    '&.Mui-selected': {
      backgroundColor: '#999',

      '&:hover': {
        backgroundColor: '#777',
      },
    },

    '&:first-child a': {
      paddingLeft: 32,
    },
    '&:last-child a': {
      paddingRight: 32,
    },
  },
  link: {
    color: 'black',
    height: '100%',
    width: '100%',
    fontWeight: 600,
    textDecoration: 'none',
    padding: '11px 24px',
    lineHeight: 2,

    '&:hover': {
      fontWeight: 700,
      textDecoration: 'none',
    },
  },
}))

export default useStyles
