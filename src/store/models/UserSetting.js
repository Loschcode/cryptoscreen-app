import { ShowUserSetting } from '../schemas/userSetting.gql'

export const userSetting = {
  query: ShowUserSetting,
  result ({ data }) {
    console.log('userSetting received')
  }
}