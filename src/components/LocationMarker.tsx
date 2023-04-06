import { Icon } from '@iconify/react'
import locationIcon from '@iconify/icons-mdi/fire-alert'

type LocationMarkerProps = {
    lat: number,
    lng: number
    //onClick: () => {}
};

const LocationMarker = ({ lat, lng }: LocationMarkerProps) => {
    return (
        <div className="location-marker">
            <Icon icon={locationIcon} className="location-icon" />
        </div>
    )
}

export default LocationMarker