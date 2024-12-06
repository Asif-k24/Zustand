import { useCounterStore } from './store/store'
import './App.css'
// import { useEffect } from 'react'

// const setCount = () => {
//   useCounterStore.setState( { count: 1} )
//   // console.log("count", count)
// }
const App = () => {

  const { count } = useCounterStore((state) => state)

  return <OtherComponent count={count} />
}

const OtherComponent = ({ count }: { count: number }) => {
  const increment = useCounterStore((state) => state.increment)
  const incrementAsync = useCounterStore((state) => state.incrementAsync)
  const decrement = useCounterStore((state) => state.decrement)

  // useEffect(() => {
  //   setCount()
  // }, [count])
  
  
  return (
    <div>
      {count}
      <button onClick={incrementAsync}>Increment</button>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  )
}

export default App