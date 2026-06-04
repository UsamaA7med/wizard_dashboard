import { Asidebar } from './components/asaidbar/Asidebar'
import Header from './components/Header'
import MainContent from './components/mainContent/MainContent'

const App = () => {
  return (
    <div className="flex flex-col w-full min-h-screen overflow-x-hidden">
      <Header />
      <div className="flex w-full flex-1">
        <Asidebar />
        <MainContent />
      </div>
    </div>
  )
}

export default App
