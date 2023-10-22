import { useState } from 'react'

export function AddCategory({ onNewCategory }) {
  const [inputValue, setInputValue] = useState('')

  const onInputChange = ({ target }) => {
    setInputValue(target.value)
  }

  const onSubmit = (event) => {
    event.preventDefault()
    const cleanInputValue = inputValue.trim()

    if (cleanInputValue.length <= 1) return

    onNewCategory(cleanInputValue)
    setInputValue('')
  }

  return (
    <form onSubmit={onSubmit}>
      <input
        onChange={onInputChange}
        placeholder="Buscar gifs"
        type="text"
        value={inputValue}
      />
    </form>
  )
}
