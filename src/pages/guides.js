import * as React from "react"
import { useState, useEffect } from "react";
import Layout from "../components/layout"
import { createTheme, ThemeProvider } from '@mui/material/styles';
import ScrollUp from "../components/scroll_up";
import { guides } from "../content/guides";
import Seo from "../components/seo";
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

const Guides = () => {
    const [activeGuideIndex, setActiveGuideIndex] = useState(0);

    const handleGuideClick = (index) => {
        setActiveGuideIndex(index === activeGuideIndex ? null : index); // Toggle the content

        // Update the URL with #{content.link}
        const link = guides[index]?.link || "";
        if (typeof window !== "undefined") {
            window.history.pushState({}, "", `#${link}`);
        }
    };

// Ensure the correct guide is opened based on the URL hash
useEffect(() => {
    if (typeof window !== "undefined") {
        const hash = window.location.hash.substring(1); // Get the hash without the `#`
        const guideIndex = guides.findIndex((guide) => guide.link === hash);

        if (guideIndex !== -1) {
            // If the hash matches a guide, set it as the active guide
            setActiveGuideIndex(guideIndex);
        } else {
            // If no hash or invalid hash, default to the first guide
            setActiveGuideIndex(0);
            const firstGuideLink = guides[0]?.link || "";
            window.history.replaceState({}, "", `#${firstGuideLink}`);
        }
    }
}, []);

// Reset scroll position to the top when the page is opened
useEffect(() => {
    if (typeof window !== "undefined") {
        window.scrollTo(0, 0);
    }
}, []);

    return (
        <ThemeProvider theme={theme}>
            <main className="font-roboto">
                <Layout>

                    <div className="w-full flex flex-col md:flex-row py-4 px-4 md:px-12 my-6 md:my-12 gap-10 md:gap-20 relative">
                        <div className="w-full md:w-1/4 flex flex-col gap-4">
                            {guides.map((guide, index) => (
                                <button
                                    key={index}
                                    onClick={() => handleGuideClick(index)}
                                    className={`text-left text-base md:text-sm px-3 py-2 rounded-sm md:-translate-x-3 cursor-pointer ${
                                        activeGuideIndex === index
                                          ? "bg-blue-600/10 text-blue-500 font-bold"
                                          : "bg-blue-600/0 text-zinc-50 font-regular"
                                      } hover:bg-blue-600/20 duration-200`}
                                >
                                    {guide.title}
                                </button>
                            ))}
                        </div>
                        <div className="w-full md:w-3/4">
                            {activeGuideIndex !== null && (
                                <div className="">
                                    <h2 className="text-3xl font-bold text-blue-500 mb-2">
                                        {guides[activeGuideIndex].title}
                                    </h2>
                                    <div className="text-zinc-400" dangerouslySetInnerHTML={{ __html: guides[activeGuideIndex].content }}></div>
                                </div>
                            )}
                        </div>
                    </div>
                    <ScrollUp />
                </Layout>
            </main>
            <CookieNotice />
        </ThemeProvider>
    )
}

export default Guides

export const Head = () => (
    <Seo 
      title="Guides" 
      description="This personal project is created for the creative community, offering free animated icons made with Rive. It will always be free, but your support through donations would help sustain the service and grow the icon collection." 
    />
  )
