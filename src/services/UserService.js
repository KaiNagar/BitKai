import { utilService } from "./utilService.js"
export const userService = {
  getUser,
  signup,
  addMove,
}

const USER_KEY = "userDB"

function getUser() {
  const user = utilService.loadFromStorage(USER_KEY)
  return user
}

function signup(name) {
  const newUser = {
    name,
    coins: 100,
    moves: [],
  }
  utilService.saveToStorage(USER_KEY, newUser)
  return newUser
}

function addMove(contact, amount) {
  const user = getUser()
  const newMove = {
    toId: contact._id,
    to: contact.name,
    at: Date.now(),
    amount,
  }
  user.moves.push(newMove)
  user.coins -= amount
  utilService.saveToStorage(USER_KEY, user)
  return user
}


