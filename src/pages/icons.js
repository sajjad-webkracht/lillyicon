import React, { useState } from 'react';
import Layout from "../components/layout"
import { createTheme, ThemeProvider } from '@mui/material/styles';
import SearchForm from '../components/search_form';
import { graphql } from 'gatsby';
import ExploreRiveIcon from '../components/explore_rive_icon';
import Download from '../components/download';
import Seo from "../components/seo";
import ScrollUp from "../components/scroll_up";


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

const Icons = ({ data }) => {
  const [selectedIcon, setSelectedIcon] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  if (!data || !data.allMetadataJson) {
    return <div>Loading...</div>;
  }


  const icons = data.allMetadataJson.nodes;

  const handleIconClick = (icon) => {
    setSelectedIcon(icon);
  };

  const handleClosePopup = () => {
    setSelectedIcon(null);
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const filteredIcons = icons.filter(icon =>
    icon.keywords.some(keyword => keyword.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <ThemeProvider theme={theme}>
      <main className="font-roboto">
        <Layout>
          <div className="w-full gap-2 flex my-6 py-4 px-4 md:px-12">
          <SearchForm onSearch={handleSearch} />
          </div>
          <div className="grid md:grid-cols-6 lg:grid-cols-8 2xl:grid-cols-12 gap-4 mb-24 py-4 px-4 md:px-12">
            {filteredIcons.map((icon) => (
              <div
                key={icon.id}
                onClick={() => handleIconClick(icon)}
              >
                <ExploreRiveIcon url={icon.riv} />
              </div>
            ))}
          </div>
          <ScrollUp />
        </Layout>
      </main>
      {selectedIcon && <Download icon={selectedIcon} onClose={handleClosePopup} />}
    </ThemeProvider>
  )
}

export const query = graphql`
  query {
    allMetadataJson {
      nodes {
        id
        name
        keywords
        svg
        rev
        png
        riv
      }
    }
  }
`;

export default Icons

export const Head = () => (
  <Seo 
    title="Icons" 
    description="This personal project is created for the creative community, offering free animated icons made with Rive. It will always be free, but your support through donations would help sustain the service and grow the icon collection." 
  />
)
