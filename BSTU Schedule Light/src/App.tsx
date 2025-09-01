import './App.css'
import NotificationComponent from './Components/DesktopNotificationComponent'
import HeaderComponent from './Components/HeaderComponent'
import LeftSectionComponent from './Components/LeftDesktopSectionComponent'

function App() {
  

  return (
    <div className='container'>
        <HeaderComponent/>
        <LeftSectionComponent/>
        <NotificationComponent/>
    </div>
  )
}

export default App
