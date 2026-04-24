export type PhaseColor =
  | 'violet'
  | 'sky'
  | 'emerald'
  | 'orange'
  | 'blue'
  | 'rose'
  | 'purple'
  | 'slate'
  | 'amber'
  | 'teal'

export interface Task {
  id: string
  label: string
  url?: string
  preChecked?: boolean
}

export interface Week {
  id: string
  label: string
  tasks: Task[]
  isSpecialTrack?: boolean
}

export interface Phase {
  id: string
  title: string
  subtitle?: string
  color: PhaseColor
  weeks: Week[]
  isSpecialTrack?: boolean
}

export interface WeekProgress {
  weekId: string
  completed: number
  total: number
  isComplete: boolean
}

export interface PhaseProgress {
  phaseId: string
  completed: number
  total: number
  isComplete: boolean
  weeks: WeekProgress[]
}

export interface OverallProgress {
  completed: number
  total: number
  phases: PhaseProgress[]
}
