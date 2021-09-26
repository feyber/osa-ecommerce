import { AppBar, Container, Link, Toolbar, Typography } from '@material-ui/core'
import Head from 'next/head'
import Image from 'next/image'
import useStyle from '../../utils/styles'
import NextLink from 'next/link'

export default function LayoutPage({ children }) {
  const classes = useStyle()
  return (
    <div>
      <Head>
        <title>Osa Commerce</title>
      </Head>
      <AppBar position='static' className={classes.navbar}>
        <Toolbar>
          <NextLink href='/' passHref>
            <Link>
              <Image src={'/logoijo.png'} alt='logo' width='150' height='40' />
            </Link>
          </NextLink>
        </Toolbar>
      </AppBar>
      <Container className={classes.main}>{children}</Container>
      <footer className={classes.footer}>
        <Typography>Copyright &copy; 2021 osa-commerce</Typography>
      </footer>
    </div>
  )
}
