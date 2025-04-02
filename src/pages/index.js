import * as React from "react"
import Layout from "../components/layout"
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Hero from "../components/hero_v2";
import Format from "../components/format";
import Start from "../components/start";
import Grid from "../components/grid";
import Usage from "../components/usage";
import ScrollUp from "../components/scroll_up";
import Seo from "../components/seo";

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

const IndexPage = () => {
  return (
    <ThemeProvider theme={theme}>
      <main className="font-roboto">
        <Layout>
          <Hero />
          <Format />
          <Grid />
          <Usage />
          <Start />
          <ScrollUp />
        </Layout>
      </main>
    </ThemeProvider>
  )
}

export default IndexPage

export const Head = () => (
  <Seo 
    title="Access Free Rive Animated Icons" 
    description="This personal project is created for the creative community, offering free animated icons made with Rive. It will always be free, but your support through donations would help sustain the service and grow the icon collection." 
  />
)
