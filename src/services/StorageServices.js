import store from 'store'
import sessionStorage from 'store/storages/sessionStorage'

const session = store.createStore(sessionStorage)

const _prefix = 'accommerce.'

const _getRealKey = (key, noPrefix = false) => {
  if (noPrefix) {
    return key
  }

  return _prefix + key
}

export const removeLocalData = (key, noPrefix = false) => {
  const realKey = _getRealKey(key, noPrefix)

  return store.remove(realKey)
}

export const getLocalData = (key, defaultValue = null, noPrefix = false, storage = 'localStorage') => {
  const realKey = _getRealKey(key, noPrefix)

  let value = store.get(realKey) || defaultValue

  if ('sessionStorage' === storage) {
    value = session.get(realKey) || defaultValue
  }

  try {
    return JSON.parse(value)
  } catch (e) {
    return value
  }
}

export const setLocalData = (key, value, noPrefix = false, storage = 'localStorage') => {
  const realKey = _getRealKey(key, noPrefix)

  const type = typeof value
  if (type === 'object') {
    value = JSON.stringify(value)
  }

  if ('sessionStorage' === storage) {
    session.set(realKey, value)
  } else {
    store.set(realKey, value)
  }

  return value
}
