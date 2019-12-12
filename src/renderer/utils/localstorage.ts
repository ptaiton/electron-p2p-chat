import { State } from "../store/createStore"

type LocalStorageState = Omit<State, 'router'>

export const loadState = () => {
  try {
    const serializedState = localStorage.getItem('connections')
    return serializedState && JSON.parse(serializedState)
  } catch (err) {
    return undefined
  }
}

export const saveState = (state: LocalStorageState) => {
  try {
    localStorage.setItem('connections', JSON.stringify(state))
  } catch (err) {
    console.log(err)
  }
}