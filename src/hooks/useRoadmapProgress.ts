import { useMemo } from 'react'
import type { Phase, OverallProgress } from '../types/roadmap'

export function useRoadmapProgress(
  phases: Phase[],
  taskChecks: Record<string, boolean>
): OverallProgress {
  return useMemo(() => {
    let totalCompleted = 0
    let totalTasks = 0

    const phaseProgressList = phases.map(phase => {
      let phaseCompleted = 0
      let phaseTasks = 0

      const weekProgressList = phase.weeks.map(week => {
        const weekTotal = week.tasks.length
        const weekCompleted = week.tasks.filter(t => taskChecks[t.id]).length
        phaseCompleted += weekCompleted
        phaseTasks += weekTotal
        return {
          weekId: week.id,
          completed: weekCompleted,
          total: weekTotal,
          isComplete: weekTotal > 0 && weekCompleted === weekTotal,
        }
      })

      totalCompleted += phaseCompleted
      totalTasks += phaseTasks

      return {
        phaseId: phase.id,
        completed: phaseCompleted,
        total: phaseTasks,
        isComplete: phaseTasks > 0 && phaseCompleted === phaseTasks,
        weeks: weekProgressList,
      }
    })

    return {
      completed: totalCompleted,
      total: totalTasks,
      phases: phaseProgressList,
    }
  }, [phases, taskChecks])
}
