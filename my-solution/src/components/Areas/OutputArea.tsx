import { useContext } from 'react'
import { Context } from '../../context/Context'
import convertHtmlToReact from '@hedgedoc/html-to-react'
import { markdownParser } from '../../utils/markDownParser'
import './Areas.scss'

export default function OutputArea () {
  const [context] = useContext(Context)

  return (
    <div className="input">
      <div className="input__output">{convertHtmlToReact(markdownParser(context))}</div>
    </div>
  )
}
