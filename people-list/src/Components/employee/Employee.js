import React, { Component } from "react";
import data from "../data";
import "./employee.css";

class List extends Component {
  render() {
    const items = data.map(item => {
      return (
        <ListComponents
          name={item.name}
          title={item.title}
          img={item.image}
          social={item.contacts}
        />
      );
    });
    return <div>{items}</div>;
  }
}

class ListComponents extends Component {
  render() {
    return (
      <div className="ulCom">
        <h1>{this.props.name}</h1>
        <h2>{this.props.title}</h2>
        <img src={this.props.img} />
        <SocialLinksList
          email={this.props.social.email}
          phone={this.props.social.phone}
          website={this.props.social.website}
        />
      </div>
    );
  }
}

class SocialLinksList extends Component {
  render() {
    return (
      <ul className="social">
        <li>{this.props.email}</li>
        <li>{this.props.phone}</li>
        <li>{this.props.website}</li>
      </ul>
    );
  }
}

export default List;
