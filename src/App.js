import React, { useEffect, useState } from 'react';
import { Info, InfoByCountry, Stat } from './components';
import { Typography, Grid } from '@material-ui/core';
import './App.css';
import { fetchData } from './api';
import coronaImage from './images/covid-19.png';

export default function App() {
    const [data, setData] = useState({});
    const [lastUpdate, setLastUpdate] = useState({});
    const [selectedCountry, setSelectedCountry] = useState('');

    const handleSelectCountry = async (country) => {
        setSelectedCountry(country);
    };

    useEffect(() => {
        const getData = async () => {
            const response = await fetchData(selectedCountry);
            setData(response);
            setLastUpdate(response.lastUpdate)
        };
        getData();
    }, [selectedCountry]);

    return (
        <main className="background">
            <div className="welcome">
                <Grid container spacing={3} className="row" >
                    <Grid item xs={6}  >
                        <Typography className={"title"} gutterBottom>COVID-19</Typography>
                        <Typography className={"update"}>Updated on {new Date(lastUpdate).toDateString()} </Typography>
                    </Grid>
                    <Grid item xs={6}  >
                        <img className="image" src={coronaImage} alt='COVID-19' />
                    </Grid>
                </Grid>
                <Info data={data} />
            </div>
            <InfoByCountry handleSelectCountry={handleSelectCountry} />
            <Stat data={data} country={selectedCountry} />

        </main>
    );
};


