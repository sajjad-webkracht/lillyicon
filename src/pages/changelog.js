import * as React from "react"
import Layout from "../components/layout"
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Seo from "../components/seo";
import { changes } from "../content/changes";
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

const Changelog = () => {
    return (
        <ThemeProvider theme={theme}>
            <main className="font-roboto">
                <Layout>
                    <div className="py-4 px-4 md:px-12 my-12">
                        <div className="">
                            <h3 className="text-base mb-1 font-bold text-blue-500">Stay updated</h3>
                            <h2 className="text-3xl font-bold text-zinc-50">Lilly Icon Changelog</h2>
                            <p className="text-zinc-400 mt-3 mb-4 w-full md:w-1/2">Discover the latest updates and changes in Lilly Icon. See what's new, what's coming soon, and, if you'd like, contribute to help shape its direction.</p>
                        </div>
                        <div>
                            <div className="grid mt-20 mb-20">
                                {changes.map((change, index) => (
                                    <div
                                        key={index}
                                        className={`border-l pl-4 md:pl-8 ${
                                          index === changes.length - 1 ? "" : "pb-28"
                                        } border-blue-500/10 flex flex-col md:flex-row gap-2 md:gap-10`}
                                      >
                                        <div className="w-full md:w-1/3">
                                            <div className="relative mb-7">
                                                <div className="absolute -left-6 md:-left-10 top-0">
                                                    <div className="rounded-full h-4 w-4 bg-blue-600" />
                                                </div>
                                                <p className="text-sm text-zinc-400">{change.date}</p>
                                            </div>
                                            <h3 className="text-4xl font-bold text-blue-500">{change.title}</h3>
                                            <div className="flex gap-2 mb-4 mt-4">
                                                {change.tags.map((tag, tagIndex) => (
                                                    <span
                                                        key={tagIndex}
                                                        className="text-xs bg-blue-500/10 text-blue-500 px-2 py-1 rounded-md"
                                                    >
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                        <div className="w-full md:w-2/3">
                                            {change.image && (
                                                <img
                                                    src={change.image}
                                                    alt={change.title}
                                                    className="w-full h-auto rounded-md mb-4"
                                                />
                                            )}
                                            <p className="text-zinc-400">{change.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <CookieNotice />
                </Layout>
            </main>
        </ThemeProvider>
    )
}

export default Changelog

export const Head = () => (
    <Seo
        title="Changelog"
        description="Discover the latest updates and changes in Lilly Icon. See what's new, what's coming soon, and, if you'd like, contribute to help shape its direction."
    />
)
