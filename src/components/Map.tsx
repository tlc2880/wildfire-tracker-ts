import GoogleMapReact from 'google-map-react'
import LocationMarker from './LocationMarker'

type MapProps = {
    eventData: {
        ev: {},
        index: number
    },
    center: {
        lat: number,
        lng: number
    },
    zoom: number
} & typeof defaultProps;

const defaultProps = {
    eventData: {
        ev: {},
        index: 0
    },
    center: {
        lat: 42.3265,
        lng: -122.8756
    },
    zoom: 6
}

const Map = (props: MapProps) => {
    return (
        <div className="map">
            <GoogleMapReact
                bootstrapURLKeys={{ key: 'AIzaSyAbAuph1cCLCK94DS1UDoMSRSKwHqar0Oc' }}
                defaultCenter={ props.center }
                defaultZoom={ props.zoom }
            >
                <LocationMarker lat={props.center.lat} lng={props.center.lng} />
             </GoogleMapReact>
         </div>
    )
}

Map.defaultProps = defaultProps;
export default Map