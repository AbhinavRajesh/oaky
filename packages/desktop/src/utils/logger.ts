const isProduction = () => {
  return process.env.NODE_ENV === "production"
}

export function error(...args: any[]) {
  if (isProduction()) {
    // TODO: Log to server to access later
    return;
  }
  console.log(`[ERROR]:>>`, args)
}

export function log(...args: any[]) {
  if (isProduction()) {
    // TODO: Do analytics logging
    return;
  }
  console.log(`[LOG]:>>`, ...args)
}