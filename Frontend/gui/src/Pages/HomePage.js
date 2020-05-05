import React from "react";

import CarouselHP from "../Components/CarouselHP";
import Chiffre from "../Components/Chiffres";
import Prescard from "../Components/Prescard";
import InvBloc from "../Components/InvBloc";


function HomePage(props) {
  return (
    <div>
      <CarouselHP />
      <div style={{marginTop: 150+"px"}}></div>
      <div>
          {/* <p className="Chif_tit">Ecole en Chiffres</p> */}
      </div>
      <Chiffre/>
      <div style={{marginTop: 200+"px"}}></div>
      <Prescard/>
      <div style={{marginTop: 200+"px"}}></div>
      <InvBloc/>
    </div>
  );
}

export default HomePage;
