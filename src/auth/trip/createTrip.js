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
            <div className="container" >
                <div className="card d-flex align-items-center " style={{}}>
                <form onSubmit={this.handleSubmit}>
                    
                    <label className='date' >Date :</label>
                    <br/>
                    
                    <input
                    type="date"
                    name="date"
                    value={this.state.trip.date}
                    onChange={this.handleChange} />
                    <br></br>

                    <br></br>
                    <label >from:</label><br/>
                    <input
                    type="text"
                    name="Depature"
                    value={this.state.trip.Depature}
                    onChange={this.handleChange} />
                    <br></br>

                    <label >to:</label><br/>
                    <input
                    type="text"
                    name="Destenation"
                    value={this.state.trip.Destenation}
                    onChange={this.handleChange} />
                    <br></br>

                    <label >available Seats:</label><br/>
                    <input
                    type="number"
                    name="abailable_seates"
                    value={this.state.trip.abailable_seates}
                    onChange={this.handleChange} />
                    <br></br>
                    <button className="btn btn-success" type="submit">save</button><br></br>
                    
                    
                </form>
                </div>
            </div>
         );
    }
}
 
export default withRouter(CreateTrip) ;