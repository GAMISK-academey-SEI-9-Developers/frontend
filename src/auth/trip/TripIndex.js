import React ,{Component} from 'react'
import { index,destroy,show,addWaitingPassenger } from "./api";
import {withRouter} from 'react-router-dom'
import { Link} from 'react-router-dom'
import { Card } from 'semantic-ui-react'
class TripIndex extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            trips:[]
         }
    }
    componentDidMount(){
        const user =this.props.user
        index(user)
        .then(response =>{
            const trips = response.data.trips
            this.setState({
               trips
            })
        })
        .catch(err=>console.error(err))
    }
    showHandler=(id)=>{
        console.log(id)
        const user =this.props.user
        show(user,id)   
        .then(()=>{ 
            const trip = this.state.trip.filter(trip=>trip._id !== id)
            this.setState({trip})
        })       
        .catch(err=>console.log(err))
    }
    join=(id)=>{
        addWaitingPassenger(this.props.user,id)
        .then(res=>console.log(res.data))

    }

    
    render() { 
        return ( 
            <div>
                <h1>All trips</h1>
                {this.state.trips.map((trip)=>{
                    return(
                        <Card as={Link} to={`/trips/${trip._id}`}
    header={`from: ${trip.Destenation}  to: ${trip.Depature}`}
    meta={`avilable seats: ${trip.abailable_seates}`}
    description={[`date: ${Date(trip.date).toString()}` ].join(" , ")}
  />
                   
                )})}
            </div>
         );
    }
}
 
export default withRouter(TripIndex);
