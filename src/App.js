import {BrowserRouter as Router} from 'react-router-dom'
import Routes from './Routes/Routes'
import {Header} from './components/organisms'
import './styles/App.scss'

const App = () => {
  return (
    <>
      <Header />
      <Router>
        <Routes />
      </Router>
    </>
  )
}

export default App
