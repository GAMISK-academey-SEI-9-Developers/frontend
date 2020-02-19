import React, { Component } from 'react';
import { update } from "./api";
import {withRouter} from 'react-router-dom'
import {
    Button,
    Checkbox,
    Form,
    Input,
    Radio,
    Select,
    TextArea,
  } from 'semantic-ui-react'
class EditTrip extends Component {
    state = { 
        trip:{
            date:"",
               Destenation:"",
               Depature:"",
               abailable_seates:2
               
           },

           enternedDate:{
            day:0,
            month:0,
            year:0,
           }

     }

     handleSubmit=event=>{
         event.preventDefault()
         
         const user =this.props.user

         update(this.state.trip,this.state.trip._id,user)
         .then(() => alert('updated'))
         .then(() => this.props.history.push(`/trips/${this.state.trip._id}`))
        .catch(err=>console.error(err))
     }


     handleChangeDate = event => {
        const {name, value} = event.target
        const copyState = {...this.state}
        copyState.enternedDate[name] = value
        copyState.trip.date = `${ copyState.enternedDate.day}/${copyState.enternedDate.month}/${copyState.enternedDate.year}`
        this.setState(copyState)

    }

     handleChange = event => {
        const {name, value} = event.target
        const copyState = {...this.state}
        copyState.trip[name] = value
        this.setState(copyState)
    }




    render() { 
        return ( 
            <div>
                {
                <Form>
        <Form.Group widths='equal'>
        <label>Date</label>
          <Form.Field
          value={this.state.enternedDate.day}
          onChange={this.handleChangeDate}
            control={Input}
            label='Day'
            name='day'
            type='date'
            placeholder='e.g. 01'
          />
          <label>Quantity</label>
          <Form.Field
          value={this.state.trip.Depature}
          onChange={this.handleChange}
            control={Input}
            label='From'
            name='Depature'
            placeholder='e.g. Makkah'
          />
         <Form.Field
          value={this.state.trip.Destination}
          onChange={this.handleChange}
            control={Input}
            label='To'
            placeholder='e.g. Makkah'
            name='Destination'
          />
           <Form.Field
          value={this.state.trip.abailable_seates}
          onChange={this.handleChange}
            control={Input}
            label='available Seats:'
            placeholder='e.g. 2'
            name='abailable_seates'
          />

        </Form.Group>

        </Form>
    }</div>
         );
    }
}
 
export default withRouter(EditTrip) ;