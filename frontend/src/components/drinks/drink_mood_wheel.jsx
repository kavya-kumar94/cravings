import React from 'react';
import { Pie } from 'react-chartjs-2';
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
        this.setState({[field]: !boo } );
    }

    query(e) {
        e.preventDefault();
        // console.log(this.state);
        this.props.history.push({
            pathname: '/drinks',
            search: `?caffeine=${this.state.caffeine}&sweet=${this.state.sweet}&aromatic=${this.state.aromatic}&hot=${this.state.hot}&iced=${this.state.iced}&healthy=${this.state.healthy}&sad=${this.state.sad}&tired=${this.state.tired}&happy=${this.state.happy}&angry=${this.state.angry}&sick=${this.state.sick}&celebratory=${this.state.celebratory}&stressed=${this.state.stressed}&adventurous=${this.state.adventurous}`
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
                    '#FFFFF0',
                    '#FFF8DC',
                    '#FFE4C4',
                    '#FFDEAD',
                    '#F5DEB3',
                    '#DEB887',
                    '#D2B48C',
                    '#BC8F8F',
                    '#F4A460',
                    '#CD853F',
                    '#D2691E',
                    '#8B4513',
                    '#A0522D',
                    '#800000',
                ],
                hoverBackgroundColor: [
                    '#006699',
                    '#006699',
                    '#006699',
                    '#006699',
                    '#006699',
                    '#006699',
                    '#006699',
                    '#006699',
                    '#006699',
                    '#006699',
                    '#006699',
                    '#006699',
                    '#006699',
                    '#006699',

                ]
            }]
        }

             return (
            <div className="doughnut">
                <h1>Choose your Drink Moods!</h1>
                <h3>Click on traits to deselect and remove from wheel</h3>
                     <Pie
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
                             position: 'left',
                             labels: {
                                 fontSize: 25,
                                 fontColor: '#000000',
                                 fontFamily: 'Source Sans Pro, sans-serif'
                             },
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