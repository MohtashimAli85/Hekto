import React, { useEffect, useReducer, useState, useRef } from "react"
import { createClient } from "../utils/client"

//  const [currencyCode,setCurrencyCode] = useState('eur');
export const defaultStoreContext = {
  adding: false,
  cart: {
    items: []
  },
  order: {},
  products: [],
  currencyCode: "",
  setCurrencyCode: async () => { },
  addVariantToCart: async () => { },
  createCart: async () => { },
  removeLineItem: async () => { },
  updateLineItem: async () => { },
  setShippingMethod: async () => { },
  updateAddress: async () => { },
  createPaymentSession: async () => { },
  completeCart: async () => { },
  retrieveOrder: async () => { },
  setPaymentSession: async () => { },
  dispatch: async () => { }
}

const StoreContext = React.createContext(defaultStoreContext)
export default StoreContext

const reducer = (state, action) => {
  switch (action.type) {
    case "setCart":
      // console.log(action);
      return {
        ...state,
        cart: action.payload,
        currencyCode: action.payload.region.currency_code
      }
    case "setOrder":
      return {
        ...state,
        order: action.payload
      }
    case "setProducts":
      return {
        ...state,
        products: action.payload
      }

    default:
      return state
  }
}

const client = createClient()

export const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, defaultStoreContext)
  const stateCartId = useRef()
  // const [ccode,setCcode] = useState('eur');

  // setCcode(v);
  // defaultStoreContext.currencyCode = v;
  const updateCart = async (id) => {
    let cartId
    if (localStorage) {
      cartId = localStorage.getItem("cart_id")
    }
    await client.carts.update(cartId, { region_id: (id) });
    client.carts.retrieve(cartId).then((data) => {
      console.log(data);
      dispatch({ type: "setCart", payload: data.cart })
    })
  }
  const getRegionId = async (code) => {
    const regions = await client.regions.list().then(data => {
      return data.regions
    })
    // console.log(data.regions);
    let id;
    regions.forEach((e) => {
      if (e.currency_code === code) {
        id = e.id;
      }
    })

    console.log(id);
    return id;
  }

  const setCurrencyCode = async (provider) => {
    const id = await getRegionId(provider);
    updateCart(id);
  }
  // useEffect(() => {
  //   setCurrencyCode();
  // })




  useEffect(() => {
    stateCartId.current = state.cart.id
  }, [state.cart])

  useEffect(() => {
    let cartId
    if (localStorage) {
      cartId = localStorage.getItem("cart_id")
    }

    if (cartId) {
      client.carts.retrieve(cartId).then((data) => {
        console.log(data);
        dispatch({ type: "setCart", payload: data.cart })
      })
    } else {
      client.carts.create().then((data) => {
        console.log(data);
        dispatch({ type: "setCart", payload: data.cart })
        if (localStorage) {
          localStorage.setItem("cart_id", data.cart.id)
        }
      })
    }

    client.products.list().then((data) => {
      dispatch({ type: "setProducts", payload: data.products })
    })
  }, [])

  const createCart = () => {
    if (localStorage) {
      localStorage.removeItem("cart_id")
    }
    client.carts.create().then((data) => {
      dispatch({ type: "setCart", payload: data.cart })
    })
  }

  const setPaymentSession = async (provider) => {
    return await client.carts
      .setPaymentSession(state.cart.id, {
        provider_id: provider
      })
      .then((data) => {
        dispatch({ type: "setCart", payload: data.cart })
        return data
      })
  }

  const addVariantToCart = async ({ variantId, quantity }) => {
    client.carts.lineItems
      .create(state.cart.id, {
        variant_id: variantId,
        quantity: quantity
      })
      .then((data) => {
        dispatch({ type: "setCart", payload: data.cart })
      })
  }

  const removeLineItem = async (lineId) => {
    client.carts.lineItems.delete(state.cart.id, lineId).then((data) => {
      dispatch({ type: "setCart", payload: data.cart })
    })
  }

  const updateLineItem = async ({ lineId, quantity }) => {
    client.carts.lineItems
      .update(state.cart.id, lineId, { quantity: quantity })
      .then((data) => {
        dispatch({ type: "setCart", payload: data.cart })
      })
  }

  const getShippingOptions = async () => {
    const data = await client.shippingOptions
      .listCartOptions(state.cart.id)
      .then((res) => {
        return res.shipping_options
      })

    if (data) {
      return data
    } else {
      return undefined
    }
  }

  const setShippingMethod = async (id) => {
    return await client.carts
      .addShippingMethod(state.cart.id, {
        option_id: id
      })
      .then((data) => {
        dispatch({ type: "setCart", payload: data.cart })
      })
  }

  const createPaymentSession = async () => {
    return await client.carts
      .createPaymentSessions(state.cart.id)
      .then((data) => {
        dispatch({ type: "setCart", payload: data.cart })
        return data
      })
  }

  const completeCart = async () => {
    const data = await client.carts.complete(state.cart.id).then((data) => data)

    if (data) {
      return data.data
    } else {
      return undefined
    }
  }

  const retrieveOrder = async (orderId) => {
    const data = await client.orders.retrieve(orderId).then((data) => data)

    if (data) {
      return data.order
    } else {
      return undefined
    }
  }

  const updateAddress = (address, email) => {
    client.carts
      .update(state.cart.id, {
        shipping_address: address,
        billing_address: address,
        email: email
      })
      .then((data) => {
        dispatch({ type: "setCart", payload: data.cart })
      })
  }

  return (
    <StoreContext.Provider
      value={{
        ...state,
        setCurrencyCode,
        addVariantToCart,
        createCart,
        removeLineItem,
        updateLineItem,
        getShippingOptions,
        setShippingMethod,
        createPaymentSession,
        setPaymentSession,
        updateAddress,
        completeCart,
        retrieveOrder,
        dispatch
      }}
    >
      {children}
    </StoreContext.Provider>
  )
}
