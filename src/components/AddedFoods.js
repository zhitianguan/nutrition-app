import React from "react";
import { Grid, makeStyles, List, Divider, Typography,Card, CardContent} from "@material-ui/core";
import AddedFoodItem from './AddedFoodItem';

export default ({addedFoods, removeFood}) => {
    const useStyles = makeStyles({
        list: {
            width: '40vw',
        },
    });
    const classes = useStyles();

    
    if (addedFoods.length<1) {
      return (
        <Card style={{height: "55vh"}}>
          <CardContent>   
            <Typography variant="h5">
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
      <Card style={{height: "55vh"}}>
          <CardContent>   
            <Typography variant="h5" style={{marginBottom:"10px"}}>
              Your Foods
            </Typography>

          <Grid container style={{justifyContent:"center", maxHeight: '100%', overflow: 'auto'}} spacing={3}>
            <List>
                {listOfAddedFoods}
            </List>
          </Grid>
          </CardContent>
      </Card>


    
  );
}