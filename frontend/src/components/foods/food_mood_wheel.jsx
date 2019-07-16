import React from 'react';
import { Pie, Doughnut } from 'react-chartjs-2';
import { withRouter } from 'react-router-dom';
import 'chartjs-plugin-datalabels';

class FoodWheel extends React.Component {
    constructor(props) {
        super(props);

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

        this.handleClick = this.handleClick.bind(this);
        this.query = this.query.bind(this);
        
    }

    query(e) {
        e.preventDefault();
        this.props.history.push({
            pathname: '/foods',
            search: `/foods?sweet=${this.state.sweet}&spicy=${this.state.spicy}&salty=${this.state.salty}&savory=${this.state.savory}&hot=${this.state.hot}&cold=${this.state.cold}&healthy=${this.state.healthy}&junk=${this.state.junk}&happy=${this.state.happy}&sad=${this.state.sad}&hangry=${this.state.hangry}&sick=${this.state.sick}&celebratory=${this.state.celebratory}&stressed=${this.state.stressed}&adventurous=${this.state.adventurous}`
        })
    }

    handleClick(field, boo) {
        this.setState({[field]: !boo});
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
                radiusFactor={0.8} 
                // options={{plugins: 
                // {
                //     datalabels: { render: 'hello' },
                // }}}
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
                <div className="food-wheel-btn">
                    <button onClick={this.query} className="result-btn">Get Results</button>
                </div>
            </div>
        )
    }
}

export default withRouter(FoodWheel);