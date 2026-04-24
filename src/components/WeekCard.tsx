import { ChevronDown } from 'lucide-react'
import type { Week, Phase, WeekProgress } from '../types/roadmap'
import { PHASE_COLORS } from '../data/roadmapData'
import { ProgressBar } from './ProgressBar'
import { CompleteBadge } from './CompleteBadge'
import { ActiveIndicator } from './ActiveIndicator'
import { TaskRow } from './TaskRow'

interface WeekCardProps {
  week: Week
  phase: Phase
  progress: WeekProgress
  isOpen: boolean
  onToggle: () => void
  taskChecks: Record<string, boolean>
  onToggleTask: (taskId: string) => void
  isActive: boolean
}

export function WeekCard({
  week,
  phase,
  progress,
  isOpen,
  onToggle,
  taskChecks,
  onToggleTask,
  isActive,
}: WeekCardProps) {
  const c = PHASE_COLORS[phase.color]

  return (
    <div
      className={`rounded-lg border overflow-hidden ${
        isActive ? 'border-emerald-300 ring-2 ring-emerald-200' : 'border-slate-200'
      }`}
    >
      <button
        onClick={onToggle}
        className={`w-full flex items-center gap-3 px-4 py-3 text-left transition-colors ${
          isOpen ? c.cardBg : 'bg-white hover:bg-slate-50'
        }`}
      >
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-sm font-semibold text-slate-800">{week.label}</span>
            {isActive && <ActiveIndicator />}
            {progress.isComplete && <CompleteBadge color={phase.color} />}
          </div>
          {!progress.isComplete && (
            <div className="mt-1.5">
              <ProgressBar
                completed={progress.completed}
                total={progress.total}
                colorClass={c.progressFill}
                height="sm"
                showLabel
              />
            </div>
          )}
        </div>
        <ChevronDown
          size={16}
          className={`flex-shrink-0 text-slate-400 transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>

      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-[9999px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="divide-y divide-slate-100 border-t border-slate-100">
          {week.tasks.map(task => (
            <TaskRow
              key={task.id}
              task={task}
              isChecked={taskChecks[task.id] ?? false}
              onToggle={() => onToggleTask(task.id)}
              color={phase.color}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
