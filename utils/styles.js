import { makeStyles } from '@material-ui/core'

const useStyle = makeStyles({
  navbar: {
    backgroundColor: '#ffffff',
    '& a': {
      color: '#000000',
      marginLeft: 10,
    },
  },
  main: {
    minHeight: '80vh',
  },
  footer: {
    textAlign: 'center',
  },
})

export default useStyle
