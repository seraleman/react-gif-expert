import { render, screen } from '@testing-library/react'
import { GifExpertApp } from '../src/GifExpertApp'

describe('Pruebas en <GifExpertApp />', () => {
  test('debe de', () => {
    render(<GifExpertApp />)
    screen.debug()
    //TODO: Queda como tarea
  })
})
