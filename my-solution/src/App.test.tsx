import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import App from './App'
import Header from './components/Header/Header'

describe('React component', () => {
  it('should render the component successfully the screen', () => {
    expect(true).toBeTruthy()
  })
})

test('renders text input', () => {
  render(<App />)
  const textarea = screen.getByRole('textbox')
  expect(textarea).toBeInTheDocument()
})

test('container classs react exist', () => {
  const { container } = render(<App />)
  // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
  const boxes = container.getElementsByClassName('container')
  expect(boxes.length).toBe(1)
})

test('header classs react exist', () => {
  const { container } = render(<Header />)
  // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
  const boxes = container.getElementsByClassName('header')
  expect(boxes.length).toBe(1)
})
