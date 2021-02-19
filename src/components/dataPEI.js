import React, { useState, useEffect, Fragment } from "react";
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';


import  firebase from "firebase/app";
import 'firebase/firestore'
// import { v4 as uuidv4 } from "uuid";

function GetFirebase() {
  const [schools, setSchools] = useState([]);
  const [loading, setLoading] = useState(false)

  const ref = firebase.firestore().collection("objetivosPEI");
  //ONE TIME GET FUNCTION
  function getSchools2() {
    setLoading(true);
    ref.get().then((item) => {
      const items = item.docs.map((doc) => doc.data());
      setSchools(items);
      setLoading(false);
    });
  }
  useEffect(() => {
    getSchools2();
    // eslint-disable-next-line
  }, []);


  return (
    <Fragment>
       {loading ? <h4  className='text-center'>cargando...</h4> : null}
        <Slider >
        {schools.map((school) => (
                      <div className="slidercontrol" index={school.index}>
                            <div className='blockquote text-center'>
                              <div className="conesti">
                                <div className="school" key={school.id}>
                                    <p>{school.detalle}</p>
                                    <div className="bytesti"> </div>
                                </div>
                              </div>
                            </div>
                      </div>
              ))}
        </Slider>         
    </Fragment>
  );
}

export default GetFirebase;

//DOCS: https://firebase.google.com/docs/firestore/