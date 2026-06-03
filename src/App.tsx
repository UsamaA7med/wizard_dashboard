import { Asidebar } from './components/asaidbar/Asidebar'
import Header from './components/Header'
import MainContent from './components/mainContent/MainContent'
import { TableSection } from './components/TableSection'

const App = () => {
  return (
    <div className="flex flex-col ">
      <Header />
      <div className="flex w-full">
        <Asidebar />
        <MainContent />
      </div>
    </div>
  )
}

export default App
