import React, { Component } from 'react';
import { create } from "./api";
import {withRouter} from 'react-router-dom'
import "./car.css";
class CarCreate extends Component {
    state = { 
        car:{ 
            model:"",
            year:'',
            color:'',
            seets:0,

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
            <div className="card d-flex align-items-center back-card " >
                
                <div className="card col-md-6  col-sm-12  d-flex align-items-center back-card-child ">
                
                <form onSubmit={this.handleSubmit}>
                <h3>Car information</h3>
                    <label >Car Model :</label><br></br>
                    <input
                    type="text"
                    name="model"
                    value={this.state.car.model}
                    onChange={this.handleChange} />
                    <br></br>

                    <label >Car Year :</label><br></br>
                    <input
                    type="number"
                    name="year"
                    value={this.state.car.year}
                    onChange={this.handleChange} />
                    <br></br>

                    <label >Car Color :</label><br></br>
                    <input
                    type="text"
                    name="color"
                    value={this.state.car.color}
                    onChange={this.handleChange} />
                    <br></br>

                    <label >Car Seets :</label><br></br>
                    <input
                    type="number"
                    name="seets"
                    value={this.state.car.seets}
                    onChange={this.handleChange} />

                    <br></br>
<button type="submit" className="btn btn-primary mt-2 btn-green">save</button><br></br>
                    
                </form>
            </div>
            </div>
         );
    }
}
 
export default withRouter(CarCreate) ;