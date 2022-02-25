import { useMediaQuery } from "@material-ui/core";
import GoogleMapReact from "google-map-react";
import useStyles from "./styles";

function Map() {
  const classes = useStyles();
  const isMobile = useMediaQuery("(min-width: 600px)");
  const coordinates = {lat:0,lng:0};
  return (
    <div className={classes.mapContainer}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.API_KEY }}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        options={""}
        onChange={""}
        onChildClick={""}
      ></GoogleMapReact>
    </div>
  );
}

export default Map;
