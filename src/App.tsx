import { Asidebar } from './components/asaidbar/Asidebar'
import Header from './components/Header'
import { TableSection } from './components/TableSection'

const App = () => {
  return (
    <div className="flex flex-col w-full">
      <Header />
      <div>
        <Asidebar />
      </div>
      {/* <TableSection /> */}
    </div>
  )
}

export default App
