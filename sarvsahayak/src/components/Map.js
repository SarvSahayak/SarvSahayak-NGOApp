import * as React from "react";
import { GoogleMap, Marker, withGoogleMap, withScriptjs } from 'react-google-maps';
//import MyMarker from "./MyMarker";
//import "../css/Mapstyle.css";


const SimpleMap = withScriptjs(withGoogleMap((props) =>
    <GoogleMap
        defaultZoom={8}
        defaultCenter={{ lat: 30.378180, lng: 76.776695 }}
    >
        {props.isMarkerShown && <Marker position={{ lat: 30.378180, lng: 76.776695 }} />}  
    </GoogleMap>
))

export default SimpleMap;
