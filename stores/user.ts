import { defineStore } from 'pinia'

interface IUser {
    name: string 
    email: string
}

export interface IUserStore {
    user: IUser;
    isAuthenticated: boolean;
    fetchUser: () => IUser,
    restartUserStates: () => void
}

export const useUserStore = defineStore('user', {
  state: () => (
    {
      user: {} as IUser,
      isAuthenticated: false
    }
  ),
  getters: {
  },
  actions: {
    fetchUser(): IUser {
        const user = {
            name: 'inRent',
            email: 'admin@inrent.com'
        }
        this.user = user;
        this.isAuthenticated = true;
        return user;
    },
   
    restartUserStates() {
      this.user = {} as IUser
    }
  } 
})