import Button from './Button/Button'
import { useState } from 'react'
import { differences } from '../data'

export default function DifferencesSection() {
  const [contentType, setContentType] = useState(null)

  function handleClick(type) {
    setContentType(type)
  }

  return (
    <section>
      <h3>Авторы цитат</h3>

      <Button
        isActive={contentType === 'way'}
        onClick={() => handleClick('way')}
      >
        Геральт из Ривии
      </Button>
      <Button
        isActive={contentType === 'easy'}
        onClick={() => handleClick('easy')}
      >
        Дийкстра
      </Button>
      <Button
        isActive={contentType === 'program'}
        onClick={() => handleClick('program')}
      >
        Золтан Хивай
      </Button>

      {!contentType && <p>Нажми на кнопку</p>}

      {contentType && <p>{differences[contentType]}</p>}
    </section>
  )
}
