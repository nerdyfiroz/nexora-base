// Returns seconds left until unlock
export function getSecondsLeft(lockEndTime) {
  const now = Math.floor(Date.now() / 1000);
  return Math.max(lockEndTime - now, 0);
}

// Returns formatted countdown string
export function formatCountdown(seconds) {
  const days = Math.floor(seconds / 86400);
  const hours = Math.floor((seconds % 86400) / 3600);
  const mins = Math.floor((seconds % 3600) / 60);
  const secs = seconds % 60;
  return `${days}d ${hours}h ${mins}m ${secs}s`;
}
