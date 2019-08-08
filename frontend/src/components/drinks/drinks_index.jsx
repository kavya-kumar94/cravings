import React from 'react';
import { withRouter } from 'react-router-dom';
import DrinksIndexItem from './drinks_index_item';
import './drinks.css';

//loading:
import LoadingIcon from '../loading/loading_icon';

import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});


class DrinksIndex extends React.Component {

    constructor(props) {
        super(props);
        
        this.randomizer = this.randomizer.bind(this);
    }

    componentWillMount() {
        this.props.fetchDrinks(this.props.location.search);
    }

    randomizer() {
        let num_choices = this.props.drinks.length;
        let choiceIdx = Math.floor(Math.random() * Math.floor(num_choices));
        let drinkId = this.props.drinks[choiceIdx].id;
        this.props.history.push(`/drinks/${drinkId}`);
    }

    render() {

        if (this.props.drinks === undefined) return null;

        if (this.props.loading) {
            return <LoadingIcon />
        } else if (Object.keys(this.props.drinks).length === 0) {
            return (
                <div className='no-results-container'>
                    <div className='no-results-for-drink'>
                        <div className='no-results-text'>We were unable to find drinks in your area that meet your cravings.</div>
                        <br />
                        <button className='spin-again' onClick={() => this.props.history.push('/drinkform')}>Please try again.</button>
                    </div>
                </div>
            )
        } else {
            const drinks = this.props.drinks.map(drink => (
                <DrinksIndexItem
                    key={drink.id}
                    drink={drink} />
            ));

            return (
                <>
                    <Map center={[this.props.drinks[0].lat, this.props.drinks[0].lng]} zoom={13} style={{ height: "480px", width: "100%", position: "absolute" }}>
                        <TileLayer
                            attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
                            url="https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png"
                        // url="http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        // url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
                        />


                        {this.props.drinks.map((drinks) => {
                            return (
                                <Marker position={[drinks.lat, drinks.lng]}>
                                    <Popup>
                                        {drinks.name}
                                        <br />
                                        {drinks.address}
                                    </Popup>
                                </Marker>
                            )
                        })}
                    </Map>

                    <div className="drinks-index-container">
                        <button className='pick-one' onClick={() => this.randomizer()}>
                            Pick for me, I am indecisive
                        </button>

                        <ul className="drinks-ul">
                            {drinks}
                        </ul>


                    </div>
                </>
            );
        }
    }
    
}

export default withRouter(DrinksIndex);