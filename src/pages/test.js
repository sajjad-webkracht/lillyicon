import * as React from "react"
import Layout from "../components/layout"
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Seo from "../components/seo";
import { useRive, useStateMachineInput } from '@rive-app/react-canvas';


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

const Test = () => {

      const { rive, RiveComponent } = useRive({
        src: '/static/ui/folder-color.riv',
        stateMachines: 'default',
        autoplay: true,
        autoBind: true,
        onLoad: () => {
            // Access the current instance that was auto-bound
            let boundInstance = rive.viewModelInstance;
        }
      });



  return (
      <ThemeProvider theme={theme}>
          <main className="font-roboto">
              <Layout>
                  <div className="w-full flex justify-center my-24">
                      <div className="w-20 h-20">
                          <RiveComponent />
                      </div>
                  </div>
              </Layout>
      </main>
    </ThemeProvider>
  )
}

export default Test

export const Head = () => (
  <Seo 
    title="Test" 
    description="This personal project is created for the creative community, offering free animated icons made with Rive. It will always be free, but your support through donations would help sustain the service and grow the icon collection." 
  />
)
