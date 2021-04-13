import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  link: {
    color: 'black',
    fontWeight: 600,
    textDecoration: 'none',

    '&:hover': {
      fontWeight: 700,
      textDecoration: 'none',
    },
  },
}))

export default useStyles
