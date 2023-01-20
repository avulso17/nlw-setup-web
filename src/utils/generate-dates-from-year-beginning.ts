import dayjs from 'dayjs'

export function generateDatesFromYearBeginning(): any[] {
  const firstDayOfYear = dayjs().startOf('year')
  const today = new Date()

  console.log('firstDayOfYear', firstDayOfYear)
  console.log(typeof firstDayOfYear)

  const dates = []
  let compareDate = firstDayOfYear

  while (compareDate.isBefore(today)) {
    dates.push(compareDate.toDate())
    compareDate = compareDate.add(1, 'day')
  }

  return dates
}
