import React from 'react'

const CartContext = React.createContext({ //createContext kylyp jatak
	items: [],
	totalAmount: 0, // totalPrice
	addItem: (item) => {},
	removeItem: (id) => {},
})

export default CartContext
