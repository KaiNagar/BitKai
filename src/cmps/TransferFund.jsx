import { Component } from "react"
import { userService } from "../services/UserService"
import { connect } from "react-redux"
// import { updateContact } from "../store/actions/ContactActions"

 class _TransferFund extends Component {
  state = {
    transferAmount: 0,
    user: null,
  }
  componentDidMount() {
    const user = userService.getUser()
    this.setState({ user })
  }
  componentWillUnmount() {}

  ontransferCoins = (e) => {
    e.preventDefault()
    const { transferAmount,user } = this.state
    const { contact } = this.props
    if (transferAmount <= 0) return console.error("You too cheap")
    if(user.coins < transferAmount) return console.error('Your are too poor');
    userService.addMove(contact, transferAmount)
  }
  handelChange = ({ target }) => {
    const value = target.value

    this.setState({ transferAmount: value })
  }
  render() {
    const { contact } = this.props
    const { user, transferAmount } = this.state
    if (!user) return <div>Loading...</div>
    return (
      <div className='transfer-action'>
        <h1 className='transfer-title'>Transfer coins to {contact.name}:</h1> 
        <span className="alert">{!user.coins && 'No more coins to transfer'}</span>
        <form className="transfer-form flex space-between align-center" onSubmit={this.ontransferCoins}>
          <label htmlFor='amount'>Amount ({transferAmount}):</label>
          <input
            value={transferAmount}
            title={transferAmount}
            type='range'
            id='amount'
            name='amount'
            min={5}
            step={5}
            max={user.coins}
            onChange={this.handelChange}
          />
          <button>Transfer</button>
        </form>
      </div>
    )
  }
}


// const mapStateToProps = (state) => {
//   return {
//     contacts: state.contactModule.contacts,
//   }
// }

// const mapDispatchToProps = {
//   updateContact,
// }

export const TransferFund = connect(
  // mapStateToProps,
  // mapDispatchToProps
)(_TransferFund)
