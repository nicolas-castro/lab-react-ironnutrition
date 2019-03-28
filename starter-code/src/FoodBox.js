import React, { Component } from 'react';
import foods from './foods.json'

class FoodBox extends Component {

  state = {foods}

  render() {

    const {foods} = this.state

    return (
      foods.map( (currentFood, index)=>    
          <div className="box" key={index} currentFood={currentFood} index={index} >
            <article className="media">
              <div className="media-left">
                <figure className="image is-64x64">
                  <img src={currentFood.image} />
                </figure>
              </div>
              <div className="media-content">
                <div className="content">
                  <p>
                    <strong>{currentFood.name}</strong> <br />
                    <small>{currentFood.calories} cal</small>
                  </p>
                </div>
              </div>
              <div className="media-right">
                <div className="field has-addons">
                  <div className="control">
                    <input
                      className="input"
                      type="number" 
                      value="1"
                    />
                  </div>
                  <div className="control">
                    <button className="button is-info">
                      +
                    </button>
                  </div>
                </div>
              </div>
            </article>
          </div>
      )
    );
  }

}
export default FoodBox;