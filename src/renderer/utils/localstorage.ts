import { State } from "../store/createStore"

type LocalStorageState = Omit<Omit<State, 'router'>, 'socket'>

export const loadState = () => {
  try {
    const user = localStorage.getItem('user')
    const connections = localStorage.getItem('connections')
    return {
      user: user && JSON.parse(user),
      connections: connections && JSON.parse(connections),
    }
  } catch (err) {
    return undefined
  }
}

export const saveState = (state: LocalStorageState) => {
  try {
    localStorage.setItem('user', JSON.stringify(state.user))
    localStorage.setItem('connections', JSON.stringify(state.connections))
  } catch (err) {
    console.log(err)
  }
}