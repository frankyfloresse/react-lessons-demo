// 1. Создать компонент <Counter /> с двумя кнопками + и -
// 2. Создать комонент <Parent1 /> где,
//     2.1. создать стейт const [count, setCount] = useState(1)
// 2.2. Подключить <Counter />
// 2.3. При нажатии на + - внутри <Counter /> должен обновляться стейт в <Parent 1 />
// 3. Создать комонент <Parent2 />, реализовать аналогично <Parent1 />

import ParentFirst from "./components/parent-1/ParentFirst.tsx";
import ParentSecond from "./components/parent-2/ParentSecond.tsx";

function App() {

  return (
      <>
          <ParentFirst />
          <hr/>
          <ParentSecond />
      </>
  )
}

export default App
