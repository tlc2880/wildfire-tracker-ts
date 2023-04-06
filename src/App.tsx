import { useState, useEffect } from 'react'
import Map from './components/Map'
import Loader from './components/Loader'
type IeventData = {
  ev: {},
  index: number
}

const center = {
  lat: 42.3265,
  lng: -122.8756
}

const zoom = 6

function App() {
  const [eventData, setEventData] = useState([])
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    const fetchEvents = async () => {
      setLoading(true)
      const res = await fetch('https://eonet.gsfc.nasa.gov/api/v2.1/events')
      const { events } = await res.json()
      setEventData(events)
      setLoading(false)
    }
    fetchEvents()
  }, [])

  console.log(eventData);
  return (
    <div>
      { !loading ? <Map eventData ={eventData} center={center} zoom={zoom}/> : <h1>Loading</h1> }
    </div>
  );
}

export default App;