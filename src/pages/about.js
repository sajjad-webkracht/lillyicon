import * as React from "react"
import Layout from "../components/layout"
import { createTheme, ThemeProvider } from '@mui/material/styles';
import ScrollUp from "../components/scroll_up";
import Button from '@mui/material/Button';
import Seo from "../components/seo";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';
import RiveIcon from '../components/rive_icon';


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
            <div className="my-12 flex flex-col md:flex-row items-center gap-12 ">
              <div className="w-full md:w-1/3 grid-cols-3 grid-rows-3 grid gap-3 md:gap-5 h-72 relative">
                <div className="bg-blue-500/10 border-blue-500/30 border-[1px] border-solid rounded-md justify-center items-center py-4">
                  <RiveIcon url='/static/icons/calendar.riv' />
                </div>
                <div className="bg-blue-500/10 border-blue-500/30 border-[1px] border-solid rounded-md justify-center items-center py-4">
                  <RiveIcon url='/static/icons/remove.riv' />
                </div>
                <div className="bg-blue-500/10 border-blue-500/30 border-[1px] border-solid rounded-md justify-center items-center py-4">
                  <RiveIcon url='/static/icons/star.riv' />
                </div>
                <div className="bg-blue-500/10 border-blue-500/30 border-[1px] border-solid rounded-md justify-center items-center py-4">
                  <RiveIcon url='/static/icons/building.riv' />
                </div>
                <div className="bg-blue-500/10 border-blue-500/30 border-[1px] border-solid rounded-md justify-center items-center py-4">
                  <RiveIcon url='/static/icons/map.riv' />
                </div>
                <div className="bg-blue-500/10 border-blue-500/30 border-[1px] border-solid rounded-md justify-center items-center py-4">
                  <RiveIcon url='/static/icons/clock.riv' />
                </div>
                <div className="bg-blue-500/10 border-blue-500/30 border-[1px] border-solid rounded-md justify-center items-center py-4">
                  <RiveIcon url='/static/icons/edit.riv' />
                </div>
                <div className="bg-blue-500/10 border-blue-500/30 border-[1px] border-solid rounded-md justify-center items-center py-4">
                  <RiveIcon url='/static/icons/like.riv' />
                </div>
                <div className="bg-blue-500/10 border-blue-500/30 border-[1px] border-solid rounded-md justify-center items-center py-4">
                  <RiveIcon url='/static/icons/location.riv' />
                </div>
                <div className="w-full h-30 bg-gradient-to-t from-nigra/100 to-nigra/0 absolute bottom-0 left-0 pointer-events-none" />
                <div className="w-full h-30 bg-gradient-to-b from-nigra/100 to-nigra/0 absolute top-0 left-0 pointer-events-none" />
              </div>
              <div className="w-full md:w-2/3">
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
                <p className="text-sm text-zinc-400">Built with Rive technology, Lilly Icon makes interactivity effortless. Each icon features two independent animation effects—one for hover and one for click—bringing designs to life with seamless motion.</p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row w-full mt-20 mb-24 gap-12">
              <div className="w-full md:w-1/2">
                <h2 className="text-3xl font-bold text-zinc-50 mb-3">Why So Simple?</h2>
                <p className="text-zinc-400">As Susan Kare, the famous designer of the first Macintosh icons, said, having better resolution—and in the case of Rive technology, having vector-based animations—should not be misused to create unbelievably complicated icons for the user interface. We are here to make interactions better, more vivid, and easier—not more complicated and polluted. Lilly Icon was designed and animated with this concept in mind. You’ll find its design and animations minimal and simple, yet meaningful.</p>
              </div>
              <div className="flex flex-col md:flex-row gap-6 w-full md:w-1/2 bg-blue-500/10 border-blue-500/30 border-[1px] rounded-md p-8 md:p-12 relative">
                <span className="text-9xl font-bold text-blue-500 absolute -top-8 left-8 md:left-12">"</span>
                <div className="w-full">
                  <h2 className="text-base md:text-xl text-zinc-50">I believe that good icons are more akin to road signs rather than illustrations, and ideally should present an idea in a clear, concise, and memorable way. I try to optimize for clarity and simplicity even as palette and resolution options have increased.</h2>
                  <p className="text-zinc-400 mt-3">— Susan Kare</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col w-full mt-12 mb-24 gap-2">
              <h2 className="text-3xl font-bold text-zinc-50">Who am I?</h2>
              <p className="text-zinc-400 w-full md:w-1/2 mb-2">I’m Sajjad Dashti, a UI/UX designer, motion designer, graphic designer, and illustrator. To learn more about me or get in touch, feel free to visit my personal website.</p>
              <div className="flex gap-2 flex-col md:flex-row">
                <a href='https://sajjaddashti.ir/' className='inline-block'>
                  <Button variant="outlined" color='ao' size='medium'>Personal Website</Button>
                </a>
                <a href='https://www.linkedin.com/in/sajjad-dashti-nezhad-4386ab144/' className='inline-block'>
                  <Button variant="outlined" color='ao' size='medium' startIcon={<LinkedInIcon />}>LinkedIn</Button>
                </a>
                <a href='https://x.com/saggad_dashti' className='inline-block'>
                  <Button variant="outlined" color='ao' size='medium' startIcon={<XIcon />}>X</Button>
                </a>
                <a href='https://www.instagram.com/sajjaddashtin?igsh=MXNjaDJ0YzJ5bjht' className='inline-block'>
                  <Button variant="outlined" color='ao' size='medium' startIcon={<InstagramIcon />}>Instagram</Button>
                </a>
              </div>
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