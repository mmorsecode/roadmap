interface ProgressBarProps {
  completed: number
  total: number
  colorClass: string
  height?: 'sm' | 'md' | 'lg'
  showLabel?: boolean
}

const HEIGHT: Record<string, string> = {
  sm: 'h-1.5',
  md: 'h-2',
  lg: 'h-3',
}

export function ProgressBar({
  completed,
  total,
  colorClass,
  height = 'md',
  showLabel = false,
}: ProgressBarProps) {
  const pct = total === 0 ? 0 : Math.round((completed / total) * 100)

  return (
    <div className="flex items-center gap-2">
      <div className={`flex-1 bg-slate-200 rounded-full overflow-hidden ${HEIGHT[height]}`}>
        <div
          className={`h-full rounded-full transition-all duration-500 ${colorClass}`}
          style={{ width: `${pct}%` }}
        />
      </div>
      {showLabel && (
        <span className="text-xs text-slate-400 whitespace-nowrap tabular-nums">
          {completed}/{total}
        </span>
      )}
    </div>
  )
}
