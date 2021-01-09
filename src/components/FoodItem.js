import React from "react";
import { Grid, IconButton, makeStyles, Typography,Card, CardMedia, CardActionArea, CardContent} from "@material-ui/core";
import AddCircleSharp from '@material-ui/icons/AddCircleSharp';

export default ({food, addFood}) => {


  const useStyles = makeStyles({
    details: {
      width: "50%"
    },
    icon: {
      color: "green",
    },
  });
  const classes = useStyles();

  return (
    <Grid item xs={12}>
    <Card style={{display:"flex", justifyContent:"space-between", alignItems: "center"}}>
          <CardContent className={classes.details}>
              <Typography gutterBottom variant="h5" component="h2">
              {food.name}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
              {` ${food.calories} calories`}
              </Typography>
          </CardContent>
          <IconButton aria-label="delete" onClick={()=>{addFood(food)}}>
                      <AddCircleSharp className={classes.icon}/>
          </IconButton>     
    </Card>
  </Grid>


    
  );
}