import { PHASES, getDefaultTaskChecks, getDefaultPhasesOpen } from './data/roadmapData'
import { useLocalStorage } from './hooks/useLocalStorage'
import { useRoadmapProgress } from './hooks/useRoadmapProgress'
import { Header } from './components/Header'
import { PhaseSection } from './components/PhaseSection'

function App() {
  const [taskChecks, setTaskChecks] = useLocalStorage<Record<string, boolean>>(
    'roadmap-task-checks',
    getDefaultTaskChecks()
  )
  const [weeksOpen, setWeeksOpen] = useLocalStorage<Record<string, boolean>>(
    'roadmap-weeks-open',
    {}
  )
  const [phasesOpen, setPhasesOpen] = useLocalStorage<Record<string, boolean>>(
    'roadmap-phases-open',
    getDefaultPhasesOpen()
  )

  const progress = useRoadmapProgress(PHASES, taskChecks)

  const activePhaseId = progress.phases.find(p => !p.isComplete)?.phaseId ?? null
  const activeWeekId = progress.phases
    .flatMap(p => p.weeks)
    .find(w => !w.isComplete)?.weekId ?? null

  const toggleTask = (taskId: string) =>
    setTaskChecks({ ...taskChecks, [taskId]: !taskChecks[taskId] })

  const toggleWeek = (weekId: string) =>
    setWeeksOpen({ ...weeksOpen, [weekId]: !weeksOpen[weekId] })

  const togglePhase = (phaseId: string) =>
    setPhasesOpen({ ...phasesOpen, [phaseId]: !phasesOpen[phaseId] })

  return (
    <div className="min-h-screen bg-slate-50">
      <Header progress={progress} />
      <main className="max-w-3xl mx-auto px-4 py-6 space-y-4 pb-16">
        {PHASES.map((phase, i) => (
          <PhaseSection
            key={phase.id}
            phase={phase}
            progress={progress.phases[i]}
            isOpen={phasesOpen[phase.id] ?? true}
            onToggle={() => togglePhase(phase.id)}
            isActive={phase.id === activePhaseId}
            weeksOpen={weeksOpen}
            onToggleWeek={toggleWeek}
            taskChecks={taskChecks}
            onToggleTask={toggleTask}
            activeWeekId={activeWeekId}
          />
        ))}
      </main>
    </div>
  )
}

export default App
