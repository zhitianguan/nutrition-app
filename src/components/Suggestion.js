import React from 'react';
import { Grid, ListItem, ListItemText, Divider} from '@material-ui/core';

export default ({ suggestion, onSuggestionClick }) => {

	return (
		<ListItem style={{width:"30vw"}} onClick={()=>onSuggestionClick(suggestion)}>
			<ListItemText primary={suggestion}/>
		</ListItem>
	
	);
};
