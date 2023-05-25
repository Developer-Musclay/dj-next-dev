import { parseISO, format } from 'date-fns'
import frLocale from 'date-fns/locale/fr'

export default function Date({ dateString }: { dateString: string }) {
  const date = parseISO(dateString)
  return <time dateTime={dateString}>{format(date, 'd LLLL yyyy', {locale: frLocale})}</time>
}