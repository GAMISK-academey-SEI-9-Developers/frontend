import React from 'react'


class PassengerCard extends React.Component{ 
state={}
addpassenger=(pass)=>{
  this.props.addPassengers(this.props.user,this.state.trip._id,pass._id)
  let trip = {...this.state.trip}
  trip.Passengers.concat(trip.watingPassengers.filter(passenger=>{return(passenger._id==pass._id)}))
  trip.watingPassengers.filter(passenger=>{return(passenger._id==pass._id)})
  this.setState({trip})        
}

deletepassenger =(pass)=>{
this.props.deletePassenger(this.props.user,this.state.trip._id,pass._id)
let trip = {...this.state.trip}
trip.Passengers.filter(passenger=>{return(passenger._id==pass._id)})
this.setState({trip})
}

render(){
  console.log(this.props.passengers)

return (
    <div className='card mt-5'>
        <div className="card-body">  
            <h5 className="card-title">{this.props.passengers.email}</h5>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">about</li>
                <li className="list-group-item">{this.props.passengers.email}</li>
                <li className="list-group-item">< button type="button" class="btn btn-success mr-2" onCklick={()=>this.deletepassenger(this.props.passenger.passengers._id)}>Passenger</button> 


                <button type="button" class="btn btn-warning btn-sm " onCklick={()=>this.addpassenger(this.props.passengers._id)}>Delete Passenger</button></li> 
            
             </ul>
        </div>
    </div>
  
)}

}

export default PassengerCard