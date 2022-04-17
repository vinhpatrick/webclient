import { getUserInformation } from './api/customerApi'
import { getLocalData } from './StorageServices'

const token = getLocalData('accessToken')

export const getRoles = async () => {
  if (!token) return []

  const response = await getUserInformation(token)

  return response.data.data.roles
}
