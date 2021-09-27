import { makeStyles } from '@material-ui/core'

const useStyle = makeStyles({
  navbar: {
    backgroundColor: '#ffffff',
    '& a': {
      color: '#000000',
      marginLeft: 10,
    },
  },
  bold: {
    fontWeight: 700,
  },
  kanan: {
    flexGrow: 1,
  },

  main: {
    minHeight: '80vh',
  },
  footer: {
    marginTop: 20,
    textAlign: 'center',
  },
  section: {
    marginTop: 30,
    marginBottom: 10,
  },
  button: {
    border: 2,
    backgroundColor: '#D3D3D3',
    padding: 6,
    borderRadius: 5,
    color: '#000000',
    boxShadow: 3,
  },
})

export default useStyle
