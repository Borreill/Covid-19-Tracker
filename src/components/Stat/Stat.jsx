import React from 'react';
import { Bar } from 'react-chartjs-2';
import '../../App.css';

const Stat = ({ data: { confirmed, recovered, deaths }, country }) => {

    const barChart = (
     confirmed ?
            (<Bar

                data={{
                    labels: ['Infected', 'Recovered', 'Deaths'],
                    datasets: [{
                        label: 'People',
                        backgroundColor: [
                            'rgb(37,33,52)',
                            'rgb(248,177,220)',
                            'rgb(226,139,100)',
                        ],
                        data: [ confirmed.value, recovered.value, deaths.value ]
                    }]
                }}

                options={{
                    legend: { display: false },
                    title: { display: true, text: `Currently in ${country}` }
                }}
            />)
            : null
    );

    return (

        <div className="chartContainer">
            { country === 'World' ? "" : barChart }
        </div>
       
    )
}

export default Stat;