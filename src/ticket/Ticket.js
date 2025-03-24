import React, { Component } from 'react'
import "./Ticket.css"
export default class Ticket extends Component {
    constructor(props){
        super(props)

        this.state={
            countries:['iran','turkey','italy','france'],
            iran:['yazd','tehran','tabriz','shiraz'],
            turkey:['izmir','ankara','antalya','istanbul'],
            italy:['rome','turin','milan','parma'],
            france:['paris','lyon','nice','nantes'],
            showoptions:null
        }

    }
    selectHandler(event){
        
        // console.log(this.state[event.target.value]);
        
        this.setState({
            showoptions:this.state[event.target.value]
        })
        
    }
  render() {
    return (
      <div className='ticket-container'>
        <div className='ticket-box-container'>
            <input className='inputs just top' placeholder='fristname'></input>
            <input className='inputs just top' placeholder='lastname'></input>
            <input className='inputs just' placeholder='phone number'></input>
            <input className='inputs just' placeholder='email'></input>

            <select  className='inputs ' onChange={this.selectHandler.bind(this)}>
                <option>please select...</option>
            {this.state.countries.map(country=>{
               return <option>{country}</option>
            })}
            </select>
            <select className='inputs '>
              {this.state.showoptions? this.state.showoptions.map(city=>{
                    return <option>{city}</option>
                }):<option>please select a country</option>}
            </select>
     
        </div>
        <button>book a ticket</button>
      </div>
    )
  }
}
