import { CheckCircle2 } from 'lucide-react'
import type { PhaseColor } from '../types/roadmap'
import { PHASE_COLORS } from '../data/roadmapData'

interface CompleteBadgeProps {
  color: PhaseColor
}

export function CompleteBadge({ color }: CompleteBadgeProps) {
  const c = PHASE_COLORS[color]
  return (
    <span
      className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium ${c.badge} ${c.badgeText}`}
    >
      <CheckCircle2 size={11} />
      Complete
    </span>
  )
}
