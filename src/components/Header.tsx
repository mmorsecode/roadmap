import { BookOpen } from 'lucide-react'
import type { OverallProgress } from '../types/roadmap'
import { ProgressBar } from './ProgressBar'

interface HeaderProps {
  progress: OverallProgress
}

export function Header({ progress }: HeaderProps) {
  const pct = progress.total === 0 ? 0 : Math.round((progress.completed / progress.total) * 100)

  return (
    <header className="bg-white border-b border-slate-200 sticky top-0 z-10 shadow-sm">
      <div className="max-w-3xl mx-auto px-4 py-4">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-9 h-9 rounded-lg bg-orange-500 flex items-center justify-center flex-shrink-0 shadow-sm">
            <BookOpen size={18} className="text-white" />
          </div>
          <div className="flex-1 min-w-0">
            <h1 className="text-lg font-bold text-slate-900 leading-tight">
              HubSpot SWE Roadmap
            </h1>
            <p className="text-xs text-slate-500">
              16 Weeks · TypeScript + Java Microservice Track
            </p>
          </div>
          <div className="text-right flex-shrink-0">
            <span className="text-2xl font-bold text-slate-800 tabular-nums">{pct}%</span>
            <p className="text-xs text-slate-500 tabular-nums">
              {progress.completed}/{progress.total} tasks
            </p>
          </div>
        </div>
        <ProgressBar
          completed={progress.completed}
          total={progress.total}
          colorClass="bg-orange-500"
          height="md"
        />
      </div>
    </header>
  )
}
