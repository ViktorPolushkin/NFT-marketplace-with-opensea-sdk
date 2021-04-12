import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  grow: {
    flexGrow: 1,
  },
  appBar: {
    padding: '32px 24px 0 24px',
    backgroundColor: 'transparent',
    color: 'black',
  },
  connectButton: {
    fontSize: 16,
    lineHeight: '32px',
    fontFamily: 'Be Vietnam, sans-serif',
    borderRadius: 100,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
    fontFamily: 'Be Vietnam, sans-serif',
    paddingBottom: 5,
    fontWeight: 600,
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalContent: {
    maxWidth: 400,
    backgroundColor: theme.palette.background.paper,
    border: '0 solid transparent',
    outline: 0,
    borderRadius: 30,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(3, 4, 5),
    fontFamily: 'Be Vietnam, sans-serif',
    textAlign: 'center',
  },
  modalButton: {
    width: '100%',
    fontFamily: 'Be Vietnam, sans-serif',
    fontSize: '16px',
    fontWeight: 600,
    margin: '32px 0',
    lineHeight: 3,
    backgroundImage: `linear-gradient( 267.54deg, rgb(255, 220, 36) 1.63%, rgb(255, 92, 0) 98.05%)`,
    display: 'flex',
    justifyContent: 'space-between',
  },
}))

export default useStyles
