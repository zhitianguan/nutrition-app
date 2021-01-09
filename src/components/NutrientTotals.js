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

  if (addedFoods.length >= 1){
    totalCal=addedFoods.reduce((totalCal, food)=>{ return totalCal + food.calories},0)
    totalProtein=addedFoods.reduce((totalProtein, food)=>{return totalProtein + (('PROCNT' in food.totalNutrients)?food.totalNutrients.PROCNT.quantity:0)},0)  
    totalCarbs=addedFoods.reduce((totalCarbs, food)=>{return totalCarbs + (('CHOCDF' in food.totalNutrients)?food.totalNutrients.CHOCDF.quantity:0)},0)
    totalFats=addedFoods.reduce((totalFats, food)=>{return totalFats + (('FAT' in food.totalNutrients)?food.totalNutrients.FAT.quantity:0)},0)
    totalSaturated=addedFoods.reduce((totalSaturated, food)=>{return totalSaturated + (('FASAT' in food.totalNutrients)?food.totalNutrients.FASAT.quantity:0)},0)
    totalChole=addedFoods.reduce((totalChole, food)=>{return totalChole + (('CHOLE' in food.totalNutrients)?food.totalNutrients.CHOLE.quantity:0)},0)
    totalSodium=addedFoods.reduce((totalSodium, food)=>{return totalSodium + (('NA' in food.totalNutrients)?food.totalNutrients.NA.quantity:0)},0)
    totalFibre=addedFoods.reduce((totalFibre, food)=>{return totalFibre + (('FIBTG' in food.totalNutrients)?food.totalNutrients.FIBTG.quantity:0)},0)
  }

  return (
      <Card style={{backgroundColor: "#DEFDE0"}}>
          <CardContent>   
            <Typography variant="subtitle1" noWrap>
              Totals
            </Typography>

          <Grid container style={{justifyContent:"left"}} spacing={1}>
            <Grid item xs={3}> 
              <Typography variant="subtitle2">
                Calories: 
              </Typography>
              <Typography variant="subtitle1">
                {+totalCal.toFixed(3)}
              </Typography>
            </Grid>
            <Grid item xs={3}> 
              <Typography variant="subtitle2">
                Protein (g): 
              </Typography>
              <Typography variant="subtitle1">
                {+totalProtein.toFixed(3)}
              </Typography>
            </Grid>
            <Grid item xs={3}> 
              <Typography variant="subtitle2">
                Carbohydrates (g): 
              </Typography>
              <Typography variant="subtitle1">
                {+totalCarbs.toFixed(3)}
              </Typography>
            </Grid>
            <Grid item xs={3}> 
              <Typography variant="subtitle2">
                Cholestrol (mg): 
              </Typography>
              <Typography variant="subtitle1">
                {+totalChole.toFixed(3)}
              </Typography>
            </Grid>
            <Grid item xs={3}> 
              <Typography variant="subtitle2">
                Fats (g): 
              </Typography>
              <Typography variant="subtitle1">
                {+totalFats.toFixed(3)}
              </Typography>
            </Grid>
            <Grid item xs={3}> 
              <Typography variant="subtitle2">
                Saturated Fats (g): 
              </Typography>
              <Typography variant="subtitle1">
                {+totalSaturated.toFixed(3)}
              </Typography>
            </Grid>
            <Grid item xs={3}> 
              <Typography variant="subtitle2">
                Sodium (mg): 
              </Typography>
              <Typography variant="subtitle1">
                {+totalSodium.toFixed(3)}
              </Typography>
            </Grid>
            <Grid item xs={3}> 
              <Typography variant="subtitle2">
                Fibers (g): 
              </Typography>
              <Typography variant="subtitle1">
                {+totalFibre.toFixed(3)}
              </Typography>
            </Grid>
          </Grid>
          </CardContent>
      </Card>
    
  );
}