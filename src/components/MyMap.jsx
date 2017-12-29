import React from "react";
import { compose, withProps } from "recompose";
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";

const MyMap = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyBkKvxdQ71vO3dTsujiteghMsBzaY3Elas&callback=initMap",
    loadingElement: <div style={{ height: `100%` }} />,
  containerElement: <div style={{ height: `300px` }} />,
  mapElement: <div style={{ height: `100%`, width: '90vw', margin: '10vh' }} />,
  }),
  withScriptjs,
  withGoogleMap
)((props) =>
  <GoogleMap
    defaultZoom={14}
    defaultCenter={{ lat: 40.7245448, lng: -73.9418603 }}
  >

   <Marker position={{ lat: 40.7245448, lng: -73.9418603 }} />
  </GoogleMap>
)

class MyFancyComponent extends React.PureComponent {
  state = {
    isMarkerShown: true,
  }

  render() {
    return (
      <MyMap />
    )
  }
}

export default MyMap;
