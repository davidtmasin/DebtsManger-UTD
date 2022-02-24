import { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'
import { Snackbar } from '@material-ui/core'
import MuiAlert from '@material-ui/lab/Alert'
import api from '../../service/api.js'
import './index.css'

export default class AddDebts extends Component {
  state = {
    newDebt: {
      description: '',
      value: '',
      payday: ''
    },
    reg_description: '',
    reg_value: '',
    reg_payday: '',
    reg_redirect: false,

    orders: [],
    open: false
  }

  handleOpen = () => this.setState({ open: true })

  handleClose = () => this.setState({ open: false })

  // handleClick = () => {
  //   this.setState({
  //     orders: [1],
  //     open: true
  //   })
  // }

  handleDescriptionChange = e => {
    this.setState({
      reg_description: e.target.value
    })
  }

  handleValueChange = e => {
    this.setState({
      reg_value: e.target.value
    })
  }

  handlePayDayChange = e => {
    this.setState({
      reg_payday: e.target.value
    })
  }

  handleOnSubmit = async e => {
    e.preventDefault()
    const { reg_description, reg_value, reg_payday } = this.state

    const Debt = {
      description: reg_description,
      value: reg_value,
      payday: reg_payday
    }
    await api.post(`/create-debt`, Debt).then(console.log(Debt))

    // alert('Débito registrado com sucesso!')
    this.setState({
      orders: [1],
      open: true
    })

    setTimeout(() => {
      this.setState({
        reg_redirect: true
      })
    }, 2000)
  }

  render() {
    const { id, reg_description, reg_value, reg_payday, open } = this.state

    if (this.state.reg_redirect) {
      return <Redirect to="/" />
    } else {
      return (
        <div className="container add">
          <div className="content">
            <div id="cadastro">
              <form onSubmit={this.handleOnSubmit}>
                <h1>Cadastre seu Débito</h1>
                <p>
                  <label htmlFor="idField">ID </label>
                  <input
                    id="idField"
                    name="idField"
                    type="number"
                    placeholder="Este campo não é editável"
                    title="Este campo não é editável"
                    readOnly
                    value={id}
                  />
                </p>
                <p>
                  <label htmlFor="descriptionField">Descrição* </label>
                  <input
                    required="required"
                    id="descriptionField"
                    name="descriptionField"
                    type="text"
                    placeholder="Informe uma descrição para o débito"
                    title="Informe uma descrição para o débito"
                    value={reg_description}
                    onChange={this.handleDescriptionChange}
                  />
                </p>
                <p>
                  <label htmlFor="valueField">Valor* </label>
                  <input
                    required="required"
                    id="valueField"
                    name="valueField"
                    type="number"
                    placeholder="Informe o valor do débito"
                    title="Informe o valor do débito"
                    value={reg_value}
                    onChange={this.handleValueChange}
                  />
                </p>
                <p>
                  <label htmlFor="payDayField">Data de Pagamento* </label>
                  <input
                    required="required"
                    id="payDayField"
                    name="payDayField"
                    type="date"
                    title="Informe a data de pagamento"
                    value={reg_payday}
                    onChange={this.handlePayDayChange}
                  />
                </p>
                <p>
                  <input
                    type="submit"
                    value="Cadastrar"
                    title="Cadastrar débito"
                  />
                  <Link to="/">
                    <input
                      type="button"
                      value="Voltar"
                      title="Voltar para página inicial"
                    />
                  </Link>
                </p>
                {this.state.orders.length > 0 ? (
                  <div>
                    <Snackbar
                      anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left'
                      }}
                      open={open}
                      onClose={this.handleClose}
                      autoHideDuration={1500}
                    >
                      <MuiAlert
                        onClose={this.handleClose}
                        severity="success"
                        elevation={6}
                        variant="filled"
                      >
                        Sucesso ao cadastrar!
                      </MuiAlert>
                    </Snackbar>
                  </div>
                ) : (
                  <p id="infoFooter">
                    <span>*Preencha todos os campos obrigatórios!</span>
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      )
    }
  }
}
