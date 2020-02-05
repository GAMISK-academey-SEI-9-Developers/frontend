import React ,{Component} from 'react'
import { index,destroy,addPassengers,show,deletePassenger} from "./api";
import TripEdit from './TripEdit'
import PassengerCard from './passengerCard'
import {withRouter} from 'react-router-dom'
import { Link } from 'react-router-dom'
import TripInfo from './tripInfo'
import { Card } from 'semantic-ui-react'
import { Button, Image } from 'semantic-ui-react'

class TripIndex extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            trip:{},
            isOWner:false,
            isupdte:false
         }
    }
    componentDidMount(){
        const tripId =this.props.match.params.id
        const user =this.props.user
        let copy = {...this.state}
        show(user,tripId)
        .then(response =>{
            copy.trip = response.data.trip
            console.log(copy.trip)
            if (copy.trip.owner ==this.props.user._id){
                copy.isOWner =true
            }
            this.setState(copy)
        })
        .catch(err=>console.error(err))
    }




addpassenger=(passId)=>{
   
        addPassengers(this.props.user,this.state.trip._id,passId)
        .then(()=>{
        let trip = {...this.state.trip}
        trip.Passengers.concat(trip.watingPassengers.filter(passenger=>{return(passenger._id==passId)}))
        trip.watingPassengers.filter(passenger=>{return(passenger._id==passId)})
        this.setState({trip}) } )      
    }

deletepassenger =(pass)=>{
    deletePassenger(this.props.user,this.state.trip._id,pass._id)
    let trip = {...this.state.trip}
    trip.Passengers.filter(passenger=>{return(passenger._id==pass._id)})
    this.setState({trip})
}

    onEdite=()=>{
        let copy = {...this.state}
        copy.isupdte= !copy.isupdte
        this.setState(copy)
    }

    render() { 
        return ( 
             <div>
                  <div className='card mt-5 py-5'>
             
             <TripInfo trip={this.state.trip}/>
         </div>
                 {(this.state.isupdte)? <TripEdit/>:null
             }
            {this.state.isOWner&&<div>
            <button type="button" class="btn btn-primary mt-5 center-block" onClick={this.onEdite}>Edit</button>
            <h2>waiting passengers</h2>
            {(this.state.trip.waitingPassengers.length)?<div>
                <Card.Group>
            {this.state.trip.waitingPassengers.map(passenger=>{return(
               
            <PassengerCard 
            passengers={passenger} 
            addPassengers={this.addpassenger}
             deletepassenger={this.deletepassenger}
              wating={true} />
           
           )})}
            
            </Card.Group></div>:<p>no witing passengers yet!</p>}
            <br/>
            <h2>Conformed passengers</h2>
            {
            (this.state.trip.Passengers.length)?
            <Card.Group>
            {this.state.trip.Passengers.map(passenger=>{return(
               
            <PassengerCard 
            passengers={passenger} 
            addPassengers={this.addpassenger}
             deletepassenger={this.deletepassenger}
              wating={false} />
           
           )})}
            
            </Card.Group>:<p>no witing passengers yet!</p>}
           : <p>no passengers conformed yet</p>}
            </div>}
            
        </div>
            
                    )
                }
            
         
    }

 
export default withRouter(TripIndex);