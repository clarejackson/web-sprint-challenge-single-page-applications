import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Route, Link, Switch, Redirect } from 'react-router-dom';
import Pizza from './Pizza';
import  * as yup from 'yup';
import schema from './formSchema'
import Home from './Home'

const initialFormValues = {
  name: '',
  //Dropdown
  size: '',
  //Checkboxes
  toppings: {
    pepperoni: false,
    sausage: false,
    onion: false,
    olives: false,
    peppers: false
  },
  instructions: ''
}
const initialFormErrors = {
  name: '',
  size: ''
}
const initialOrders = []
const initialDisabled = true


const App = () => {
  const [orders, setOrders] = useState(initialOrders)
  const [formValues, setFormValues] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState(initialFormErrors)
  const [disabled, setDisabled] = useState(initialDisabled)

  const postNewOrder = newOrder => {
    axios.post('http://reqres.in/api/users', newOrder)
      .then(response => {
        setOrders([...orders, response.data])
      })
      .catch(error => {
        debugger
        console.log(error)
      })
      .finally(() => {
        setFormValues(initialFormValues)
      })
  }

  const validate = (name, value) => {
    //for yup schema
    yup
      .reach(schema, name)
      .validate(value)
      .then(valid => {
        setFormErrors({
          ...formErrors,
          [name]: ""
        })
      })
      .catch(error => {
        setFormErrors({
          ...formErrors,
          [name]: error.errors
        })
      })
  }

  const inputChange = (name, value) => {
    validate(name, value)
    setFormValues({
      ...formValues, 
      [name]: value
    })
  }

  const formSubmit = () => {
    const newOrder = {
      name: formValues.name.trim(),
      size: formValues.size,
      toppings: formValues.toppings,
      instructions: formValues.instructions.trim()
    }
    postNewOrder(newOrder)
  }

  useEffect (() => {
    console.log(formValues)
  }, [formValues])

  useEffect (() => {
    schema.isValid(formValues)
      .then(valid => {
        setDisabled(!valid)
      })
  }, [formValues])

  return (
    <>
      <nav>
        <h1>Lambda Eats</h1>
        <div className="navButtons">
          <Link to='/pizza' id='orderForm'>Pizza Order</Link>
          <Link to='/help' id='help'>Help</Link>
          <Link to='/' id='home'>Home</Link>
        </div>
      </nav>
      
      <Switch>
        <Route path='/help'>
          <h1>Hungry? We are here to help!</h1>
        </Route>

        <Route path='/pizza'>
          <Pizza 
          values={formValues}
          change={inputChange}
          submit={formSubmit}
          disabled={disabled}
          errors={formErrors}
          />
          {
            orders.map((order, index) => {
              return <div key={index}>
                      <h2>{order.name}</h2>
                      <p>{order.size}</p>
                      <p>{order.toppings}</p>
                      <p>{order.instructions}</p>
                      </div>
            })
          }
        </Route>

        <Route exact path='/'>
          <Home />
        </Route>

        <Redirect to='/' />
      </Switch>
    </>
  );
};
export default App;
