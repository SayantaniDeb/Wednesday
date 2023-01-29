import React, { useEffect, useState } from "react";

export default function Card(){
    const[apiData,setApiData]=useState([]);
    function callApi() {
        fetch('https://www.boredapi.com/api/activity?type', { method: 'GET' })
          .then(response => response.json())
          .then(data => setApiData(data) ) // Displays the firstName from the API response
      }
      useEffect(()=>{
        callApi();
      },[])
    return(
        <section className="card-whole">
        <div className="card">
            <button onClick={callApi}>Get Advice</button>
        <div className="content--content">Advice: {apiData.activity}
            <div className="content--type">Type: {apiData.type}</div>
        </div>
        </div>
        <marquee scrollamount="20"><img src="../images/2.png" className="hand"></img></marquee>

       
        </section>
    )
}