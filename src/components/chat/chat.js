import React from "react"

export class Chat extends React.Component {
  //сделать PropTypes
  render() {
    const { title, handleListItemClick, selected } = this.props

    //handleListItemClick для <ListItem onClick={this.handleListItemClick} selected>

    return <div>{title}</div>
  }
}
