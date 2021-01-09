import React from "react";
import { Grid, List, Divider, Typography,Card, CardContent} from "@material-ui/core";
import AddedFoodItem from './AddedFoodItem';

export default ({addedFoods, removeFood}) => {    
    if (addedFoods.length<1) {
      return (
        <Card style={{height: '60vh'}}>
          <CardContent>   
            <Typography variant="h6">
              Your Foods
            </Typography>

          <Grid container style={{justifyContent:"center", marginTop: "30px"}} spacing={3}>
            <Typography variant="subtitle1" style={{color: "gray"}}>
            You have no added foods
            </Typography>:
          </Grid>
          </CardContent>
      </Card>
      )
    } 
          const listOfAddedFoods = addedFoods.map((food, index) => {
              return (
                <>
                      <AddedFoodItem
                          key={index}
                          food={food}
                          removeFood={removeFood}
                      />
                      {(index===addedFoods.length-1)||<Divider/>}
                </>
              )
          })

  return (
      <Card style={{height: "60vh"}}>
          <CardContent>   
            <Typography variant="h6" style={{marginBottom:"10px"}}>
              Your Foods
            </Typography>

          <Grid container style={{justifyContent:"center", maxHeight: '50vh', overflow: 'auto'}} spacing={3}>
            <List>
                {listOfAddedFoods}
            </List>
          </Grid>
          </CardContent>
      </Card>


    
  );
}