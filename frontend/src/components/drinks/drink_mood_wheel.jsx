import React from 'react';
import { Pie, Doughnut } from 'react-chartjs-2';
import { withRouter } from 'react-router-dom';
// import 'chartjs-plugin-labels'
import 'chartjs-plugin-datalabels';
import './drink_mood_wheel.css'
import { defaults } from 'react-chartjs-2';

class DrinkWheel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            caffeine: true,
            sweet: true,
            aromatic: true,
            hot: true,
            iced: true,
            healthy: true,
            sad: true,
            tired: true,
            happy: true,
            angry: true,
            sick: true,
            celebratory: true,
            stressed: true,
            adventurous: true
        }
        this.handleClick = this.handleClick.bind(this);
        this.query = this.query.bind(this);
    }

    handleClick(field, boo) {
        // debugger
        this.setState({[field]: !boo } );
        console.log(this.state);
    }

    query(e) {
        e.preventDefault();
        this.props.history.push({
            pathname: '/drinks',
            search: `?caffeine=${this.state.caffeine}&sweet=${this.state.sweet}&aromatic=${this.state.aromatic}&hot=${this.state.hot}&iced=${this.state.iced}&healthy=${this.state.healthy}&sad=${this.state.sad}&tired=${this.state.tired}&happy=${this.state.happy}&angry=${this.state.angry}&sick=${this.state.sick}&celebratory=${this.state.celebratory}&stressed=${this.state.stressed}&adventurous=${this.state.adventurous}`
            // search: `?caffeine=${this.state.caffeine}&sweet=${this.state.sweet}`
            })
    }

    render() {
        // Chart.defaults.global.legend.onClick = function (e, arr) {
        //     /* do custom stuff here */
        //     Chart.defaults.global.legend.onClick.call(this, e, arr)
        let chartData = {

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

             return (
            <div className="doughnut">
                <h1>Choose your Drink Moods!</h1>
                     <Doughnut
                         ref="chart"
                         className="pie-component"
                         data={chartData}
                         width={600}
                         height={300}
                         options={{ maintainAspectRatio: true }}
                         allowSliceExplosion="true"
                         radiusFactor={0.7}
                         options={{ plugins: { datalabels: { display: false } } }}
                         legend={{
                             onClick: (e, item) => {
                                 var index = item.index;
                                 var meta = this.refs.chart.chartInstance.getDatasetMeta(0).data[index]
                                 var ci = this.refs.chart.chartInstance;
                                 // See controller.isDatasetVisible comment
                                 meta.hidden = !meta.hidden;
                                 // We hid a dataset ... rerender the chart
                                 this.handleClick(item.text, meta.hidden);
                                 this.refs.chart.chartInstance.update();
                             }
                         }}
                     />
                {/* <Doughnut
                    ref = "chart"
                    className="do-component"
                    data={this.state.chartData}
                    width={800}
                    height={300}
                    options={{ maintainAspectRatio: true }}
                    radiusFactor={0.7}
                    options={
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
                /> */}
                <div className="drink-wheel-btn">
                    <button onClick={this.query} className="result-btn">Get Results</button>
                </div>
            </div>
        )
    }
}

export default withRouter(DrinkWheel);