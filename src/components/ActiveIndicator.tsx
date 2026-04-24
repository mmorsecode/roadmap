export function ActiveIndicator() {
  return (
    <span className="inline-flex items-center gap-1 text-xs text-emerald-600 font-medium">
      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
      Active
    </span>
  )
}
