import React from 'react';
import { Pie } from 'react-chartjs-2';

// const data = {
//     labels: ['sweet', 'spicy', 'savory', 'salty', 'hot', 'cold',
//         'healthy', 'junk', 'sad', 'happy', 'hangry', 'sick', 'celebratory',
//         'stressed', 'adventurous'],
//     datasets: [{
//         data: [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10],
//         backgroundColor: [
//             '#FF6384',
//             '#36A2EB',
//             '#FFCE56',
//             '#FF6384',
//             '#36A2EB',
//             '#FFCE56',
//             '#FF6384',
//             '#36A2EB',
//             '#FFCE56',
//             '#FF6384',
//             '#36A2EB',
//             '#FFCE56',
//             '#FF6384',
//             '#36A2EB',
//             '#FFCE56',
//         ],
//         hoverBackgroundColor: [
//             '#FF6384',
//             '#36A2EB',
//             '#FFCE56',
//             '#FF6384',
//             '#36A2EB',
//             '#FFCE56',
//             '#FF6384',
//             '#36A2EB',
//             '#FFCE56',
//             '#FF6384',
//             '#36A2EB',
//             '#FFCE56',
//             '#FF6384',
//             '#36A2EB',
//             '#FFCE56',

//         ]
//     }]
// };

// export default React.createClass({
//     displayName: 'PieChart',

//     render() {
//         return (
//             <div>
//                 <h2>Pie Chart</h2>
//                 <Pie data={data} />
//             </div>
//         );
//     }
// });

class Chart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            chartData: {
                labels: ['sweet', 'spicy', 'savory', 'salty', 'hot', 'cold',
                    'healthy', 'junk', 'sad', 'happy', 'hangry', 'sick', 'celebratory',
                    'stressed', 'adventurous'],
                datasets: [{
                    data: [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10],
                    backgroundColor: [
                        '#336699',
                        '#33CCCC',
                        '#339999',
                        '#3366CC',
                        '#0000CC',
                        '#0000FF',
                        '#0033FF',
                        '#0066FF',
                        '#0099FF',
                        '#00CCFF',
                        '#00FFFF',
                        '#00CCCC',
                        '#0099CC',
                        '#0066CC',
                        '#006699',
                    ],
                    hoverBackgroundColor: [
                        '#006699',
                        '#0066CC',
                        '#0099CC',
                        '#00CCCC',
                        '#00FFFF',
                        '#00CCFF',
                        '#0099FF',
                        '#0066FF',
                        '#0066FF',
                        '#0033FF',
                        '#0000FF',
                        '#0000CC',
                        '#339999',
                        '#33CCCC',
                        '#336699',

                    ]
                }]
            }

        }
    }

    render() {
        return (
            <div className="pie">
                <Pie
                data={this.state.chartData}
                width={600}
                height={300}
                options={
                    {maintainAspectRatio: true}
                }
                    />
            </div>
        )
    }
}

export default Chart;