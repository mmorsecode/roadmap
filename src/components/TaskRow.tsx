import type { Task, PhaseColor } from '../types/roadmap'
import { PHASE_COLORS } from '../data/roadmapData'

interface TaskRowProps {
  task: Task
  isChecked: boolean
  onToggle: () => void
  color: PhaseColor
}

export function TaskRow({ task, isChecked, onToggle, color }: TaskRowProps) {
  const c = PHASE_COLORS[color]

  return (
    <label className="flex items-start gap-3 px-4 py-2.5 hover:bg-black/[0.03] cursor-pointer group min-h-[40px]">
      <input
        type="checkbox"
        checked={isChecked}
        onChange={onToggle}
        className={`mt-0.5 w-4 h-4 flex-shrink-0 rounded cursor-pointer ${c.checkboxAccent}`}
      />
      <span
        className={`text-sm leading-relaxed transition-colors select-none ${
          isChecked ? 'line-through text-slate-400' : 'text-slate-700 group-hover:text-slate-900'
        }`}
      >
        {task.url ? (
          <a
            href={task.url}
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-2 decoration-slate-300 hover:decoration-current"
            onClick={e => e.stopPropagation()}
          >
            {task.label}
          </a>
        ) : (
          task.label
        )}
      </span>
    </label>
  )
}
