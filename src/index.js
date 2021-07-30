import { ThemeProvider, createTheme } from "@material-ui/core"
import React from "react"
import ReactDom from "react-dom"
import { ChatList, MessageField } from "./components"
// import styles from "/index.module.css"
// import "./index.css"

const App = () => {
  // return <div className={styles.wrapper}> - вариант подключения стиля
  return (
    <div style={{ display: "flex" }}>
      <ChatList />
      <hr />
      <MessageField />
    </div>
  )
}

const theme = createTheme({})

ReactDom.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  document.getElementById("root"),
)
