import GoogleMapReact from 'google-map-react'

type MapProps = {
    center: {
        lat: number,
        lng: number
    },
    zoom: number
} & typeof defaultProps;

const defaultProps = {
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
            </GoogleMapReact>
         </div>
    )
}

Map.defaultProps = defaultProps;
export default Map