import { createContext, useEffect, useState, useRef } from 'react';
import axios from 'axios';
export const CartContext = createContext()

const CartContextProvider = (props) => {
    const [cart, setCart] = useState([])

    const deleteItem = (id) => {
        setCart(cart.filter(cart => cart._id !== id))
    }

    let token = localStorage.getItem("userToken")
    console.log(token);

    const increaseItem = (id) => {
        console.log(id);
        axios.post("/api/user/cart/" + id.toString(), {
            action: {
                type: "increment"
            }
        }, {
            headers: { authorization: token }
        }).then(res => {
            console.log("incr", res);
            setCart(res.data.cart)
        }).catch((error) => {
            console.log(error.response.data)
        })
    }


    const addItem = (product) => {

        // if (token != null) {
        // setisLogged(true)
        console.log('add', product._id);
        const found = cart.some(item => item._id === product._id);
        console.log(found, cart);
        if (!found) {
            let token = localStorage.getItem("userToken")
            console.log(token);
            axios.post("/api/user/cart", { product }, {
                headers: { authorization: token }
            }).then(res => {
                console.log(res);
                setCart(res.data.cart)
            }).catch((error) => {
                // here you will have access to error.response
                console.log(error.response.data)
            })
        } else {
            increaseItem(product._id)
        }
        // }

    };


    useEffect(() => {
        axios.get("/api/user/cart", {
            headers: { authorization: token }
        }).then(res => {
            console.log(res.data);
            setCart(res.data.cart)
        }).catch((error) => {
            // here you will have access to error.response
            console.log(error.response.data)
        })
    }, [])

    const decreaseQuantity = (product) => {
        if (product.qty >= 2) {
            axios.post("/api/user/cart/" + product._id.toString(), {
                action: {
                    type: "decrement"
                }
            }, {
                headers: { authorization: token }
            }).then(res => {
                console.log("incr", res);
                setCart(res.data.cart)
            }).catch((error) => {
                console.log(error.response.data)
            })

        } else {
            deleteFromCart(product._id)
        }
    }

    const deleteFromCart = (id) => {
        axios.delete("/api/user/cart/" + id.toString(), {
            headers: { authorization: token }
        }).then(res => {
            console.log("incr", res);
            setCart(res.data.cart)
        }).catch((error) => {
            console.log(error.response.data)
        })
    }


    return (
        <CartContext.Provider value={{ increaseItem, deleteFromCart, cart, setCart, deleteItem, decreaseQuantity, addItem }}>
            {props.children}
        </CartContext.Provider>
    )
}

export default CartContextProvider;
