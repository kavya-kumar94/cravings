import React from 'react';
import { withRouter } from 'react-router-dom';
import FoodsIndexItem from './foods_index_item';
import './foods.css'

import LoadingIcon from '../loading/loading_icon';

import {Map, Marker, Popup, TileLayer} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});


class FoodsIndex extends React.Component {
    constructor(props){
        super(props);
        this.randomizer = this.randomizer.bind(this);
    }

    componentWillMount() {
        this.props.fetchFoods(this.props.location.search);
    }

    randomizer() {
        let num_choices = this.props.foods.length;
        let choiceIdx = Math.floor(Math.random() * Math.floor(num_choices));
        let foodId = this.props.foods[choiceIdx].id;
        this.props.history.push(`/foods/${foodId}`);
    }

    render() {

        if (this.props.foods === undefined) return null;
        
        if (this.props.loading) {
            return <LoadingIcon />
        } else if (Object.keys(this.props.foods).length === 0) {
            return (
                <div className='no-results-container'>
                    <div className='no-results-for-food'>
                        <div className='no-results-text'>We were unable to find foods in your area that meet your cravings.</div>
                        <br />
                        <button className='spin-again' onClick={() => this.props.history.push('/foodform')}>Please try again.</button>
                    </div>
                </div>
            )
        } else {
            const foods = this.props.foods.map(food => (
                <FoodsIndexItem
                    key={food.id}
                    food={food} />
            ));
            return (
                
                <div className='foods-index-map-container'>

                    <div className="foods-index-container">
                        
                        <button className='pick-one' onClick={() => this.randomizer()}>
                            Pick for me, I am indecisive
                        </button>

                        <ul className="foods-ul">
                            {foods}
                        </ul>
                    </div>


                    <div className='foods-map-container'>
                        <Map center={[this.props.foods[0].lat, this.props.foods[0].lng]} zoom={13} style={{ height: "75%", width: '32%', position: "fixed", top: '167px' }}>
                            <TileLayer
                                attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
                                url="https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png"
                            />


                            {this.props.foods.map((food) => {
                                return (
                                    <Marker position={[food.lat, food.lng]}>
                                        <Popup>
                                            {food.name}
                                            <br />
                                            {food.address}
                                        </Popup>
                                    </Marker>
                                )
                            })}
                        </Map>
                    </div>

                </div>
            );
        }


    }
}


export default withRouter(FoodsIndex);