import * as React from "react"
import Layout from "../components/layout"
import { createTheme, ThemeProvider } from '@mui/material/styles';
import ScrollUp from "../components/scroll_up";
import Button from '@mui/material/Button';
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

const About = () => {
  return (
    <ThemeProvider theme={theme}>
      <main className="font-roboto">
        <Layout>
          <div className="py-4 px-4 md:px-12 flex flex-col items-center">
            <div className="my-12 flex gap-12">
              <div className="w-full md:w-1/2">
                <h3 className="text-base mb-1 font-bold text-blue-500">What's this all about?</h3>
                <h2 className="text-3xl font-bold text-zinc-50">About Lilly Icon</h2>
                <p className="text-zinc-400 mt-3 mb-4">I created Lilly Icon out of a genuine need for a project like this. The design community feels like a family, and by supporting each other, we can create better, more beautiful products—and, hopefully, a better world. That’s how Lilly Icon was born.</p>
                <p className="text-zinc-400 mt-3 mb-4">I’m passionate about bringing designs to life. Motion, especially interaction-based motion, is what makes a design truly feel alive. It’s like breathing life into a new creation—an exciting process that never stops inspiring me.</p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-5 w-full my-12">
              <div className="bg-blue-500/10 border-blue-500/30 border-[1px] rounded-md p-4 md:p-6 w-full md:w-1/4">
                <h4 className="text-lg text-zinc-50 mb-2 font-bold">Lightweight</h4>
                <p className="text-sm text-zinc-400">Lilly Icon utilizes Rive technology, which supports an SVG-based animation format, making it exceptionally lightweight. Designed specifically for web and app animations, Rive is highly optimized for performance.</p>
              </div>
              <div className="bg-blue-500/10 border-blue-500/30 border-[1px] rounded-md p-4 md:p-6 w-full md:w-1/4">
                <h4 className="text-lg text-zinc-50 mb-2 font-bold">Minimal</h4>
                <p className="text-sm text-zinc-400">The icons in Lilly collection are designed and animated with a minimalist, monochromatic, simple style, ensuring they blend seamlessly into any design. They remain clear and effective, even at smaller sizes, as they are designed in 24x24 grid.</p>
              </div>
              <div className="bg-blue-500/10 border-blue-500/30 border-[1px] rounded-md p-4 md:p-6 w-full md:w-1/4">
                <h4 className="text-lg text-zinc-50 mb-2 font-bold">Free</h4>
                <p className="text-sm text-zinc-400">Lilly Icon is completely free for both personal and commercial use—offered as a contribution to the design community. Donations, however, are always appreciated, as they help sustain the project and support its growth.</p>
              </div>
              <div className="bg-blue-500/10 border-blue-500/30 border-[1px] rounded-md p-4 md:p-6 w-full md:w-1/4">
                <h4 className="text-lg text-zinc-50 mb-2 font-bold">Interactive</h4>
                <p className="text-sm text-zinc-400">Built with Rive technology, Lillyicon makes interactivity effortless. Each icon features two independent animation effects—one for hover and one for click—bringing designs to life with seamless motion.</p>
              </div>
            </div>
            <div className="flex flex-col w-full mt-12 mb-24">
              <h2 className="text-3xl font-bold text-zinc-50">Who am I?</h2>
              <p className="text-zinc-400 mt-3 mb-4 w-full md:w-1/2">I’m a UI/UX designer, motion designer, graphic designer, and illustrator. To learn more about me or get in touch, feel free to visit my personal website.</p>
              <a href='https://sajjaddashti.ir/' className='inline-block'>
                <Button variant="outlined" color='ao' size='medium'>Sajjad Dashti - Personal Website</Button>
              </a>
            </div>
          </div>
          <ScrollUp />
        </Layout>
      </main>
    </ThemeProvider>
  )
}

export default About

export const Head = () => (
  <Seo 
    title="About" 
    description="This personal project is created for the creative community, offering free animated icons made with Rive. It will always be free, but your support through donations would help sustain the service and grow the icon collection." 
  />
)