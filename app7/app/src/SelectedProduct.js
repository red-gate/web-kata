import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

class SelectedProduct extends Component {
  render() {
    return <div>current selected product is: {this.props.product}</div>
  }
}

const mapStateToProps = (state, ownProps) => ({
  product: ownProps.match.params.productName,
  version: state.versions.version,
})

const mapDispatchToProps = dispatch => bindActionCreators({
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(SelectedProduct)