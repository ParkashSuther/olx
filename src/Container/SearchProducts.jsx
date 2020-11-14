import React, { Component } from 'react';
import { connect } from 'react-redux';

class SearchProducts extends Component {
  render() {
    const {filterProducts} = this.props;

    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>Nome</th>
          </tr>
        </thead>
        <tbody>{filterProducts.map((filterProducts) => <tr key={filterProducts}><td>{filterProducts}</td></tr>)}</tbody>
      </table>
    );
  }
}

function mapStateToProps({filterProducts},state) {
  return {
    filterProducts: state.filterProducts
  }
}

export default connect(mapStateToProps)(SearchProducts);