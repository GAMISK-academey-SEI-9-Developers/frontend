import React, { Component } from 'react';
import { create } from "./api";
import {withRouter} from 'react-router-dom'

class CreateTrip extends Component {
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
         const car =this.state.car
         const user =this.props.user

         create(this.state.trip,user)
         .then(() => alert('created'))
         .then(() => this.props.history.push('/trips'))
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
                <form onSubmit={this.handleSubmit}>
                    <button type="submit">save</button><br></br>
                    <label className='date' >Date :</label>
                    <br/>
                    <label className='date' >Day :</label>
                    <input
                    type="number"
                    name="day"
                    value={this.state.enternedDate.day}
                    onChange={this.handleChangeDate} />
                    <br></br>
                    
                    <label >month :</label>
                    <input
                    type="number"
                    name="month"
                    value={this.state.enternedDate.month}
                    onChange={this.handleChangeDate} />
                    <br></br>
                    <label >year :</label>
                    <input
                    type="number"
                    name="year"
                    value={this.state.enternedDate.year}
                    onChange={this.handleChangeDate} />
                    <br></br>
                    <label >from:</label>
                    <input
                    type="text"
                    name="Depature"
                    value={this.state.trip.Depature}
                    onChange={this.handleChange} />
                    <br></br>

                    <label >to:</label>
                    <input
                    type="text"
                    name="Destenation"
                    value={this.state.trip.Destenation}
                    onChange={this.handleChange} />
                    <br></br>

                    <label >available Seats:</label>
                    <input
                    type="text"
                    name="seets"
                    value={this.state.trip.abailable_seates}
                    onChange={this.handleChange} />

                    
                    
                </form>

            </div>
         );
    }
}
 
export default withRouter(CreateTrip) ;