import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './pages/Home'
import EditDebts from './pages/EditDebts'
import AddDebts from './pages/AddDebts'

export default function Routers() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/edit-debts/:id" component={EditDebts} />
        <Route path="/add-debts" component={AddDebts} />
      </Switch>
    </BrowserRouter>
  )
}
