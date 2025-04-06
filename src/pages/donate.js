import * as React from "react"
import Layout from "../components/layout"
import { createTheme, ThemeProvider } from '@mui/material/styles';
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

const Donate = () => {

    return (
        <ThemeProvider theme={theme}>
            <main className="font-roboto">
                <Layout>
                    <div className="w-full flex flex-col md:flex-row py-4 px-4 md:px-12 my-6 md:my-12 gap-10 md:gap-20">
                        <div className="w-full md:w-1/2">
                            <h3 className="text-base mb-1 font-bold text-blue-500">Keep the Project Alive!</h3>
                            <h2 className="text-3xl font-bold text-zinc-50">Support Lilly Icon</h2>
                            <p className="text-zinc-400 mt-3 mb-4">First of all, thank you for visiting Lilly Icon and using my free animated icons. This project is a labor of love, created to provide high-quality, creative resources to designers, developers, and creators like you—completely free of charge.</p>
                            <p className="text-zinc-400 mt-3 mb-4">However, maintaining and expanding Lilly Icon takes time, effort, and resources. From designing new icons to hosting the website, every little bit helps keep this project alive and growing.</p>
                            <p className="text-zinc-400 mt-3 mb-4">Your contribution, no matter how small, makes a huge difference. It allows me to continue dedicating time to this personal project and keep it free for everyone to enjoy.</p>
                        </div>
                        <div className="w-full md:w-1/2 flex md:justify-end mb-4">
                            <iframe src="https://nowpayments.io/embeds/donation-widget?api_key=CQEWM7D-TVCMGFM-NNY56KG-XVTC4JM" width="346" height="623" frameborder="0" scrolling="no" className="overflow-hidden">
                                Can't load widget
                            </iframe>
                        </div>
                    </div>
                    <ScrollUp />
                </Layout>
            </main>
        </ThemeProvider>
    )
}

export default Donate

export const Head = () => (
    <Seo 
      title="Donate" 
      description="This personal project is created for the creative community, offering free animated icons made with Rive. It will always be free, but your support through donations would help sustain the service and grow the icon collection." 
    />
  )