import React from 'react';
import { Pie, Doughnut } from 'react-chartjs-2';
import 'chartjs-plugin-datalabels';

class FoodWheel extends React.Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);

        this.state = {
            sweet: true,
            spicy: true,
            salty: true,
            savory: true,
            hot: true,
            cold: true,
            healthy: true,
            junk: true,
            sad: true,
            happy: true,
            hangry: true,
            sick: true,
            celebratory: true,
            stressed: true,
            adventurous: true
        }

        
    }

    // componentDidMount() {
    //     let pieComponent = document.querySelector('.pie-component');
    //     console.log(pieComponent);
    // }

    // onSliceClick() {
    //     ({ e: SliceClickEventArgs}) => {
    //     e.isExploded = !e.isExploded
    // }}

    handleClick(field, boo) {
        this.setState({[field]: !boo});
        console.log(this.state);
    }
    
    render() {
        const chartData = {
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
                }]};
        return (
            <div className="pie">
                <h1>Shape your Food Mood!</h1>
                <h1>(Click on traits to select/unselect)</h1>

                <Doughnut
                ref="chart"
                className="pie-component"
                data={chartData}
                width={600}
                height={300}
                options={{maintainAspectRatio: true}}
                allowSliceExplosion="true"
<<<<<<< HEAD
                radiusFactor={0.8} 
                options={{plugins: 
                {
                    datalabels: { render: 'hello' },
                }}}
=======
                radiusFactor={0.7} 
                options={{plugins: {datalabels: {display: true}}}}
>>>>>>> master
                legend={{onClick: (e, item) => {
                    var index = item.index;
                    var meta = this.refs.chart.chartInstance.getDatasetMeta(0).data[index]
                    var ci = this.refs.chart.chartInstance;
                    // See controller.isDatasetVisible comment
                    meta.hidden = !meta.hidden;
                    // We hid a dataset ... rerender the chart
                    this.handleClick(item.text, meta.hidden);
                    this.refs.chart.chartInstance.update();
                }}}
                />
                
                {/* // legend={ 
                //     {getElementAtEvent: (dataset) => {console.log(dataset)},
                //         onElementsClick: (eles) => {console.log(eles)},
                // }} />
                {/* options={
                        legend: {getDatasetAtEvent: (dataset) => {console.log(dataset)}}
                    // 'onClick': console.log('it works'),
                    //  {events: ['click', 'mousemove'],
                    //  onClick: () => console.log('it works')
                    // }
                } /> */} 
            

            </div>
        )
    }
}

export default FoodWheel;