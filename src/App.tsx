import Iframe from 'react-iframe'

import CountdownTimer from './CountdownTimer';

import './App.css'

function App() {
  return (
    <>
      <Iframe className='left_panel' url="https://calendar.google.com/calendar/embed?src=atrlab.kent.public%40gmail.com&ctz=America%2FNew_York"/>
      <div className='right_panel'>
        <CountdownTimer targetDate="2024-09-15T23:59:59" headerText="ICRA Conference" />
        <CountdownTimer targetDate="2024-10-01T23:59:59" headerText="HRI Conference" />
      </div>
    </>
  )
}

export default App
