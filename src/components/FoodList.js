import React from 'react';
import { Grid, Typography} from '@material-ui/core';

import FoodItem from './FoodItem';

export default ({ food, typing, addFood, searchTerm }) => {

	if (searchTerm === '') {
		return (
            <Typography variant="subtitle1">
				<span role="img">👆</span> Type out a food item to add! 
			</Typography>
		);
	}
	else if (food === undefined || typing){
		return null
	}
	else if (food.length < 1) {
		return (
            <Typography variant="subtitle1">
				Couldn't find a food item with that name
			</Typography>
		);
    }

	return (
		<Grid item container 
			style={{justifyContent:'center',maxWidth:"750px"}}
			spacing={1}
		>
				<FoodItem
                addFood={addFood}
                key={food.id}
                food={food}
            />
			
		</Grid>
	
	);
};
