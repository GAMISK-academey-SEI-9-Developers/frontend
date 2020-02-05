import React, { Component } from "react";
import { index, destroy, addPassengers, show, deletePassenger ,addWaitingPassenger,destroyWaitingPassenger} from "./api";
import TripEdit from "./TripEdit";
import PassengerCard from "./passengerCard";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import TripInfo from "./tripInfo";
import { Card } from "semantic-ui-react";
import { Button, Image } from "semantic-ui-react";
import CarIndex from "../../cars/CarIndex";

class TripIndex extends Component {
  constructor(props) {
    super(props);
    this.state = {
      trip: {},
      isOWner: false,
      isupdte: false
    };
  }
  componentDidMount() {
    const tripId = this.props.match.params.id;
    const user = this.props.user;
    let copy = { ...this.state };
    show(user, tripId)
      .then(response => {
        copy.trip = response.data.trip;
        console.log(copy.trip);
        if (copy.trip.owner == this.props.user._id) {
          copy.isOWner = true;
        }
        this.setState(copy);
      })
      .catch(err => console.error(err));
  }

  addpassenger = passId => {
    addPassengers(this.props.user, this.state.trip._id, passId)
    .then(() => {
      let trip = { ...this.state.trip };
      console.log(trip);
      this.props.history.push(`/trips/${this.state.trip._id}`)
      // trip.Passengers.concat(
      //   trip.watingPassengers.filter(passenger => {
      //     return passenger._id == passId;
      //   })
      // );
      // trip.watingPassengers.filter(passenger => {
      //   return passenger._id == passId;
      // })
      // .then(()=>this.setState({ trip }));
    });
  };
  deleteWaitingPassenger=(pass)=>{
    destroyWaitingPassenger(this.props.user, this.state.trip._id, pass._id)
    .then(()=> {
      let trip = { ...this.state.trip };
    trip.waitingPassengers.filter(passenger => {
      return passenger._id !== pass._id;
    })
    this.setState({ trip })
  })
   
    
  };
  


  deletepassenger = pass => {
    deletePassenger(this.props.user, this.state.trip._id, pass._id)
    .then(()=> {
    let trip = { ...this.state.trip };
    trip.Passengers.filter(passenger => {
      return passenger._id !== pass._id;
    })
    this.setState({ trip })})
    
    
  };
  deleteTrip =() =>{
    const tripId =this.state.trip._id
    const user =this.props.user
    destroy(user,tripId)
    .then(()=>{alert('Delete')})
    .then(()=>this.props.history.push(`/trips`))
    
  }

  join=()=>{
    const tripId =this.state.trip._id
    addWaitingPassenger(this.props.user,tripId)
    .then(()=>{alert('a join request have been sent')})

}
  onEdite = () => {
    let copy = { ...this.state };
    copy.isupdte = !copy.isupdte;
    this.setState(copy);
  };

  render() {
    return (
      <div className=" card">
        <div className="card my-5 py-5">
          <TripInfo trip={this.state.trip} />
          
        </div>

        {this.state.isupdte ? <TripEdit /> : null}
        {this.state.isOWner && ( <React.Fragment> <button
              type="button"
              class="btn btn-primary my-2 "
              onClick={this.onEdite}
            >
              Edit
            </button>
            <button
            type="button"
            class="btn btn-danger my-2 "
            onClick={this.deleteTrip}
          >
            delete
          </button>
          <CarIndex user={this.props.user} /> 
          </React.Fragment>) }
        

        {!this.state.isOWner && 
        <button
            type="button"
            class="btn btn-success my-2 "
            onClick={this.join}
          >
            Join Trip
          </button>}

        <div  className="card my-5 py-5 d-flex align-items-center">
        
        {this.state.isOWner && (
          <div>
            
            <h2>waiting passengers</h2>
            {this.state.trip.waitingPassengers.length ? (
              <div>
                <Card.Group>
                  {this.state.trip.waitingPassengers.map(passenger => {
                    return (
                      <PassengerCard
                        passengers={passenger}
                        addPassengers={this.addpassenger}
                        deletepassenger={this.deleteWaitingPassenger}
                        waitinge={ true }
                      />
                    );
                  })}
                </Card.Group>
              </div>
            ) : (
              <p>no witing passengers yet!</p>
            )}
            <br />
            <h2>Conformed passengers</h2>
            {this.state.trip.Passengers.length ? (
              <Card.Group>
                {this.state.trip.Passengers.map(passenger => {
                  return (
                    <PassengerCard
                      passengers={passenger}
                      addPassengers={this.addpassenger}
                      deletepassenger={this.deletepassenger}
                      waiting={false}
                    />
                  );
                })}
              </Card.Group>
            ) : (
               <p>no passengers conformed yet</p>
            )}
           
          </div>
        )
        }
        </div>
      </div>
    );
  }
}

export default withRouter(TripIndex);
