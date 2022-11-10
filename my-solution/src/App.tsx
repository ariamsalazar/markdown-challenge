import { useState } from 'react'
import Header from './components/Header/Header'
import InputArea from './components/Areas/InputArea'
import OutputArea from './components/Areas/OutputArea'
import { Context } from './context/Context'
import '../src/assets/global.scss'
export default function App () {
  const [context, setContext] = useState('')
  return (
    <Context.Provider value={[context, setContext]}>
      <Header />
      <div className="container">
        <InputArea />
        <OutputArea />
      </div>
    </Context.Provider>
  )
}
