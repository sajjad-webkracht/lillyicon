import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const SearchForm = ({ onSearch }) => {
    const [query, setQuery] = useState('');

    const handleInputChange = (e) => {
        setQuery(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSearch(query);
    };

    return (
        <form className="w-full gap-2 flex my-6 items-stretch" onSubmit={handleSubmit}>
            <TextField autoComplete='off' value={query} onChange={handleInputChange} id="outlined-basic" label="Search Icon" variant="outlined" color="ao" className="w-full" />
            <button className='h-full' >
                <Button variant="outlined" color="ao" className="h-full">Search</Button>
            </button>
            
        </form>
    );
};

export default SearchForm;