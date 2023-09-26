import '../../src/App.css';
import sosIcon from './img/sos.jfif';
import fireIcon from './img/fire.png';
import cancelIcon from './img/cancel.png';
import disasterIcon from './img/disaster.webp';
import assaultIcon from './img/assault.webp';
import Header from './header';
import Footer from './footer';
import AlertBox from './alertbox';
import React, { useState, useEffect } from 'react';


let userlat;
let userlong;
let problem = "unknown";

  

function Home() {

    const [latitude, setLatitude] = useState(null);
    const [longitude, setLongitude] = useState(null);

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLatitude(position.coords.latitude);
          setLongitude(position.coords.longitude);
        },
        (error) => {
          if (error.code === error.PERMISSION_DENIED) {
            console.error(error);
          }
        }
      );
    } else {
      alert('Geolocation is not supported by this browser.');
    }
  };
  

  useEffect(() => {
    getLocation();
  }, []); 

  userlat = latitude;
  userlong = longitude;



    const sos = () => {
        let sosButton = document.getElementById("sos");
        sosButton.style.width = "75px";
        sosButton.style.height = "75px";
        document.getElementById("fire").style.display="block";
        document.getElementById("assault").style.display="block";
        document.getElementById("disaster").style.display="block";
        document.getElementById("cancel").style.display="block";
        document.getElementById("fire").style.width = "75px";
        document.getElementById("fire").style.height = "75px";
        document.getElementById("fire").style.position = "static";
        document.getElementById("fire").style.top = "auto";
        document.getElementById("assault").style.width = "75px";
        document.getElementById("assault").style.height = "75px";
        document.getElementById("assault").style.position = "static";
        document.getElementById("assault").style.top = "auto";
        document.getElementById("disaster").style.width = "75px";
        document.getElementById("disaster").style.height = "75px";
        document.getElementById("disaster").style.position = "static";
        document.getElementById("disaster").style.top = "auto";
        document.getElementById("cancel").style.width = "75px";
        document.getElementById("cancel").style.height = "75px";
        document.getElementById("cancel").style.position = "static";
        document.getElementById("cancel").style.top = "auto";
    }

    let intensity = "unknown";

    function getIntensity() {
    
        document.getElementById("one").style.display="block";
        document.getElementById("two").style.display="block";
        document.getElementById("three").style.display="block";
        document.getElementById("one").style.position = "static";
        document.getElementById("one").style.top = "auto";
        document.getElementById("two").style.position = "static";
        document.getElementById("two").style.top = "auto";
        document.getElementById("three").style.position = "static";
        document.getElementById("three").style.top = "auto";
    }

    const fire = () => {
        problem = "fire";
        document.getElementById("fire").style.display="none";
        document.getElementById("assault").style.display="none";
        document.getElementById("disaster").style.display="none";
        document.getElementById("fire").style.width = "50px";
        document.getElementById("fire").style.height = "50px";
        document.getElementById("fire").style.position = "absolute";
        document.getElementById("fire").style.top = "50%";
        document.getElementById("assault").style.width = "75px";
        document.getElementById("assault").style.height = "75px";
        document.getElementById("assault").style.position = "absolute";
        document.getElementById("assault").style.top = "50%";
        document.getElementById("disaster").style.width = "75px";
        document.getElementById("disaster").style.height = "75px";
        document.getElementById("disaster").style.position = "absolute";
        document.getElementById("disaster").style.top = "50%";
        getIntensity();
    }

    const assault = () => {
        problem = "assault";
        document.getElementById("fire").style.display="none";
        document.getElementById("assault").style.display="none";
        document.getElementById("disaster").style.display="none";
        document.getElementById("fire").style.width = "50px";
        document.getElementById("fire").style.height = "50px";
        document.getElementById("fire").style.position = "absolute";
        document.getElementById("fire").style.top = "50%";
        document.getElementById("assault").style.width = "75px";
        document.getElementById("assault").style.height = "75px";
        document.getElementById("assault").style.position = "absolute";
        document.getElementById("assault").style.top = "50%";
        document.getElementById("disaster").style.width = "75px";
        document.getElementById("disaster").style.height = "75px";
        document.getElementById("disaster").style.position = "absolute";
        document.getElementById("disaster").style.top = "50%";
        getIntensity();
    }

    const disaster = () => {
        problem = "disaster";
        document.getElementById("fire").style.display="none";
        document.getElementById("assault").style.display="none";
        document.getElementById("disaster").style.display="none";
        document.getElementById("fire").style.width = "50px";
        document.getElementById("fire").style.height = "50px";
        document.getElementById("fire").style.position = "absolute";
        document.getElementById("fire").style.top = "50%";
        document.getElementById("assault").style.width = "75px";
        document.getElementById("assault").style.height = "75px";
        document.getElementById("assault").style.position = "absolute";
        document.getElementById("assault").style.top = "50%";
        document.getElementById("disaster").style.width = "75px";
        document.getElementById("disaster").style.height = "75px";
        document.getElementById("disaster").style.position = "absolute";
        document.getElementById("disaster").style.top = "50%";
        getIntensity();
    }

    const cancel = () => {
        let sosButton = document.getElementById("sos");
        document.getElementById("fire").style.display="none";
        document.getElementById("assault").style.display="none";
        document.getElementById("disaster").style.display="none";
        document.getElementById("one").style.display="none";
        document.getElementById("two").style.display="none";
        document.getElementById("three").style.display="none";
        sosButton.style.width = "150px";
        sosButton.style.height = "150px";
        document.getElementById("fire").style.width = "50px";
        document.getElementById("fire").style.height = "50px";
        document.getElementById("fire").style.position = "absolute";
        document.getElementById("fire").style.top = "50%";
        document.getElementById("assault").style.width = "75px";
        document.getElementById("assault").style.height = "75px";
        document.getElementById("assault").style.position = "absolute";
        document.getElementById("assault").style.top = "50%";
        document.getElementById("disaster").style.width = "75px";
        document.getElementById("disaster").style.height = "75px";
        document.getElementById("disaster").style.position = "absolute";
        document.getElementById("disaster").style.top = "50%";
        document.getElementById("cancel").style.width = "75px";
        document.getElementById("cancel").style.height = "75px";
        document.getElementById("cancel").style.position = "absolute";
        document.getElementById("cancel").style.top = "50%";
        intensity = "unknown";
        problem = "unknown";
    }

    function AlertFunc(message){
        document.getElementById("alerttext").innerHTML = message;
        document.getElementById("alertbox").style.opacity="1";
        document.getElementById("alertbox").style.top="80px";
        setTimeout(function(){ 
            document.getElementById("alertbox").style.top="60px"
            document.getElementById("alertbox").style.opacity="0"; 
        }, 5000);
    }



    function sendSoS(){
        AlertFunc("SoS sent successfully");
        console.log("Location: ",userlat, userlong);
        console.log("Intensity: ",intensity);
        console.log("Problem: ",problem);
        intensity = "unknown";
        problem = "unknown";
    }

    const one = () => {
        intensity = "low";
        let sosButton = document.getElementById("sos");
        document.getElementById("fire").style.display="none";
        document.getElementById("assault").style.display="none";
        document.getElementById("disaster").style.display="none";
        document.getElementById("one").style.display="none";
        document.getElementById("two").style.display="none";
        document.getElementById("three").style.display="none";
        sosButton.style.width = "150px";
        sosButton.style.height = "150px";
        document.getElementById("fire").style.width = "50px";
        document.getElementById("fire").style.height = "50px";
        document.getElementById("fire").style.position = "absolute";
        document.getElementById("fire").style.top = "50%";
        document.getElementById("assault").style.width = "75px";
        document.getElementById("assault").style.height = "75px";
        document.getElementById("assault").style.position = "absolute";
        document.getElementById("assault").style.top = "50%";
        document.getElementById("disaster").style.width = "75px";
        document.getElementById("disaster").style.height = "75px";
        document.getElementById("disaster").style.position = "absolute";
        document.getElementById("disaster").style.top = "50%";
        document.getElementById("cancel").style.width = "75px";
        document.getElementById("cancel").style.height = "75px";
        document.getElementById("cancel").style.position = "absolute";
        document.getElementById("cancel").style.top = "50%";
        sendSoS();
    }

    const two = () => {
        intensity = "medium";
        let sosButton = document.getElementById("sos");
        document.getElementById("fire").style.display="none";
        document.getElementById("assault").style.display="none";
        document.getElementById("disaster").style.display="none";
        document.getElementById("one").style.display="none";
        document.getElementById("two").style.display="none";
        document.getElementById("three").style.display="none";
        sosButton.style.width = "150px";
        sosButton.style.height = "150px";
        document.getElementById("fire").style.width = "50px";
        document.getElementById("fire").style.height = "50px";
        document.getElementById("fire").style.position = "absolute";
        document.getElementById("fire").style.top = "50%";
        document.getElementById("assault").style.width = "75px";
        document.getElementById("assault").style.height = "75px";
        document.getElementById("assault").style.position = "absolute";
        document.getElementById("assault").style.top = "50%";
        document.getElementById("disaster").style.width = "75px";
        document.getElementById("disaster").style.height = "75px";
        document.getElementById("disaster").style.position = "absolute";
        document.getElementById("disaster").style.top = "50%";
        document.getElementById("cancel").style.width = "75px";
        document.getElementById("cancel").style.height = "75px";
        document.getElementById("cancel").style.position = "absolute";
        document.getElementById("cancel").style.top = "50%";
        sendSoS();
    }
    
    const three = () => {
        intensity = "high";
        let sosButton = document.getElementById("sos");
        document.getElementById("fire").style.display="none";
        document.getElementById("assault").style.display="none";
        document.getElementById("disaster").style.display="none";
        document.getElementById("one").style.display="none";
        document.getElementById("two").style.display="none";
        document.getElementById("three").style.display="none";
        sosButton.style.width = "150px";
        sosButton.style.height = "150px";
        document.getElementById("fire").style.width = "50px";
        document.getElementById("fire").style.height = "50px";
        document.getElementById("fire").style.position = "absolute";
        document.getElementById("fire").style.top = "50%";
        document.getElementById("assault").style.width = "75px";
        document.getElementById("assault").style.height = "75px";
        document.getElementById("assault").style.position = "absolute";
        document.getElementById("assault").style.top = "50%";
        document.getElementById("disaster").style.width = "75px";
        document.getElementById("disaster").style.height = "75px";
        document.getElementById("disaster").style.position = "absolute";
        document.getElementById("disaster").style.top = "50%";
        document.getElementById("cancel").style.width = "75px";
        document.getElementById("cancel").style.height = "75px";
        document.getElementById("cancel").style.position = "absolute";
        document.getElementById("cancel").style.top = "50%";
        sendSoS();
    }




    return (
        <>
            <Header />
            <AlertBox />
            <div className="Home">
                <button id="two" style={{color: 'rgb(255, 166, 0)'}} onClick={two}><i className="bi bi-2-circle-fill"></i></button>
                <button id="fire" onClick={fire}><img src={fireIcon} alt="Fire"/></button>
                <div>
                    <button id="one"  style={{color: 'rgb(231, 209, 9)'}} onClick={one}><i className="bi bi-1-circle-fill"></i></button>
                    <button id="assault" onClick={assault}><img src={assaultIcon} alt="Assault"/></button>
                    <button id="sos" onDoubleClick={sos}><img src={sosIcon} alt="SOS"/></button>
                    <button id="disaster" onClick={disaster}><img src={disasterIcon} alt="Disaster"/></button>
                    <button id="three"  style={{color: 'red'}} onClick={three}><i className="bi bi-3-circle-fill"></i></button>
                </div>
                <button id="cancel" onClick={cancel}><img src={cancelIcon} alt="Cancel"/></button>
            </div>
            <Footer />
        </>
    );
}

export default Home;
