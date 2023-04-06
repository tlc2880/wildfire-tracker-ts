import GoogleMapReact from 'google-map-react'
import LocationMarker from './LocationMarker'
type IeventData = {
    ev: {},
    index: number
}

type MapProps = {
    eventData: IeventData[],
    center: {
        lat: number,
        lng: number
    },
    zoom: number
};

// const defaultProps = {
//     eventData: {
//         ev: {},
//         index: 0
//     },
//     center: {
//         lat: 42.3265,
//         lng: -122.8756
//     },
//     zoom: 6
// }

const Map = (props: MapProps) => {
    const markers = props.eventData.map((ev: any) => {
        if (ev.categories[0].id === 8) {
            return <LocationMarker lat={ev.geometries[0].coordinates[1]} 
            lng={ev.geometries[0].coordinates[0]} />
        }
        return null
    })

    return (
        <div className="map">
            <GoogleMapReact
                bootstrapURLKeys={{ key: 'AIzaSyAbAuph1cCLCK94DS1UDoMSRSKwHqar0Oc' }}
                defaultCenter={ props.center }
                defaultZoom={ props.zoom }
            >
                <LocationMarker lat={props.center.lat} lng={props.center.lng} />
                {markers}
             </GoogleMapReact>
         </div>
    )
}

//Map.defaultProps = defaultProps;
export default Map