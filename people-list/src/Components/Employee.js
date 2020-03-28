import React, { Component } from "react";
import data from "./data.json";

class List extends Component {
  render() {
    const items = data.map(item => {
      return (
        <ListComponents
          name={item.name}
          title={item.title}
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
      <ul>
        <li>{this.props.name}</li>
        <li>{this.props.title}</li>
        <SocialLinksList
          email={this.props.social.email}
          phone={this.props.social.phone}
          website={this.props.social.website}
        />
      </ul>
    );
  }
}

class SocialLinksList extends Component {
  render() {
    return (
      <ul>
        <li>{this.props.email}</li>
        <li>{this.props.phone}</li>
        <li>{this.props.website}</li>
      </ul>
    );
  }
}

export default List;
