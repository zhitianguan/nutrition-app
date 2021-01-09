import React from "react";
import {Typography, ListItemSecondaryAction, IconButton, makeStyles, ListItem, ListItemText} from "@material-ui/core";
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';

export default ({food, addFood, key,removeFood}) => {
  return (
      <>
    <ListItem style={{width:"30vw"}}>
            <Typography  variant="h5">
              {key}
            </Typography>
    <ListItemText primary={food.name} secondary={`${food.calories} calories`} />
                <ListItemSecondaryAction>
                    <IconButton edge="end" aria-label="delete" onClick={()=>{removeFood(key)}}>
                      <RemoveCircleIcon/>
                    </IconButton>
                  </ListItemSecondaryAction>
              </ListItem>
      </>
  );
}
/*  <Grid item xs={12}>
    <Card className={classes.root}>
          <CardContent className={classes.details}>
              <Typography gutterBottom variant="h5" component="h2">
              {food.food_name}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
              {`${food.serving_qty} ${food.serving_unit}, ${food.nf_calories} calories`}
              </Typography>
          </CardContent>
    </Card>
  </Grid>     */