import React from 'react'
import { Button, Card, Image } from 'semantic-ui-react'

class PassengerCard extends React.Component{ 
state={}
addpassenger=()=>{
  const pass =this.props.passengers
  console.log(this.props.passengers)
  this.props.addPassengers(pass._id)       
}

deletepassenger =()=>{
const pass =this.props.passengers
this.props.deletePassenger(this.props.user,this.props.trip._id,pass._id)
let trip = {...this.state.trip}
trip.Passengers.filter(passenger=>{return(passenger._id==pass._id)})
this.setState({trip})
}

render(){
  console.log(this.props.passengers)
return (
  
  <Card className=" mt-5">
    <Card.Content>
      <Image
        floated='right'
        size='mini'
        src='https://react.semantic-ui.com/images/avatar/large/steve.jpg'
      />
      <Card.Header>{this.props.passengers.email}</Card.Header>
      <Card.Meta>Friends of Elliot</Card.Meta>
      <Card.Description>
      {`${this.props.passengers.email} want to travel with you` } <strong>best friends</strong>
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <div className='ui two buttons'>
        {(this.props.waiting)&&<Button basic color='green' onClick={()=>this.props.addPassengers(this.props.passengers._id)}>
          Approve
        </Button>}
        <Button basic color='red' onClick={()=>this.props.deletepassenger(this.props.passengers._id)}>
          {(this.props.waiting)?"Decline":"Abord "}
        </Button>
      </div>
    </Card.Content>
  </Card>
  
)}

}

export default PassengerCard