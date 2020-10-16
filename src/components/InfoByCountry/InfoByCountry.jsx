
import React, { useEffect, useState } from 'react';
import { Select, FormControl } from '@material-ui/core';
import '../../App.css';
import { fetchCountries } from '../../api/index';


const InfoByCountry = ({ handleSelectCountry }) => {

    const [countries, setCountries] = useState([]);

    const getCountries = async () => {
        const response = await fetchCountries();
        setCountries(response);
    };

    useEffect(() => {
        getCountries();
    }, [setCountries]);
    
    return (
        <div id="infoByCountry" className={"selectCountry"}>
            <FormControl variant="outlined" >
                <Select
                    native
                    labelId="demo-mutiple-name-label"
                    id="demo-mutiple-name"
                    onChange={(e) => handleSelectCountry(e.target.value)}
                >
                    <option className={"countryName"} value=''>The World</option>
                    {countries.map((country, index) => (
                        <option key={index} value={country} className={"countryName"}>
                            {country}
                        </option>
                    ))}
                </Select>
            </FormControl>
        </div>
    )
}

export default InfoByCountry;