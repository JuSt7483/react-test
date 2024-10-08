import WayToTeach from './WayToTeach'
import { quotes } from '../data'

export default function TeachingSection() {
  return (
		<section>
			<h3>Цитаты Великих...</h3>

			<ul>
				{quotes.map(way => (
					<WayToTeach key={way.title} {...way} />
				))}
			</ul>
		</section>
	)
}
