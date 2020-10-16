import React from 'react';
import { Card, Typography, Grid } from '@material-ui/core';
import CountUp from 'react-countup'
import '../../App.css';

const Info = ({ data: { confirmed, recovered, deaths } }) => {

    if (!confirmed) {
        return 'Loading...'
    }

    return (
        <div className={"containerInfo"}>
            <Grid container spacing={3} justify="center">
                {confirmed.value && <Grid item xs={6} sm={2} component={Card} className="card">
                    <Typography className={"cases"} gutterBottom>Active cases</Typography>
                    <Typography variant="h5">
                        <CountUp
                            start={0}
                            end={confirmed.value}
                            duration={2}
                            separator=","
                            className={"infected"}
                        />
                    </Typography>
                </Grid>}
                {recovered.value && <Grid item component={Card} xs={6} sm={2} className="card">
                    <Typography className={"cases"} gutterBottom>Recovered</Typography>
                    <Typography variant="h5">
                        <CountUp
                            start={0}
                            end={recovered.value}
                            duration={2}
                            separator=","
                            className={"recovered"}
                        />
                    </Typography>
                </Grid>}
                {deaths.value && <Grid item component={Card} xs={6} sm={2} className="card">
                    <Typography className={"cases"} gutterBottom>Deaths</Typography>
                    <Typography variant="h5">
                        <CountUp
                            start={0}
                            end={deaths.value}
                            duration={2}
                            separator=","
                            className={"deaths"}
                        />
                    </Typography>
                </Grid>}
                <Grid item component={Card} xs={6} sm={2} className="card">
                    <a href="#infoByCountry" className={"linkButton"}>View country</a>
                </Grid>
            </Grid>
        </div>
    )
}

export default Info