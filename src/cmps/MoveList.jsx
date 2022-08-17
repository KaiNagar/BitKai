import React from "react"
import { userService } from "../services/UserService"
import MovePreview from "./MovePreview"

export default function MoveList({ contact = null }) {
  const user = userService.getUser()
  const movesToDisplay = contact
    ? user.moves.filter((m) => m.toId === contact._id)
    : user.moves.reverse().slice(0,3)
  return (
    <section className='move-list flex column'>
      <h1>Your{contact ? "" : " last 3"} Moves:</h1>
      <div className='moves'>
        {movesToDisplay.map((m) => (
          <MovePreview m={m} key={m.at} />
        ))}
      </div>
    </section>
  )
}
