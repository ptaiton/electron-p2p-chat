export default (func: Function, timeFrame: number) => {
  let lastTime = 0
  return () => {
    const now = new Date().getTime()
    if ((now - lastTime) >= timeFrame) {
      func()
      lastTime = now
    }
  }
}