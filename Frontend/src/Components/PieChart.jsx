import React, { useState } from 'react';
import Chart from 'react-apexcharts';

function Piechart() {
    const [data, setData] = useState([
        { name: "Pass", value: 15 },
        { name: "Fail", value: 5 },
        { name: "Not Attempted", value: 10 }
    ]);

    const options = {
        labels: data.map(item => item.name),
        colors: ['#34c38f', '#ff5757', '#727cf5'],
        legend: {
            show: true,
            position: 'bottom',
            horizontalAlign: 'center',
            verticalAlign: 'middle',
            formatter: function (val, opts) {
                return val + " - " + opts.w.globals.series[opts.seriesIndex];
            },
            offsetX: 0,
            offsetY: 0,
            itemMargin: {
                horizontal: 10,
                vertical: 5
            }
        }
    };

    return (
        <div className='container-fluid mt-3 mb-3'>
            <Chart
                type='pie'
                height={400}
                series={data.map(item => item.value)}
                options={options}
            />
        </div>
    );
}

export default Piechart;