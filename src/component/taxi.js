import React, { Component } from 'react';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import 'react-dates/initialize';
import { DateRangePicker, SingleDatePicker, DayPickerRangeController } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import { InputGroup } from 'react-bootstrap';
import './taxi.css';

class Taxi extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lat: 37.75,
            lng: -122.39,
            zoom: 13,
            date: null,
            focused: false,
        };
    }
    render() {
        const position = [this.state.lat, this.state.lng]
        return (
            <div className="taxi">
                <div className="filter">
                    <InputGroup className="mb-3">
                        <SingleDatePicker
                            date={this.state.date}
                            onDateChange={date => this.setState({ date })}
                            focused={this.state.focused}
                            onFocusChange={({ focused }) => this.setState({ focused })}
                            id="date"
                        />
                    </InputGroup>
                </div>
                <Map center={position} zoom={this.state.zoom} className="map">
                    <TileLayer
                        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    {/* <Marker position={position}>
                        <Popup>
                            A pretty CSS3 popup. <br /> Easily customizable.
                        </Popup>
                    </Marker> */}
                </Map>
            </div>
        );
    }
}

export default Taxi;