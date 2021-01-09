import React from "react";
import {ListItemSecondaryAction, IconButton, makeStyles, ListItem, ListItemText} from "@material-ui/core";
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';

export default ({food, addFood, key,removeFood}) => {
  return (
      <>
    <ListItem style={{width:"30vw"}}>
    <ListItemText primary={food.name} secondary={`${food.calories} calories`} />
                <ListItemSecondaryAction>
                    <IconButton edge="end" aria-label="delete" onClick={()=>{removeFood(key)}}>
                      <RemoveCircleIcon style={{color:"red"}}/>
                    </IconButton>
                  </ListItemSecondaryAction>
              </ListItem>
      </>
  );
}