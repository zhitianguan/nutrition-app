import React from "react";
import { Grid, Typography,Card, CardContent} from "@material-ui/core";

export default ({addedFoods}) => {
  let totalCal = 0
  let totalProtein = 0
  let totalCarbs = 0
  let totalFats = 0
  let totalSaturated = 0
  let totalChole = 0
  let totalSodium = 0
  let totalFibre = 0

  console.log(addedFoods)
  if (addedFoods.length >= 1){
    totalCal=addedFoods.reduce((totalCal, food)=>{ return totalCal + food.calories},0)
    totalProtein=addedFoods.reduce((totalProtein, food)=>{
      return totalProtein + (('PROCNT' in food.totalNutrients)?food.totalNutrients.PROCNT.quantity:0)
    },0)  
    totalCarbs=addedFoods.reduce((totalCarbs, food)=>{return totalCarbs + (('CHOCDF' in food.totalNutrients)?food.totalNutrients.CHOCDF.quantity:0)},0)
    totalFats=addedFoods.reduce((totalFats, food)=>{return totalFats + (('FAT' in food.totalNutrients)?food.totalNutrients.FAT.quantity:0)},0)
    totalSaturated=addedFoods.reduce((totalSaturated, food)=>{return totalSaturated + (('FASAT' in food.totalNutrients)?food.totalNutrients.FASAT.quantity:0)},0)
    totalChole=addedFoods.reduce((totalChole, food)=>{return totalChole + (('CHOLE' in food.totalNutrients)?food.totalNutrients.CHOLE.quantity:0)},0)
    totalSodium=addedFoods.reduce((totalSodium, food)=>{return totalSodium + (('NA' in food.totalNutrients)?food.totalNutrients.NA.quantity:0)},0)
    totalFibre=addedFoods.reduce((totalFibre, food)=>{return totalFibre + (('FIBTG' in food.totalNutrients)?food.totalNutrients.FIBTG.quantity:0)},0)
  }

  return (
      <Card style={{backgroundColor: "#B8D8BE"}}>
          <CardContent>   
            <Typography variant="h5" noWrap>
              Totals
            </Typography>

          <Grid container style={{justifyContent:"left"}} spacing={2}>
            <Grid item xs={3}> 
              <Typography variant="subtitle1">
                Calories: 
              </Typography>
              <Typography variant="h5">
                {+totalCal.toFixed(3)}
              </Typography>
            </Grid>
            <Grid item xs={3}> 
              <Typography variant="subtitle1">
                Protein (g): 
              </Typography>
              <Typography variant="h5">
                {+totalProtein.toFixed(3)}
              </Typography>
            </Grid>
            <Grid item xs={3}> 
              <Typography variant="subtitle1">
                Carbohydrates (g): 
              </Typography>
              <Typography variant="h5">
                {+totalCarbs.toFixed(3)}
              </Typography>
            </Grid>
            <Grid item xs={3}> 
              <Typography variant="subtitle1">
                Cholestrol (mg): 
              </Typography>
              <Typography variant="h5">
                {+totalChole.toFixed(3)}
              </Typography>
            </Grid>
            <Grid item xs={3}> 
              <Typography variant="subtitle1">
                Fats (g): 
              </Typography>
              <Typography variant="h5">
                {+totalFats.toFixed(3)}
              </Typography>
            </Grid>
            <Grid item xs={3}> 
              <Typography variant="subtitle1">
                Saturated Fats (g): 
              </Typography>
              <Typography variant="h5">
                {+totalSaturated.toFixed(3)}
              </Typography>
            </Grid>
            <Grid item xs={3}> 
              <Typography variant="subtitle1">
                Sodium (mg): 
              </Typography>
              <Typography variant="h5">
                {+totalSodium.toFixed(3)}
              </Typography>
            </Grid>
            <Grid item xs={3}> 
              <Typography variant="subtitle1">
                Fibers (g): 
              </Typography>
              <Typography variant="h5">
                {+totalFibre.toFixed(3)}
              </Typography>
            </Grid>
          </Grid>
          </CardContent>
      </Card>


    
  );
}
/*
import React from 'react';
import './App.css';
import {Grid, Tabs, Tab, AppBar, Toolbar} from '@material-ui/core'
import { DOMParser } from "xmldom"
import SearchBar from './components/SearchBar'
import NutrientTotals from './components/NutrientTotals'
import FoodList from './components/FoodList'
import AddedFoods from './components/AddedFoods'
import axios from 'axios'



class App extends React.Component {
  constructor (props) {
    super (props)
    this.state = {
      foods: undefined,
      addedFoods: [],
      //suggestedFoods: [],
    }
  }

  searchFood = async (term) => {
    //term = term.toString().replace(/[^a-zA-Z0-9]/g, ' ');
    term = 'egg'
    const key = 'OLfvWsWXPyiO99SWm2axG0tH2v1kvtyTFqDrdYeJ'
    const url = `https://api.nal.usda.gov/fdc/v1/foods/search?api_key=${key}&query=${term}`

    let result = await (axios.get(url))

    let foods = result.data.foods.filter((food, i, arr)=>{
        return (i===0)||(food.description !==arr[i-1].description)
    })
    console.log(foods.length)
    console.log(foods)
    
    let foodIds = foods[0].fdcId
    for (let i=1; i<5; i++){
      foodIds+="%2C"+(foods[i].fdcId)
    }
    
    console.log(foodIds)
    
    const result2 = await (axios.get(`https://api.nal.usda.gov/fdc/v1/foods?api_key=${key}&fdcIds=${foodIds}`))

    //const result2 = await (axios.get(`https://api.nal.usda.gov/fdc/v1/foods?fdcIds=534358%2C373052?api_key=${key}`))
    console.log(result2)
    
    /*this.setState({
        foods: foods,
    })*/
//811950

    /*const url = `https://itunes.apple.com/search?term=${term}&entity=podcast`
    const cors = 'https://cors-anywhere.herokuapp.com/'

    const result = await fetch(cors+url)
    const items = await result.json()
    this.setState({
      podcasts: items.results,
      tracks: undefined
    })*//*
    
  }  

  setSelectedPodcast = async (podcast) => {
    const id = podcast.trackId
    const cors = 'https://cors-anywhere.herokuapp.com/'

    const result1 = await fetch(cors+`https://itunes.apple.com/lookup?id=${id}&entity=podcast`)
    const items1 = await result1.json()
    const result2 = await fetch(cors+items1.results[0].feedUrl)
    const text = await result2.text()

    const podcastDocument = new DOMParser().parseFromString(
      text,
      "text/xml",
    )

    const items = podcastDocument.getElementsByTagName("item")

    this.setState({
      selectedPodcast: podcast,
      podcastDocument: podcastDocument,
      tracks: items,
      selectedTab: 1
    })

  }

  setSelectedTrack = async (track) => {
    this.setState({
      selectedTrackUrl: track.getElementsByTagName("enclosure")[0].getAttribute("url")
    })
  }
  
  
  handleTabChange = (event, newValue) => {
    this.setState({
      selectedTab: newValue
    })
  }

  toggleSubscription = (subscribe, podcast) => {
    let newSubs = this.state.subscriptions
    if (subscribe) {
      newSubs.push(podcast)
    } else {
      newSubs = newSubs.filter((pod)=>{
        return (pod.collectionId !== podcast.collectionId)
      })
    }
    this.setState({
      subscriptions: newSubs
    })
    alert(`${(subscribe) ? "Added":"Removed"} "${podcast.collectionName}" ${(subscribe) ? "to":"from"} subscriptions`);
  }

  render () {
    const {foods, addedFoods}=this.state
    
    return (
            <Grid style={{ justifyContent: "center" }} container spacing={0}>
                <Grid item xs={10}>
                    <Grid item container spacing={3} style={{ justifyContent: "center" }}>
                        <Grid item xs={8}style={{ marginTop: "10px" }}>
                            <SearchBar onFormChange={this.searchFood}/>
                        </Grid>
                        <Grid item xs={12}>
                            <AddedFoods addedFoods={addedFoods} removeFood={this.removeFood}/>
                        </Grid>
                        <NutrientTotals addedFoods={addedFoods}/>
                    </Grid>
                </Grid>
            </Grid>
    );
    
  }
}

export default App;*/





















