/*eslint-disable */
import React, { Component } from 'react'
import axios from 'axios';
import Input from '../Input/Input'

import './Recipe.css'

class Recipe extends Component {
    constructor() {
        super()
        this.state = {
            recipes: [],
            query: ''
        }
    }

    handleInputChange = (e) => {
        this.setState({
            query: e.target.value
        })
        // console.log('test')
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.setState({
            recipes: [],
        })
        this.getInfo()
        this.setState({
            query: '',
        })

        // console.log(e)
    }

    getInfo = () => {
        const APP_ID = process.env.APP_ID;
        const APP_KEY = process.env.REACT_APP_TOKEN;

        axios.get(`https://api.edamam.com/search?q=${this.state.query}&app_id=${APP_ID}&app_key=${APP_KEY}`)
            .then((resp) => {
                console.log(`${this.state.query},${APP_ID},${APP_KEY}`)
                const { data: { hits } } = resp
                return hits.forEach(recipe => {
                    // console.log(recipe)
                    this.setState({ recipes: [...this.state.recipes, recipe.recipe] })
                });
            })
    }
    renderIngredient = (ingredients) => {
        return ingredients.map((ingredient, index) => {
            return <li key={index}>{ingredient.text}</li>
        })
    }

    renderRecipes = () => {
        if (this.state.recipes.length > 0) {
            return this.state.recipes.map(recipe => {
                const { label, dietLabels, calories, image, ingredients, url } = recipe
                return (
                    <div key={url} className="recipe-container">
                        <h2 className="recipe title"><a href={url} target={url}>{label}</a></h2>
                        <div className="calories-diet-container">
                        <p>{dietLabels}</p>
                        <h3 className="calories">Calores: {calories.toFixed(2)}</h3>
                        </div>
                        <img src={image} alt='' />
                        <ul className='ingredients-list'>
                            {this.renderIngredient(ingredients)}
                        </ul>
                    </div>
                )
            })
        }
        else {
            return <h3>Search for Recipes</h3>
        }
    }

    render() {
        return (
            <div>
                <Input onChange={this.handleInputChange} onSubmit={this.handleSubmit} defaultValue={this.state.query} name='query' title='Search' placeholder='Search' />
                <div className="render-recipe-container">
                    {this.renderRecipes()}
                </div>
            </div>
        )
    }
}

export default Recipe