import React from 'react';

export default function Pizza(props) {
  const {
    values,
    submit,
    change,
    disabled,
    errors,
  } = props

  const onSubmit = evt => {
    evt.preventDefault()
    submit()
  }

  const onChange = evt => {
    const { name, value, type, checked } = evt.target
    const valueToUse = type === 'checkbox' ? checked : value
    change(name, valueToUse)
  }

 return (
   <form onSubmit={onSubmit} className='container'>
     <h1>Order Here!</h1>

     <button disabled={disabled}>Add to Order</button>

     <div className='errors'>
          <div>{errors.name}</div>
          <div>{errors.size}</div>
     </div>

     <div>
        <h2>Order Form</h2>

        <label>Name:    </label>
        <input 
        value={values.name}
        onChange={onChange}
        name='name'
        type='text'
        />

        <label>Pizza Size:       </label>
        <select 
        onChange={onChange}
        value={values.size}
        name='size'
        >
           <option value=''>- Select an option -</option>
            <option value='8inch'>8 inch</option>
            <option value='12inch'>12 inch</option>
            <option value='16inch'>16 inch</option>
        </select>

        <h3>Toppings:     </h3>
        <label>Pepperoni     </label>
        <input
        type='checkbox'
        name='toppings'
        value='pepperoni'
        checked={values.toppings.pepperoni}
        onChange={onChange}
        />
        <label>Sausage    </label>
        <input
        type='checkbox'
        name='toppings'
        value='sausage'
        checked={values.toppings.sausage}
        onChange={onChange}
        />
        <label>Onions     </label>
        <input
        type='checkbox'
        name='toppings'
        value='onions'
        checked={values.toppings.onions}
        onChange={onChange}
        />
        <label>Olives    </label>
        <input
        type='checkbox'
        name='toppings'
        value='olives'
        checked={values.toppings.olives}
        onChange={onChange}
        />
        <label>Pepppers     </label>
        <input
        type='checkbox'
        name='toppings'
        value='peppers'
        checked={values.toppings.peppers}
        onChange={onChange}
        />

        <h3>Any more info for us?</h3>
        <label>Special Instructions:    </label>
        <input 
        value={values.instructions}
        onChange={onChange}
        name='instructions'
        type='text'
        />





     </div>

   </form>
 )
}