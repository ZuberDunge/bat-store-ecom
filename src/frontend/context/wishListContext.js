import { createContext, useEffect, useState, useRef } from 'react';
import axios from 'axios';
export const WishListContext = createContext()

const WishListContextProvider = (props) => {
    const [wishList, setWishList] = useState([])
    const [isLogged, setisLogged] = useState(true)

    let token = localStorage.getItem("userToken")
    useEffect(() => {
        axios.get("/api/user/wishlist", {
            headers: { authorization: token }
        }).then(res => {
            console.log(res.data);
            setWishList(res.data.wishlist)
        }).catch((error) => {
            // here you will have access to error.response
            console.log(error.response.data)
        })
    }, [])


    const deleteItemWishList = (id) => {
        axios.delete("/api/user/wishlist/" + id.toString(), {
            headers: { authorization: token }
        }).then(res => {
            console.log("delte wishlist", res);
            setWishList(res.data.wishlist)
        }).catch((error) => {
            console.log(error.response.data)
        })
    }
    const checkIfInWishList = (id) => {
        const found = wishList.some(item => item._id === id);
        if (!found) {
            return false
        } else {
            return true
        }
    }

    const addToWishList = (product) => {
        console.log('add', product.id);
        const found = wishList.some(item => item._id === product._id);
        if (!found) {
            let token = localStorage.getItem("userToken")
            // newCart = [...cart, { ...product, quantity: 1 }];
            axios.post("/api/user/wishlist", { product }, {
                headers: { authorization: token }
            }).then(res => {
                console.log(res);
                setWishList(res.data.wishlist)
            }).catch((error) => {
                // here you will have access to error.response
                console.log(error.response.data)
            })
        } else {
            console.log("already in wishlist");
        }
    };

    const checkAndAddToWishList = (item) => {
        let token = localStorage.getItem("userToken")
        if (token == null) {
            setisLogged(false)
            setTimeout(() => {
                setisLogged(true)
            }, 2000)
            console.log("settime");
        } else {
            addToWishList(item)
            console.log("add");
        }
    }
    return (
        <WishListContext.Provider value={{ checkIfInWishList, checkAndAddToWishList, isLogged, setisLogged, addToWishList, deleteItemWishList, wishList, setWishList }}>
            {props.children}
        </WishListContext.Provider>
    )
}

export default WishListContextProvider;
