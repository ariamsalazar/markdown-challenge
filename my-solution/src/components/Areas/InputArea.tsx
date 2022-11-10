import { useContext } from 'react'
import { Context } from '../../context/Context'
import './Areas.scss'

export default function InputArea () {
  const [context, setContext] = useContext(Context)

  return (
    <>
      <div className="input">
        <textarea
          className="input__textarea"
          name="context"
          id="context"
          value={context}
          onChange={(e) => {
            setContext(e.target.value)
          }}
        ></textarea>
      </div>
    </>
  )
}
