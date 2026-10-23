import Todos from './components/Todos'
import Info from './components/Info'

function App() {
    return (
    <div className="min-h-screen bg-[#f5f5f5] py-8 font-light text-[#111]">
      <Todos />
      <Info name="Alexandra Louie C. Mauring" />
    </div>
  )
}

export default App