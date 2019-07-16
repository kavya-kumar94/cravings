import React from 'react';
import { Pie, Doughnut } from 'react-chartjs-2';
// import 'chartjs-plugin-labels'
import './drink_mood_wheel.css'
import { defaults } from 'react-chartjs-2';

class DrinkWheel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            chartData: {
                
                labels: ['caffeine',
                    'sweet',
                    'aromatic',
                    'hot',
                    'iced',
                    'healthy',
                    'sad',
                    'tired',
                    'happy',
                    'angry',
                    'sick',
                    'celebratory',
                    'stressed',
                    'adventurous'],
                datasets: [{
                    data: [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10],
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

                    ]
                }]
            }

        }
    }

    componentDidMount() {
        let doComponent = document.querySelector('.do-component');
        console.log(doComponent);

        console.log(this.refs.chart);
    }

    // onSliceClick() {
    //     ({ e: SliceClickEventArgs}) => {
    //     e.isExploded = !e.isExploded
    // }}

    // chooseFood() {

    // }

    render() {
        // Chart.defaults.global.legend.onClick = function (e, arr) {
        //     /* do custom stuff here */
        //     Chart.defaults.global.legend.onClick.call(this, e, arr)

             return (
            <div className="doughnut">
                <h1>Choose your Drink Moods!</h1>
                
                <Doughnut
                    ref = "chart"
                    className="do-component"
                    data={this.state.chartData}
                    width={800}
                    height={300}
                    options={{ maintainAspectRatio: true }}
                    allowSliceExplosion="true"
                    radiusFactor={0.7}
                    options={
                        // 'onClick': () => console.log('it works'),
                        {
                            events: ['click', 'mousemove'],
                            onClick: () => console.log('it works')
                        }
                    }
                    options={
                        {
                            legend: {
                                position: 'left',
                                
                                onClick: (e, legendItem) => {
                                    legendItem.hidden = true
                                    console.log(legendItem)

                                },
                                labels: {
                                    fontSize: 20,
                                    fontColor: '#000000'
                                }
                            },
                        }   
                    }
                // plugins={
                //     options= {
                //         { 
                //             labels: {
                //                 render: 'label'
                //             }
                //         }
                //     }
                // }
                />
                <div className="drink-wheel-btn">
                    <button className="result-btn">Get Results</button>
                </div>
            </div>
        )
    }
}

export default DrinkWheel;