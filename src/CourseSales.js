import React, { Component } from "react";
class CourseSales extends Component {
  sumPrice(price) {
    this.setState({ total: price + this.state.total });
  }
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
    };
    this.sumPrice = this.sumPrice.bind(this);
  }
  render() {
    var courses = this.props.items.map((item, i) => {
      return (
        <Course
          name={item.name}
          price={item.price}
          key={i}
          sumPrice={this.sumPrice}
          active={item.active}
        />
      );
    });
    return (
      <div>
        <h1>You can buy courses :</h1>
        <div id="courses">{courses}</div>
        <p id="total">
          Total: <b>{this.state.total}</b>
        </p>
      </div>
    );
  }
}
class Course extends Component {
  state = {};
  render() {
    return <div></div>;
  }
}

export default CourseSales;
