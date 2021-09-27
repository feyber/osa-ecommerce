import {
  AppBar,
  Container,
  Link,
  Toolbar,
  Typography,
  createTheme,
  ThemeProvider,
  CssBaseline,
  // Switch,
} from '@material-ui/core'
import Head from 'next/head'
import Image from 'next/image'
import useStyle from '../../utils/styles'
import NextLink from 'next/link'
// import { useContext } from 'react'
// import { Store } from '../../utils/Store'
// import Cookies from 'js-cookie'

export default function LayoutPage({ title, children, description }) {
  // const { state, dispatch } = useContext(Store)
  // const { darkMode } = state
  const theme = createTheme({
    typography: {
      h1: {
        fontSize: '1.6rem',
        fontWeight: 700,
        margin: '1rem, 0',
      },
      h1: {
        fontSize: '1.4rem',
        fontWeight: 700,
        margin: '1rem, 0',
      },
    },
    pallete: {
      // type: darkMode ? 'dark' : 'light',
      type: 'light',
      primary: {
        main: '#f0c000',
      },
      secondary: {
        main: '#208080',
      },
    },
  })
  const classes = useStyle()
  // const darkModeChangeHandler = () => {
  //   dispatch({ type: darkMode ? 'DARK_MODE_OFF' : 'DARK_MODE_ON' })
  //   const newDarkMode = !darkMode
  //   Cookies.set('darkMode', newDarkMode ? 'ON' : 'OFF')
  // }
  return (
    <div>
      <Head>
        <title>{title ? `${title} - Osa Commerce` : 'Osa Commerce'}</title>
        {description && <meta name='description' content={description}></meta>}
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppBar position='static' className={classes.navbar}>
          <Toolbar>
            <NextLink href='/' passHref>
              <Link>
                <Image
                  src={'/logoijo.png'}
                  alt='logo'
                  width='150'
                  height='45'
                />
              </Link>
            </NextLink>
            <div className={classes.kanan}></div>
            <div>
              {/* <Switch
                checked={darkMode}
                onChange={darkModeChangeHandler}
              ></Switch> */}
              <NextLink href='/cart' passHref>
                <Link className={classes.bold}>Cart</Link>
              </NextLink>
              <NextLink href='/login' passHref>
                <Link className={classes.bold}>Login</Link>
              </NextLink>
            </div>
          </Toolbar>
        </AppBar>
        <Container className={classes.main}>{children}</Container>
        <footer className={classes.footer}>
          <Typography>Copyright &copy; 2021 osa-commerce</Typography>
        </footer>
      </ThemeProvider>
    </div>
  )
}
