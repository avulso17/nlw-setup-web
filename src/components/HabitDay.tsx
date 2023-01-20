interface IHabitProps {
  completed?: number
  className?: string
  style?: React.CSSProperties
}

export function HabitDay(props: IHabitProps): JSX.Element {
  return (
    <div
      className='w-10 h-10 bg-zinc-900 border-2 border-zinc-800 rounded-lg'
      {...props}
    >
      {props.completed}
    </div>
  )
}
