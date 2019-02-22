import React, { Component } from 'react'

export default class ProductForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            description: ''
        }

        this.handleNameChange = this.handleNameChange.bind(this)
        this.handleDescriptionChange = this.handleDescriptionChange.bind(this)
        this.handleAddProduct = this.handleAddProduct.bind(this)
    }

    handleNameChange(event) {
        this.setState({name: event.target.value})
    }

    handleDescriptionChange(event) {
        this.setState({description: event.target.value})
    }

    handleAddProduct(event) {
        event.preventDefault()
        const product = { name: this.state.name, description: this.state.description }
        this.props.addProduct(product)
        this.clearForm()
    }

    clearForm() {
        this.setState({name: '', description: ''})
    }

    render() {
        return (
            <form onSubmit={this.handleAddProduct}>
            <label>
                Name:
                <input type='text' value={this.state.name} onChange={this.handleNameChange} />
            </label>
            <label>
                Description:
                <input type='text' value={this.state.description} onChange={this.handleDescriptionChange} />
            </label>
            <input type='submit' value='Submit' />
            </form>
        )
    }
}