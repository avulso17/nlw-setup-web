import { generateDatesFromYearBeginning } from '../utils/generate-dates-from-year-beginning'
import { HabitDay } from './HabitDay'

const weekDays = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S']

const summaryDates = generateDatesFromYearBeginning()

const minimunSummaryDatesSize = 18 * 7
const amountOfDaysToFill = minimunSummaryDatesSize - summaryDates.length

export function SummaryTable(): JSX.Element {
  return (
    <div className='w-full flex'>
      <div className='grid grid-rows-7 grid-flow-row gap-3'>
        {weekDays.map((weekDay, index) => {
          return (
            <div
              key={`${weekDay}-${index}`}
              className='text-zinc-400 text-xl h-10 w-10 font-bold flex items-center justify-center'
            >
              {weekDay}
            </div>
          )
        })}
      </div>

      <div className='grid grid-rows-7 grid-flow-col gap-3'>
        {summaryDates.map((date) => {
          return (
            <HabitDay
              key={date.toString()}
              completed={date.getDate() % 2 === 0 ? 1 : undefined}
            />
          )
        })}

        {amountOfDaysToFill > 0 &&
          Array.from({ length: amountOfDaysToFill }).map((_, index) => {
            return (
              <HabitDay
                key={index}
                style={{ cursor: 'not-allowed', opacity: '40%' }}
              />
            )
          })}
      </div>
    </div>
  )
}
