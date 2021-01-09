import React from 'react';
import { Grid, Divider} from '@material-ui/core';

import FoodItem from './FoodItem';

export default ({ food, typing, addFood, searchTerm }) => {

	if (searchTerm === '') {
		return (
			<h2>
				Type out a food item to add!
			</h2>
		);
	}
	else if (food === undefined || typing){
		return null
	}
	else if (food.length < 1) {
		return (
				<h2>
					Couldn't find a food item with that name
				</h2>
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
