import React ,{Component} from 'react'
import { index,destroy,addPassengers,show,deletePassenger} from "./api";
import TripEdit from './TripEdit'
import PassengerCard from './passengerCard'
import {withRouter} from 'react-router-dom'
import { Link } from 'react-router-dom'
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
            console.log(this.props.user._id)
            if (copy.trip.owner ==this.props.user._id){
                copy.isOWner =true
            }
            this.setState(copy)
        })
        .catch(err=>console.error(err))
    }


// showHandler=(id)=>{
//         console.log(id)
//         const user =this.props.user
//         show(user,id)   
//         .then(()=>{ 
//             const trip = this.state.trip.filter(trip=>trip._id !== id)
//             this.setState({trip})
//         })
//         .catch(err=>console.log(err))
//     }


addpassenger=(pass)=>{
        addPassengers(this.props.user,this.state.trip._id,pass._id)
        let trip = {...this.state.trip}
        trip.Passengers.concat(trip.watingPassengers.filter(passenger=>{return(passenger._id==pass._id)}))
        trip.watingPassengers.filter(passenger=>{return(passenger._id==pass._id)})
        this.setState({trip})        
    }

deletepassenger =(pass)=>{
    deletePassenger(this.props.user,this.state.trip._id,pass._id)
    let trip = {...this.state.trip}
    trip.Passengers.filter(passenger=>{return(passenger._id==pass._id)})
    this.setState({trip})
}

    onEdite=()=>{
        let copy = {...this.state}
        copy.isupdte= true
        this.setState({copy})
    }

    render() { 
        return ( 
             <div>
            {this.state.isOWner&&<div>
            <botton onClick={this.onEdite}>Eidt</botton>
            <h2>waiting passengers</h2>
            <ul>{this.state.trip.waitingPassengers.map(passenger=>{return(<div>
            <PassengerCard passengers={passenger}/>
            <button onCklick={this.addpassenger}>addPassenger</button>
            <span>< button onCklick={this.deletepassenger}>Passenger</button>
            </span>
            </div>)})}
            </ul>
            <h2>Conformed passengers</h2>
            <ul>{this.state.trip.Passengers.map(passenger=>{return(<div>
            <passengerCard passenger={passenger}/>
            <button onCklick={this.addpassenger}>addPassenger</button>
            <span>< button onCklick={this.deletepassenger}>Passenger</button>
            </span>
            </div>)})}
            </ul>
            </div>}
            {this.state.isupdteisupdate&&<div>
            <TripEdit/>
             </div>}
            <h5>from:{`${this.state.trip.Destenation}`}</h5> 
            <h5>to:{`${this.state.trip.Depature}`}</h5>
             <h5>date:{this.state.trip.date}</h5>
            <h5>avilable seats:{this.state.trip.abailable_seates}</h5>
        
             </div>

                    )
                }
            
         
    }

 
export default withRouter(TripIndex);