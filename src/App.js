import React, { useState} from 'react';

import './App.css';
import { GoogleMap, withScriptjs, withGoogleMap, Marker, InfoWindow} from "react-google-maps";
import backetsData from './data/backets.json';

function Map (){

  const [selectedBacket, setSelectedBacket] = useState(null);
  return (<GoogleMap defaultZoom={10} defaultCenter={{ lat:-0.437512,lng:36.955826 }}>
   
    {backetsData.backets.map((backet) =>(
      <Marker key={backet.id} position={{ lat: backet.latitude, lng: backet.longitude }}
      onMouseOver={() => { 
        setSelectedBacket(backet)
       }}
       icon={{ 
         url: '/mawingu.svg',
         scaledSize: new window.google.maps.Size(30,30)
       }}
      />
    ))}
      {selectedBacket && (
        <InfoWindow position={{ lat: selectedBacket.latitude, lng: selectedBacket.longitude }}
        onCloseClick={()=>{
          setSelectedBacket(null);
        }}
        
        ><div><h2>BKT {selectedBacket.name}</h2></div></InfoWindow>
      )}
  </GoogleMap>
  );
}

const WrappedMap = withScriptjs(withGoogleMap(Map));

function App() {
  return (
    <div className="App" style={{ width: '100vw', height: '100vh' }}>
      <WrappedMap googleMapURL={`https://maps.googleapis.com/maps/api/js?key=AIzaSyC_GzKTJQjATHIPykfarKXsLTE2nG1Wvck`} loadingElement={<div style={{ height: "100%" }}/>} 
      containerElement={<div style={{ height: "100%" }}/>}
      mapElement={<div style={{ height: "100%" }}/>}/>
    </div>
  );
}

export default App;
