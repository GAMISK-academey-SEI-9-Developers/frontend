import React from 'react'
import { Icon, Image, Statistic } from 'semantic-ui-react'


class  TripInfo extends React.Component{
    state={}
    render(){
    const trip =this.props.trip

    return(
    <Statistic.Group widths='four'>
    <Statistic>
    <Statistic.Label>From</Statistic.Label>
      <Statistic.Value text>{trip.Depature}</Statistic.Value>
      
    </Statistic>

    <Statistic>
    <Statistic.Label>To</Statistic.Label>
      <Statistic.Value text>
     {trip.Destenation}
      </Statistic.Value>
     
    </Statistic>

    <Statistic>
      <Statistic.Value>
        <Icon name='car' />{trip.abailable_seates}
      </Statistic.Value>
      <Statistic.Label>Seats</Statistic.Label>
    </Statistic>
    <Statistic>
    <Statistic.Label>Driver</Statistic.Label>
      <Statistic.Value text>
       abdullah
      </Statistic.Value>
     
    </Statistic>
  </Statistic.Group>)
}}
export default TripInfo