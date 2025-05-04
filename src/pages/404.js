import * as React from "react"
import { Link } from "gatsby"
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Layout from "../components/layout"
import Seo from "../components/seo";
import Button from '@mui/material/Button';
import CookieNotice from "../components/cookie_notice"


const theme = createTheme({
  palette: {
    mode: 'dark',
    ao: {
      main: '#2b7fff',
      light: '#33B8FF',
      dark: '#007ACC',
      contrastText: '#FFFFFF',
    },
  },
});

const NotFoundPage = () => {
  return (
    <ThemeProvider theme={theme}>
      <main className="font-roboto">
        <Layout>
          <div className="py-4 px-4 md:px-12 flex flex-col items-center my-20">
            <h2 className="text-3xl text-center font-bold text-zinc-50">Error 404 - Page Not Found</h2>
            <p className="text-zinc-400 mt-3 mb-4 text-center md:w-1/2">Oops! It seems like you've wandered off the path. The page you're looking for doesn't exist on Lilly Icon. Don't worry—you can always head back to the home page and start fresh. Just click the link below:</p>
            <Link to='/' className='inline-block'>
              <Button variant="outlined" color='ao' size='medium'>Back to Home</Button>
            </Link>
          </div>
        </Layout>
      </main>
      <CookieNotice />
    </ThemeProvider>
  )
}

export default NotFoundPage

export const Head = () => (
  <Seo 
    title="404" 
    description="This personal project is created for the creative community, offering free animated icons made with Rive. It will always be free, but your support through donations would help sustain the service and grow the icon collection." 
  />
)