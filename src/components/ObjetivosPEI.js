import React, { Component } from "react";

import '../firebase'
import './ObjetivosPEI.css'
import GetFirebase from './dataPEI'




// var datos = db.collection("inicio").doc("objetivosPEI");

// datos.get().then((doc) => {
//     if (doc.exists) {
//         console.log("LOs datos del PEI son :", doc.data().objetivo01);
//     } else {
//         // doc.data() will be undefined in this case
//         console.log("No such document!");
//     }
// }).catch((error) => {
//     console.log("Error getting document:", error);
// });




const center={
    textAlign:'center',
    fontSize: '25px'
}


export default class Responsive extends Component {

  componentDidMount(){
    
  }

  render() {
   return (
    <section className='container-fluid' 
    style={{backgroundImage: `url(${''})`}}>
       <div className='heading pei' style={center}>Objetivos Planteados en el PEI
           </div>
           <GetFirebase/>
    </section>
    );
  }
}