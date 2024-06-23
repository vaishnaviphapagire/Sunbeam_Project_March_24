import React, { useState } from 'react';
import Chart from 'react-apexcharts';

function ResLinechart() {
    const [data, setData] = useState([
        { name: "Pass", value: 15 },
        { name: "Fail", value: 5 },
        { name: "Not Attempted", value: 10 }
    ]);

    const options = {
        chart: {
            id: 'line-chart',
            toolbar: {
                show: false
            }
        },
        xaxis: {
            categories: data.map(item => item.name),
        },
        colors: ['#34c38f'],
        dataLabels: {
            enabled: false
        },
        markers: {
            size: 6
        },
        grid: {
            borderColor: '#ebedf2',
        }
    };

    return (
        <div className='container-fluid mt-3 mb-3'>
            <Chart
                type='line'
                height={400}
                series={[{ name: 'Series 1', data: data.map(item => item.value) }]}
                options={options}
            />
        </div>
    );
}

export default ResLinechart;