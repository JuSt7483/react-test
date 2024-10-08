import Button from './Button/Button'

export default function TabsSection({ active, onChange }) {
  return (
		<section style={{ marginBottom: '1rem' }}>
			<Button isActive={active === 'main'} onClick={() => onChange('main')}>
				Цитаты
			</Button>
			<Button
				isActive={active === 'feedback'}
				onClick={() => onChange('feedback')}
			>
				Окно обратной связи
			</Button>
			<Button isActive={active === 'effect'} onClick={() => onChange('effect')}>
				Эффекты
			</Button>
		</section>
	)
}
