import { useState } from 'react'
import { PropTypes } from 'prop-types'

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
    <form onSubmit={onSubmit} aria-label="form">
      <input
        onChange={onInputChange}
        placeholder="Buscar gifs"
        type="text"
        value={inputValue}
      />
    </form>
  )
}

AddCategory.propTypes = {
  onNewCategory: PropTypes.func.isRequired,
}
