import React from 'react';
import { Pie, Doughnut } from 'react-chartjs-2';
import 'chartjs-plugin-labels'

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
        let pieComponent = document.querySelector('.pie-component');
        console.log(pieComponent);
    }

    // onSliceClick() {
    //     ({ e: SliceClickEventArgs}) => {
    //     e.isExploded = !e.isExploded
    // }}

    // chooseFood() {

    // }

    render() {
        return (
            <div className="pie">
                <h1>Choose a Food Mood!</h1>

                <Doughnut
                    className="pie-component"
                    data={this.state.chartData}
                    width={600}
                    height={300}
                    options={{ maintainAspectRatio: true }}
                    allowSliceExplosion="true"
                    radiusFactor={0.7}
                    options={
                        // 'onClick': console.log('it works'),
                        {
                            events: ['click', 'mousemove'],
                            onClick: () => console.log('it works')
                        }
                    }
                // plugins={
                //     {labels: 
                //         {render: 'label'
                //     }}
                // }
                />

            </div>
        )
    }
}

export default DrinkWheel;