import { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'
import { Snackbar } from '@material-ui/core'
import MuiAlert from '@material-ui/lab/Alert'
import api from '../../service/api.js'
import './index.css'

export default class EditDebits extends Component {
  state = {
    id: this.props.match.params.id,
    reg_description: '',
    reg_value: '',
    reg_payday: '',
    reg_redirect: false,

    orders: [],
    open: false
  }

  handleOpen = () => this.setState({ open: true })

  handleClose = () => this.setState({ open: false })

  componentDidMount = async e => {
    const response = await api.get(`/get-debt/${this.state.id}`)

    this.setState({
      reg_description: response.data.description,
      reg_value: response.data.value,
      reg_payday: response.data.payday
    })
    console.log(response)
  }

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
    const { id, reg_description, reg_value, reg_payday } = this.state
    e.preventDefault()

    const Debt = {
      id: Number(id),
      description: reg_description,
      value: reg_value,
      payday: reg_payday
    }
    await api.put(`/update-debt`, Debt).then(console.log(Debt))

    // alert('Débito atualizado com sucesso!')

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
  // goBack = e => {
  //   let response = window.confirm('Tem certeza que deseja sair?')

  //   if (response === true) {
  //     console.log('OK')
  //   } else {
  //     console.log('Cancel')
  //   }
  // }

  render() {
    const { id, reg_description, reg_value, reg_payday, open } = this.state

    if (this.state.reg_redirect) {
      return <Redirect to="/" />
    } else {
      return (
        <div className="container edit">
          <div className="content">
            <div id="atualizar">
              <form onSubmit={this.handleOnSubmit}>
                <h1>Dados do Débito</h1>
                <p>
                  <label htmlFor="idField">ID </label>
                  <input
                    id="idField"
                    name="idField"
                    type="number"
                    value={`${id}`}
                    title="Este campo não é editável"
                    readOnly
                  />
                </p>
                <p>
                  <label htmlFor="descriptionField">Descrição </label>
                  <input
                    required="required"
                    id="descriptionField"
                    name="descriptionField"
                    type="text"
                    placeholder="Descreva o débito"
                    title="Clique aqui para alterar a descrição"
                    value={`${reg_description}`}
                    onChange={this.handleDescriptionChange}
                  />
                </p>
                <p>
                  <label htmlFor="valueField">Valor </label>
                  <input
                    required="required"
                    id="valueField"
                    name="valueField"
                    type="number"
                    placeholder="Informe o valor do débito"
                    title="Clique aqui para alterar o valor do débito"
                    value={`${reg_value}`}
                    onChange={this.handleValueChange}
                  />
                </p>
                <p>
                  <label htmlFor="payDayField">Data de Pagamento </label>
                  <input
                    required="required"
                    id="payDayField"
                    name="payDayField"
                    type="date"
                    placeholder="Informe a data de pagamento"
                    title="Clique aqui para alterar a data de pagamento"
                    value={`${reg_payday}`}
                    onChange={this.handlePayDayChange}
                  />
                </p>
                <p>
                  <input
                    type="submit"
                    value="Atualizar"
                    title="Atualizar dados do débito"
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
                        Sucesso ao editar!
                      </MuiAlert>
                    </Snackbar>
                  </div>
                ) : (
                  <p id="infoFooter">
                    <span>*Altere um ou mais campos.</span>
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
