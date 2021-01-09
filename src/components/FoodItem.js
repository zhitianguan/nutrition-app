import React from "react";
import { Grid, Button, IconButton, makeStyles, Typography,Card, CardMedia, CardActionArea, CardContent} from "@material-ui/core";
import AddCircleSharp from '@material-ui/icons/AddCircleSharp';

export default ({food, addFood}) => {


  const useStyles = makeStyles({
    details: {
      width: "50%"
    },
    icon: {
      verticalAlign:"middle",
      color: "green",
      marginBottom: "0",
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
                      <AddCircleSharp/>
          </IconButton>
         
        
        
      
    </Card>
  </Grid>


    
  );
}


/*<IconButton edge="end" aria-label="delete" onClick={() => addFood(food)}>
            <AddCircleSharp className={classes.icon}/>
        </IconButton>*/





/*  
<Grid item>
                  <Card>
                      <CardMedia 
                        className={classes.media}
                        image={selectedPodcast.artworkUrl600}
                        title={selectedPodcast.collectionName}
                      />
                  </Card>
            </Grid>


            <Grid item container  xs={4} justify="center" direction ='column'>
                <Grid item>
                  <Typography variant="h4">
                    {selectedPodcast.collectionName}
                  </Typography>
                </Grid>
                <Grid item style={{ marginTop: "15px" }}>
                  <Typography variant="subtitle1">
                    by {selectedPodcast.artistName}
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="subtitle1">
                    Genre: {selectedPodcast.primaryGenreName}
                  </Typography>
                </Grid>
                <Grid item>
                  <FormControlLabel 
                    control={<Switch checked={subscribed} onChange = {()=>{toggleSubscription(!subscribed, selectedPodcast)}}/>} 
                    label="Subscribe" 
                    style={{ marginTop: "15px" }}
                  />
                </Grid>
            </Grid>
            <Grid item xs={12} style={{margin:"-10px"}}>
            </Grid>     */