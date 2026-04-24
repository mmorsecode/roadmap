import { ChevronDown, Coffee } from 'lucide-react'
import type { Phase, PhaseProgress } from '../types/roadmap'
import { PHASE_COLORS } from '../data/roadmapData'
import { ProgressBar } from './ProgressBar'
import { WeekCard } from './WeekCard'

interface PhaseSectionProps {
  phase: Phase
  progress: PhaseProgress
  isOpen: boolean
  onToggle: () => void
  isActive: boolean
  weeksOpen: Record<string, boolean>
  onToggleWeek: (weekId: string) => void
  taskChecks: Record<string, boolean>
  onToggleTask: (taskId: string) => void
  activeWeekId: string | null
}

export function PhaseSection({
  phase,
  progress,
  isOpen,
  onToggle,
  isActive,
  weeksOpen,
  onToggleWeek,
  taskChecks,
  onToggleTask,
  activeWeekId,
}: PhaseSectionProps) {
  const c = PHASE_COLORS[phase.color]
  const pct = progress.total === 0 ? 0 : Math.round((progress.completed / progress.total) * 100)

  const headerOpenClass = `${c.badge} ${c.badgeText}`
  const headerClosedClass = 'bg-white hover:bg-slate-50'

  return (
    <div
      className={`rounded-xl overflow-hidden shadow-sm ${
        phase.isSpecialTrack
          ? 'border-2 border-dashed border-amber-300'
          : 'border border-slate-200'
      } ${isActive ? 'ring-2 ring-offset-1 ' + c.ring : ''}`}
    >
      <button
        onClick={onToggle}
        className={`w-full flex items-center gap-4 px-5 py-4 text-left transition-colors ${
          isOpen ? headerOpenClass : headerClosedClass
        }`}
      >
        {phase.isSpecialTrack ? (
          <Coffee size={20} className="flex-shrink-0 text-amber-600" />
        ) : (
          <div className={`w-1 h-10 rounded-full flex-shrink-0 ${c.accent}`} />
        )}

        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap">
            <h2 className="text-base font-bold text-slate-900">{phase.title}</h2>
            {phase.subtitle && (
              <span className="text-xs text-slate-500 font-normal">{phase.subtitle}</span>
            )}
          </div>
          <div className="mt-1.5 flex items-center gap-3">
            <div className="flex-1">
              <ProgressBar
                completed={progress.completed}
                total={progress.total}
                colorClass={c.progressFill}
                height="sm"
              />
            </div>
            <span className="text-xs text-slate-500 whitespace-nowrap tabular-nums">
              {progress.completed}/{progress.total} · {pct}%
            </span>
          </div>
        </div>

        <ChevronDown
          size={18}
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
        <div className="p-4 space-y-3 bg-slate-50">
          {phase.weeks.map((week, i) => (
            <WeekCard
              key={week.id}
              week={week}
              phase={phase}
              progress={progress.weeks[i]}
              isOpen={weeksOpen[week.id] ?? false}
              onToggle={() => onToggleWeek(week.id)}
              taskChecks={taskChecks}
              onToggleTask={onToggleTask}
              isActive={week.id === activeWeekId}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
