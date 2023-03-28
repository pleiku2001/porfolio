
import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Annotation,

} from "react-simple-maps";

const Map = () => {
  return (
    <ComposableMap
      projection="geoAzimuthalEqualArea"
      projectionConfig={{
        rotate: [-110,-20, 0, 0],
    
        scale: 1200
      }}
      style={{width:"100%", height:"100%"}}
    >
      <Geographies
        geography="/features.json"
        fill="#2C065D"
        stroke="#FFFFFF"
        strokeWidth={0.5}
      >
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography key={geo.rsmKey} geography={geo} />
          ))
        }
      </Geographies>
      <Annotation
        subject={[106,21]}
        dx={-30}
        dy={-20}
        connectorProps={{
          stroke: "white",
          strokeWidth: 2,
          strokeLinecap: "round",
          color: "red",
        }}
      >
        <text x="-8" textAnchor="end" alignmentBaseline="middle" fill="white">
          {"VietNam"}
        </text>
      </Annotation>
      <Annotation
        subject={[107,11]}
        dx={30}
        dy={-20}
        connectorProps={{
          stroke: "white",
          strokeWidth: 2,
          strokeLinecap: "round",
          color: "red",
        }}
      >
        <text x="125" textAnchor="end" alignmentBaseline="middle" fill="white">
          {"Ho Chi Minh City"}
        </text>
      </Annotation>
    
    </ComposableMap>
  );
};

export default Map;
