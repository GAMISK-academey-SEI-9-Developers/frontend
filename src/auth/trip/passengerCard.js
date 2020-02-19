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
  const Decline = "Decline"
  const Abort ="Abort"
  const valu=this.props.waiting
  console.log(valu)
return (
  <React.Fragment>
   {this.props.passengers &&
  <Card className=" mt-5" >
   
    <Card.Content>
      <Image
        floated='right'
        size='mini'
        src='https://react.semantic-ui.com/images/avatar/large/steve.jpg'
      />
      <Card.Header>{this.props.passengers.email.substring(0,this.props.passengers.email.indexOf("@"))}</Card.Header>
      <Card.Meta>Friends of Elliot</Card.Meta>
      <Card.Description>
      {`${this.props.passengers.email.substring(0,this.props.passengers.email.indexOf("@"))} want to travel with you` } <strong>best friends</strong>
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <div className='ui two buttons'>
        {(this.props.waitinge)?<Button basic color='green' onClick={()=>this.props.addPassengers(this.props.passengers._id)}>
          Approve
        </Button>:null}
        <Button basic color='red' onClick={()=>this.props.deletepassenger(this.props.passengers._id)}>
          {(this.props.waiting)? Decline : Abort }
        </Button>
      </div>
    </Card.Content>
   
  </Card>
  }
  </React.Fragment>
)}

}

export default PassengerCard