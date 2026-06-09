import { Asidebar } from './components/asaidbar/Asidebar'
import Header from './components/Header'
import MainContent from './components/mainContent/MainContent'

const App = () => {
  return (
    <div className="flex flex-col w-full h-screen overflow-hidden">
      <Header />
      <div className="flex flex-1 overflow-hidden">
        <Asidebar />
        <MainContent />
      </div>
    </div>
  )
}

export default App
