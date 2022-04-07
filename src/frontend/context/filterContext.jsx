import { createContext, useEffect, useState, useReducer } from 'react';
import axios from 'axios';
import { filteredCategoryList, filteredPriceRangeList, filteredHeroList, filteredPriceList, filteredRatingList, filteredStockList } from './../reducers/reducerFunctions';

export const FilterContext = createContext()

const FilterContextProvider = (props) => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        axios.get("/api/products").then(res => {
            console.log(res.data);
            setProducts(res.data.products)
        }).catch((error) => {
            // here you will have access to error.response
            console.log(error.response.data)
        })
    }, [])


    const initialState = {
        sortBy: "",
        categories: [],
        heroes: [],
        inStock: false,
        rating: null,
        priceRange: 0
    }

    const sortData = (filteredList, action) => {
        switch (action.type) {
            case "SORT_BY": {
                if (action.payload === "LOW_TO_HIGH") {
                    return { ...filteredList, sortBy: action.payload }
                } else if (action.payload === "HIGH_TO_LOW") {
                    return { ...filteredList, sortBy: action.payload }
                } else {
                    return { ...filteredList }
                }
            }
            case "CATEGORY": {
                if (action.payload === "MARVEL") {
                    return {
                        ...filteredList, categories: filteredList.categories.includes(action.payload)
                            ? filteredList.categories.filter((item) => item !== action.payload)
                            : [...filteredList.categories, action.payload]
                    }
                } else if (action.payload === "DC") {
                    return {
                        ...filteredList, categories: filteredList.categories.includes(action.payload)
                            ? filteredList.categories.filter((item) => item !== action.payload)
                            : [...filteredList.categories, action.payload]
                    }
                } else {
                    return { ...filteredList }
                }
            }
            case "SUPERHEROES": {
                return {
                    ...filteredList, heroes: filteredList.heroes.includes(action.payload)
                        ? filteredList.heroes.filter((item) => item !== action.payload)
                        : [...filteredList.heroes, action.payload]
                }
            }
            case "STOCK_AVAILABILITY": {
                return { ...filteredList, inStock: !filteredList.inStock, }
            }
            case "RATING": {
                return { ...filteredList, rating: action.payload, }
            }
            case "PRICE_RANGE": {
                console.log(filteredList.priceRange, action.payload);
                return { ...filteredList, priceRange: action.payload, }
            }
            case "CLEAR_FILTERS": {
                return { ...initialState }
            };
        }

    }
    const [filteredList, dispatch] = useReducer(sortData, initialState)




    const sortedData = filteredList.sortBy !== "" ? filteredPriceList(filteredList.sortBy, products) : products;
    const sortedCategoryData =
        filteredList.categories.length !== 0
            ? filteredCategoryList(filteredList.categories, sortedData)
            : sortedData;

    const sortedHeroData =
        filteredList.heroes.length !== 0
            ? filteredHeroList(filteredList.heroes, sortedCategoryData)
            : sortedCategoryData;

    const sortedStockData = filteredStockList(filteredList.inStock, sortedHeroData);

    const sortedRatingData = filteredRatingList(filteredList.rating, sortedStockData);
    const sortedPriceRangeData = filteredPriceRangeList(filteredList.priceRange, sortedRatingData);

    const filteredProducts = sortedPriceRangeData;
    console.log(filteredList);
    return (
        <FilterContext.Provider value={{ filteredProducts, filteredList, dispatch, products }}>
            {props.children}
        </FilterContext.Provider>
    )
}

export default FilterContextProvider;

