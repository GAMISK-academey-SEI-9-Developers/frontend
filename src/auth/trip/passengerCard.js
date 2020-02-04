import React from 'react'



function PassengerCard(passengers){

for (let [key, value] of Object.entries(passengers)) {
   return <p>{`${key}: ${value}`}</p>
  }
  


}

export default PassengerCard