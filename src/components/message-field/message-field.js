import { Input, InputAdornment, withStyles } from "@material-ui/core"
import { Send } from "@material-ui/icons"
import React from "react"
import { Message } from "../message/message"
import styles from "./message-field.module.css"

const StyledInput = withStyles(() => ({
  root: {
    "&": {
      color: "#9a9fa1",
      padding: "10px 15px",
      fontSize: "15px",
    },
  },
}))(Input)

export class MessageField extends React.Component {
  state = {
    value: "",
    messages: [
      {
        author: "User",
        value: "Привет!",
        date: new Date(),
      },
    ],
  }

  //_ это пропсы
  componentDidUpdate(_, state) {
    const { messages } = this.state

    const lastMessage = messages[messages.length - 1]

    if (lastMessage.author === "User" && state.messages !== messages) {
      setTimeout(() => {
        this.setState({
          messages: [
            ...messages,
            { author: "Bot", value: "Хорошо", date: new Date() },
          ],
        })
      }, 1000)
    }
  }

  sendMessage = ({ author, value }) => {
    const { messages } = this.state

    this.setState({
      messages: [...messages, { author, value, date: new Date() }],
      value: "",
    })
  }

  handleChandeInput = ({ target }) => {
    this.setState({
      value: target.value,
    })
  }

  handlePressInput = ({ code }) => {
    const { value } = this.state

    if (code === "Enter") {
      this.sendMessage({ author: "User", value })
    }
  }

  render() {
    const { messages, value } = this.state

    return (
      <div>
        {messages.map((message, index) => (
          <Message message={message} key={index} />
        ))}
        <StyledInput
          onKeyPress={this.handlePressInput}
          onChange={this.handleChandeInput}
          value={value}
          placeholder="Введите сообщение"
          fullWidth={true}
          endAdornment={
            <InputAdornment position="end">
              {value && (
                <Send
                  className={styles.icon}
                  onClick={() => this.sendMessage({ author: "User", value })}
                />
              )}
            </InputAdornment>
          }
        />
      </div>
    )
  }
}
