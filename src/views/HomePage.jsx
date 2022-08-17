import { Component } from "react"
import { userService } from "../services/UserService"
import { bitCoinService } from "../services/BitcoinService"
import MoveList from "../cmps/MoveList"

export class HomePage extends Component {
  state = {
    user: userService.getUser(),
    rate: 0,
  }
  componentDidMount() {
    this.loadBitcoinRate()
  }
  componentWillUnmount() {}

  async loadBitcoinRate() {
    const rate = await bitCoinService.getRate(this.state.user.coins)
    this.setState({ rate })
  }

  render() {
    const { user } = this.state
    console.log(user)
    const userImgUrl = `https://robohash.org/${user.name}`
    return (
      <section className='home-page container margin'>
        <div className='user-info'>
          <h1>Welcome back {user.name} !</h1>
          <img src={userImgUrl} className='user-img' alt='User img' />
        </div>
        <div className='coins-info'>
          <div className='coin-icon-con'>
            <img
              src='https://cdn-icons-png.flaticon.com/512/606/606820.png'
              className='icon'
              alt='Coins icon'
            />{" "}
            Coins: {user.coins}
          </div>
          <div className='coin-icon-con'>
            <img
              src='https://cdn-icons-png.flaticon.com/512/1490/1490900.png'
              className='icon'
              alt='BTC icon'
            />{" "}
            BTC: {this.state.rate}
          </div>
          <MoveList />
        </div>
      </section>
    )
  }
}
