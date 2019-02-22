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
        this.handleUpdateProduct = this.handleUpdateProduct.bind(this)
        this.handleDeleteProduct = this.handleDeleteProduct.bind(this)
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

    handleUpdateProduct() {
        const product = { name: this.state.name, description: this.state.description }
        this.props.updateProduct(product)
    }

    handleDeleteProduct() {
        this.props.deleteProduct(this.state.name)
    }

    clearForm() {
        this.setState({name: '', description: ''})
    }

    render() {
        return <form onSubmit={this.handleAddProduct}>
            <label>
                Name:
                <input type='text' value={this.state.name} onChange={this.handleNameChange} />
            </label>
            <label>
                Description:
                <input type='text' value={this.state.description} onChange={this.handleDescriptionChange} />
            </label>
            <input type='submit' value='Submit'/>
            <button type='button' onClick={this.handleUpdateProduct}>Update</button>
            <button type='button' onClick={this.handleDeleteProduct}>Delete</button>
            {this.props.error && <div>{this.props.error}</div>}
        </form>
    }
}
