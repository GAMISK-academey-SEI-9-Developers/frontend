import React, { Component } from 'react';
import { create } from "./api";
import {withRouter} from 'react-router-dom'

class CarCreate extends Component {
    state = { 
        car:{ 
            model:"",
            year:'',
            color:'',
            seets:'',

        }
       

     }

     handleSubmit=event=>{
         event.preventDefault()
         const car =this.state.car
         const user =this.props.user

         create(car,user)
         .then(() => alert('created'))
         .then(() => this.props.history.push('/cars'))
        .catch(err=>console.error(err))
     }

     handleChange = event => {
        const {name, value} = event.target
        const copyState = {...this.state}
        copyState.car[name] = value
        this.setState(copyState)
    }

    render() { 
        return ( 
            <div>
                <form onSubmit={this.handleSubmit}>
                    <button type="submit">save</button><br></br>
                    <label >Car Model :</label>
                    <input
                    type="text"
                    name="model"
                    value={this.state.car.model}
                    onChange={this.handleChange} />
                    <br></br>

                    <label >Car Year :</label>
                    <input
                    type="number"
                    name="year"
                    value={this.state.car.year}
                    onChange={this.handleChange} />
                    <br></br>

                    <label >Car Color :</label>
                    <input
                    type="text"
                    name="color"
                    value={this.state.car.color}
                    onChange={this.handleChange} />
                    <br></br>

                    <label >Car Seets :</label>
                    <input
                    type="text"
                    name="seets"
                    value={this.state.car.seets}
                    onChange={this.handleChange} />

                    
                    
                </form>

            </div>
         );
    }
}
 
export default withRouter(CarCreate) ;