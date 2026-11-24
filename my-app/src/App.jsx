import './App.css'
import Index from './componentas/idex.jsx'
import IndexUseRef from './componentas/indexuseref.jsx'
import { useRef } from 'react'
import TextBox from './componentas/TextBox.jsx'
import CounterHistory from './componentas/CounterHistory.jsx'
import Timer from './componentas/Timer.jsx'
import ClickCounter from './componentas/ClickCounter.jsx'
function App() {
const t=useRef(null)
function hendelClick(){
alert(t.current.value)
}
  return (
    <>
      <Index/>
      <IndexUseRef />
      <TextBox ref={t}/>
      <button onClick={hendelClick}>Show Value</button>
      <CounterHistory/>
      <Timer />
      <ClickCounter />
    </>
  )
}

export default App
