import React, { Component } from "react";
import data from "../data";
import "./employee.css";

class List extends Component {
  render() {
    const items = data.map(item => {
      return (
        <ListComponents
          img={item.image}
          name={item.name}
          title={item.title}
          social={item.contacts}
          date={item.date}
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
        <div className="upperBar">
          <img src={this.props.img} className="img" />
          <div className="sidebar">
            <h1>{this.props.name}</h1>
            <h2>{this.props.title}</h2>
          </div>
        </div>
        <SocialLinksList
          email={this.props.social.email}
          phone={this.props.social.phone}
          website={this.props.social.website}
        />
        <div>
          <MemberPeriod date={this.props.date} />
        </div>
      </div>
    );
  }
}

class SocialLinksList extends Component {
  render() {
    return (
      <ul className="social">
        <li>Emaii: {this.props.email}</li>
        <li> Phone: {this.props.phone}</li>
        <li>Website:{this.props.website}</li>
      </ul>
    );
  }
}

class MemberPeriod extends Component {
  render() {
    return <div className="date">Member since: {this.props.date}</div>;
  }
}

export default List;
