import { Component } from 'react'
import { Link } from 'react-router-dom'
import api from '../../service/api.js'
import { FaEdit, FaTrashAlt } from 'react-icons/fa'
import { Snackbar } from '@material-ui/core'
import MuiAlert from '@material-ui/lab/Alert'
import './Home.css'

export default class Home extends Component {
  state = {
    registers: [],

    orders: [],
    open: false
  }

  handleOpen = () => this.setState({ open: true })

  handleClose = () => this.setState({ open: false })

  componentDidMount = async e => {
    const response = await api.get('/all-debts')

    response.data.map(res => {
      const { registers } = this.state

      this.setState({
        registers: [...registers, res]
      })

      return console.log(res)
    })

    console.log(this.state.registers)
  }

  deleteDebt = async id => {
    await api.delete(`/delete-debt/${id}`)

    // alert('Débito excluído com sucesso!')
  }

  render() {
    const { registers, open } = this.state

    return (
      <div className="content home">
        <h1 id="titleHome">Últimos débitos</h1>
        <table className="tableDebts">
          <thead>
            <tr>
              <th>ID</th>
              <th>Descrição</th>
              <th>Valor</th>
              <th>Data de Pagamento</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {registers.map(register => (
              <tr>
                <td data-label="ID">{register.id}</td>
                <td data-label="Description">{register.description}</td>
                <td data-label="Value">
                  R$ {register.value.toString().replace('.', ',')}
                </td>
                <td data-label="PayDay">
                  {register.payday.split('-').reverse().join('/')}
                </td>
                <td>
                  <Link to={`/edit-debts/${encodeURIComponent(register.id)}`}>
                    <button id="btnEdit" title="Editar débito">
                      <FaEdit />
                    </button>
                  </Link>
                  <button
                    id="btnDelete"
                    title="Remover débito"
                    onClick={() => {
                      this.deleteDebt(register.id)

                      this.setState({
                        orders: [1],
                        open: true
                      })

                      setTimeout(() => {
                        window.location.reload()
                      }, 500)
                    }}
                  >
                    <FaTrashAlt />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan="5">
                <Link to="/add-debts">
                  <h3
                    id="tbFooter"
                    title="Clique aqui para cadastrar um novo débito"
                  >
                    Cadastrar novo débito
                  </h3>
                </Link>
              </td>
            </tr>
          </tfoot>
        </table>
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
                Sucesso ao deletar!
              </MuiAlert>
            </Snackbar>
          </div>
        ) : (
          <span></span>
        )}
      </div>
    )
  }
}
