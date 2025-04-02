import React, { useState, useEffect } from 'react';
import Layout from "../../components/layout"
import { Link } from 'gatsby';
import { graphql } from 'gatsby';
import DownloadRiveIcon from '../../components/download_rive_icon';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Snackbar from '@mui/material/Snackbar';
import ExploreRiveIcon from '../../components/explore_rive_icon';
import Seo from "../../components/seo";


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


const IconPage = ({ data }) => {
    const icon = data.iconData.nodes[0];
    const [showCopiedMessage, setShowCopiedMessage] = useState(false);
    const [randomIcons, setRandomIcons] = useState([]);

    useEffect(() => {
        const allIcons = data.allIcons.nodes;
        const filteredIcons = allIcons.filter(i => i.id !== icon.id);
        const shuffledIcons = filteredIcons.sort(() => 0.5 - Math.random());
        setRandomIcons(shuffledIcons.slice(0, 24));
    }, [data, icon.id]);

    const handleShare = () => {
        if (typeof window !== "undefined") {
            navigator.clipboard.writeText(window.location.href).then(() => {
                setShowCopiedMessage(true);
                setTimeout(() => {
                    setShowCopiedMessage(false);
                }, 2000);
            }).catch(err => {
                console.error('Failed to copy: ', err);
            });
        }
    };

    const handleSnackbarClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setShowCopiedMessage(false);
    };



    return (
        <ThemeProvider theme={theme}>
            <Layout>
                <div className='py-4 md:py-12 px-4 md:px-12'>
                    <div className="relative flex flex-col md:flex-row gap-4 items-end md:items-stretch">
                    <div className='w-full md:w-1/2 relative'>
                    <DownloadRiveIcon url={icon.riv} />
                    <a href='/guides/#color' target='_blank' className='absolute top-2 right-2'>
                        <Button variant="outlined" color='ao' size='small' >
                            How to Change Colors
                        </Button>
                    </a>
                    <button onClick={handleShare} className='absolute top-2 left-2 '>
                        <Button variant="outlined" color='ao' size='small' >
                            share
                        </Button>
                    </button>
                </div>
                        <div className='w-full md:w-1/2'>
                            <h1 className="text-lg md:text-xl font-bold text-zinc-50 mb-6">{icon.name} Free Animated Icon</h1>
                            <div className="mt-4">
                                <div className='flex flex-col gap-2'>
                                    <a href={icon.riv} download className='w-full'>
                                        <Button variant="outlined" color='ao' size='large' className='w-full' >
                                            Download .riv
                                        </Button>
                                    </a>
                                </div>


                                <div className='flex flex-col lg:flex-row gap-2 mt-2'>
                                    <a href={icon.svg} download className='w-full'>
                                        <Button variant="outlined" color='ao' size='large' className='w-full' >
                                            Download .svg
                                        </Button>
                                    </a>
                                    <a href={icon.png} download className='w-full'>
                                        <Button variant="outlined" color='ao' size='large' className='w-full' >
                                            Download .png
                                        </Button>
                                    </a>
                                </div>

                                <div className='mt-8'>
                                    <h3 className='text-zinc-50 mb-2 text-sm font-bold'>CC BY 4.0 License</h3>
                                    <p className="text-zinc-400 mb-4">
                                        This icon is licensed under the <a href='https://creativecommons.org/licenses/by/4.0/' target="_blank" className="underline"> Creative Commons Attribution 4.0 International (CC BY 4.0)</a> license.
                                    </p>
                                </div>

                                <div className='mt-8'>
                                    <Alert severity="info" color='ao'>
                                        <AlertTitle>Learn How to Use</AlertTitle>
                                        If you're unsure how to use the animated icon, check out the <Link to='/guides' className='underline'>guide here</Link>.
                                    </Alert>
                                </div>

                            </div>
                        </div>
                    </div>


                    <div className='w-full pt-12 mt-16'>
                        <h2 className='text-2xl font-bold text-center mb-8 text-zinc-50'>Explore Other Animated Icons</h2>
                        <div className='grid md:grid-cols-6 lg:grid-cols-8 2xl:grid-cols-12 gap-4'>
                            {randomIcons.map((randomIcon) => (
                                <Link to={`/icons/${randomIcon.name.toLowerCase().replace(/ /g, '-')}`} key={randomIcon.id} className=''>
                                    <ExploreRiveIcon url={randomIcon.riv} />
                                </Link>
                            ))}
                        </div>
                        <div className='flex justify-center mt-12'>
                            <Link to='/icons'>
                                <Button variant="outlined" color='ao' size='large' >
                                    Explore Other Icons Now
                                </Button>
                            </Link>
                        </div>
                    </div>


                </div>
                <Snackbar
                    open={showCopiedMessage}
                    autoHideDuration={2000}
                    onClose={handleSnackbarClose}
                    message="URL Copied!"
                />
            </Layout>
        </ThemeProvider>
    );
};

export const query = graphql`
  query($name: String!) {
    iconData: allMetadataJson(filter: { name: { eq: $name } }) {
      nodes {
        id
        name
        keywords
        svg
        riv
        rev
        png
        meta
      }
    }
          allIcons: allMetadataJson {
      nodes {
        id
        name
        keywords
        svg
        riv
        rev
        png
      }
    }
  }
`;

export default IconPage;

export const Head = ({ data }) => (
    <Seo 
      title={`${data.iconData.nodes[0].name} Free Animated Icon`}
      description="This personal project is created for the creative community, offering free animated icons made with Rive. It will always be free, but your support through donations would help sustain the service and grow the icon collection."
      metaImage={data.iconData.nodes[0].meta} 
    />
  )