import React,{useState} from 'react';
import Chart from 'react-apexcharts';
//install : npm install react-apexcharts apexcharts//
function Linechart()
{
    const[score, setScore]= useState( //render the data from database 
        [
            {
                name:"My Score",
                data:[12,10,17,8,20,15]
            },
            {
              name:"Max marks scored in class",
              data:[17,18,17,20,20,19]
            },
            {
              name:"Min marks scored in class",
              data:[5,7,2,3,8,5]
            }
        ]
    );

    const[option, setOption]= useState( //Render the quiz titles from database
        {
            stroke: {               
                curve: 'straight',
                lineCap: 'round',
                width : 2
                // OR provide an array
               // curve: ['straight', 'smooth', 'monotoneCubic', 'stepline']
              },
            //   chart: {
            //     background: '#EBF1FF'
            // },
            colors: ['#792d00', '#f7ac50', '#411800'],           
            title:{ text:"My Progress in class"},
            xaxis:{
                title:{text:"Quizes"},
                categories:['Quiz1','Quiz2','Quiz3','Quiz4','Quiz5','Quiz6']
            },
            yaxis:{
                title:{text:"Marks"}                 
            }

        }
    );

    return(<React.Fragment>
        <div className='container-fluid mt-3 mb-3'>
                   
          <Chart type='area' 
         height={500}
                     
          series={score}
          options={option }
          >
          </Chart>

        </div>
    </React.Fragment>);
}

export default Linechart;