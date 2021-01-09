import React from 'react'
import SearchBar from "material-ui-search-bar";
import {Divider, List} from '@material-ui/core';
import Suggestion from './Suggestion';
import FoodList from './FoodList'
import axios from 'axios'

class SearchBarWrapper extends React.Component {
    constructor (props){
        super(props)
        this.state = {
            searchTerm: '',
            suggestions: [], 
            typing: false
        }
    }

    handleChange = (newValue) => {
        this.setState({
            searchTerm: newValue,
            typing: this.state.searchTerm!==''
        })
        
        this.autocompleteFood (newValue)
    }

    handleSubmit = () => {
        const {searchTerm} = this.state
        const {onFormSubmit} = this.props
        this.setState ({
            typing: false
          })
        onFormSubmit (searchTerm)
    }

    autocompleteFood = async (term) => {
        if (term.length>0){
          const id = "a8ca87da"
          const key = "234285a1a06cedc063e96ce6c802fb9e"
          axios.get(`https://api.edamam.com/auto-complete?q=${term}&limit=5&app_id=${id}&app_key=${key}`)
            .then(res=>{
                this.setState ({
                    suggestions: res.data
                    })
            })
            .catch(err=>{
                console.log('autocorrect error')
            })
        }
      }

    onSuggestionClick = (newValue) => {
        newValue= newValue.toString().replace(/[^a-zA-Z0-9]/g, ' ');
        this.setState({
            searchTerm: newValue,
            suggestions: []
        })
        const {onFormSubmit} = this.props
        this.setState ({
            typing: false
        })
        onFormSubmit (newValue)
    }    

    render () {
        const {suggestions, searchTerm, typing} = this.state
        const {food, addFood} = this.props

        const options = typing?suggestions.map((suggestion, index) => {
            return (
              <>
                    <Suggestion
                        suggestion={suggestion}
                        onSuggestionClick={this.onSuggestionClick}
                    />
                    {(index!==suggestions.length-1)&&<Divider/>}
              </>
            )
        }):null
        return (
            <>
            <SearchBar
                value={this.state.searchTerm}
                onChange={this.handleChange}
                onRequestSearch={this.handleSubmit}
                onCancelSearch={()=>{
                    this.setState({
                        searchTerm: ''
                    })
                }}
            />
            <List>
                {options}
            </List>
            <FoodList food={food} addFood={addFood} typing={typing} searchTerm={searchTerm}/>
            </>
            
            )
        }
    }
    
    export default SearchBarWrapper
    