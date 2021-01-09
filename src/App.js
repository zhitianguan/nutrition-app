import React from 'react';
import './App.css';
import {Grid} from '@material-ui/core'
import Search from './components/Search'
import NutrientTotals from './components/NutrientTotals'
import AddedFoods from './components/AddedFoods'
import axios from 'axios'



class App extends React.Component {
  constructor (props) {
    super (props)
    this.state = {
      food: undefined,
      addedFoods: [],
    }
  }

  searchFood = async (term) => {
    //term = term.toString().replace(/[^a-zA-Z0-9]/g, ' ');

    const id = "a8ca87da"
    const key = "234285a1a06cedc063e96ce6c802fb9e"

    const url2= `https://api.edamam.com/api/food-database/v2/parser?nutrition-type=logging&ingr=${term}&app_id=${id}&app_key=${key}`
    
    let result = await (axios.get(url2))
    console.log(result.data)
    let newFood = []
    console.log(result.data)
    if (result.data.parsed.length !== 0){
      const res = await axios.post (`https://api.edamam.com/api/food-database/v2/nutrients?app_id=${id}&app_key=${key}`, {
        "ingredients": [
          {
            "quantity": 1,
            "measureURI": result.data.parsed[0].measure===undefined?'null':result.data.parsed[0].measure.uri,
            "foodId": result.data.parsed[0].food.foodId
          }
        ]
      })

      newFood = res.data
      newFood.name = result.data.parsed[0].food.label
      newFood.id = result.data.parsed[0].food.foodId
    }

    this.setState({
      food:newFood
    })
  }


  addFood = (food) => {
    let newFoods = this.state.addedFoods;
    newFoods.push(food)
    this.setState({
      addedFoods:newFoods
    })
  } 
  removeFood = (index) => {
    let newFoods = this.state.addedFoods;
    newFoods.splice(index, 1)
    this.setState({
      addedFoods:newFoods
    })
  } 

  render () {
    const {food, addedFoods}=this.state
    
    return (
            <Grid style={{ justifyContent: "center" }} container spacing={0}>
                <Grid item xs={10}>
                    <Grid item container spacing={3} style={{ justifyContent: "center" }}>
                        <Grid item xs={4}style={{ marginTop: "10px" }}>
                            <Search onFormSubmit={this.searchFood} food={food} addFood={this.addFood}/>
                        </Grid>
                        <Grid item xs={8} style={{marginTop:"10px"}}>
                            <AddedFoods addedFoods={addedFoods} removeFood={this.removeFood}/>
                        </Grid>
                    </Grid>
                </Grid>
              <div style ={{position:'fixed', bottom:'0'}}>
                <NutrientTotals style ={{position:'fixed', bottom:'0'}} addedFoods={addedFoods}/>
              </div>
            </Grid>
    );
    
  }
}

export default App;





















