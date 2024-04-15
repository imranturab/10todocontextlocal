import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp() {
    return(
      <div>
        <h1>Custom App || Chai</h1>
      </div>
    )
  }

  
//const reactElement = {
 // type: 'a',
 // props: {
   // href: 'https://google.com',
  //  target: '_blank'
 // },
  //children: 'click me to visit google'
//}

const anotherUser = "chaie aur react"
const anyoneUser = "ALLAH"

const anohterElement = (
  <a href="https://google.com" target='_blank'>Visit
  google</a>

)

const reactElement = React.createElement(
  'a', 
  {href : 'https://google.com', target:'_blank'}, //transpiler of babel inject this code
  'click me to visit google',
  anotherUser,
  anyoneUser
  

)
ReactDOM.createRoot(document.getElementById('root')).render(
  
   reactElement
  
)
