import { Header } from '@/components/Header'
import { HomeTemplate } from '@/templates/Home'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <main className="bg-brand-300 min-h-full">
        <Header />
        <HomeTemplate />
      </main>
    </DndProvider>
  )
}

export default App
