import React, { useContext } from 'react'
import { FilterContext } from '../frontend/context/filterContext';

export default function FilterSection() {

    const { products, dispatch, filteredProducts, filteredList } = useContext(FilterContext)
    console.log(filteredList);

    console.log(filteredProducts);
    return (


        <div id="filters">
            <div
                id="filters-btn"
                className="filter-heading bat-fw-600 bat-flex bat-justify-between bat-align-center"
            >
                Filters
                <span id="cat-icon" className="material-icons">
                    keyboard_double_arrow_down
                </span>
            </div>

            <div className="filters">
                <div onClick={() => dispatch({ type: "CLEAR_FILTERS" })}
                    className="filter-heading bat-fw-400 bat-flex bat-justify-end bat-align-center"
                >
                    Clear
                </div>
                <div className="sorting bat-mar-tb-1 bat-flex bat-flx-dir-col">
                    <span className="filter-type">PRICE</span>

                    <label className="bat-flex bat-gap-8px bat-align-center" for="sort">
                        <input type="range" step="25" className="width-100" onChange={(e) => dispatch({ type: "PRICE_RANGE", payload: e.target.value })} list="tickmarks" />
                        <datalist id="tickmarks">
                            <option value="0"></option>
                            <option value="25"></option>
                            <option value="50"></option>
                            <option value="75"></option>
                            <option value="100"></option>
                        </datalist>
                    </label>
                </div>
                <div className="sorting bat-mar-tb-1 bat-flex bat-flx-dir-col">
                    <span className="filter-type">SORT</span>
                    <form>
                        <label
                            className="bat-flex bat-gap-8px bat-align-center"
                            for="SORT"
                        >
                            <input
                                checked={filteredList?.sortBy === "LOW_TO_HIGH"}
                                onChange={() => dispatch({ type: "SORT_BY", payload: "LOW_TO_HIGH" })} type="radio"
                            />
                            Low to High
                        </label                        >
                        <label
                            className="bat-flex bat-gap-8px bat-align-center"
                            for="SORT"
                        >
                            <input type="radio" checked={filteredList?.sortBy === "HIGH_TO_LOW"} name="SORT" id="" onChange={() => dispatch({ type: "SORT_BY", payload: "HIGH_TO_LOW" })} />High to
                            Low</label
                        >
                    </form>
                </div>
                <div className="sorting bat-mar-tb-1 bat-flex bat-flx-dir-col">
                    <span className="filter-type">CATEGORIES</span>
                    <label className="bat-flex bat-gap-8px bat-align-center" for="sort"
                    ><input
                            type="checkbox"
                            checked={
                                filteredList?.categories &&
                                filteredList?.categories.includes("MARVEL")
                            }
                            onChange={() =>
                                dispatch({
                                    type: "CATEGORY",
                                    payload: "MARVEL",
                                })
                            }
                        />MARVEL</label
                    >
                    <label className="bat-flex bat-gap-8px bat-align-center" for="sort"
                    ><input type="checkbox" checked={
                        filteredList?.categories &&
                        filteredList?.categories.includes("DC")
                    }
                        onChange={() =>
                            dispatch({
                                type: "CATEGORY",
                                payload: "DC",
                            })
                        } />DC</label
                    >

                </div>
                <div className="sorting bat-mar-tb-1 bat-flex bat-flx-dir-col">
                    <span className="filter-type">RATINGS</span>
                    <label className="bat-flex bat-gap-8px bat-align-center" name="high-to-low" for="sort"
                    ><input type="radio"
                        checked={filteredList.rating == 4}
                        onChange={() => dispatch({ type: "RATING", payload: 4 })}
                        />4
                        <span className="material-icons"> star </span> & Above
                    </label>
                    <label className="bat-flex bat-gap-8px bat-align-center" for="sort"
                    ><input type="radio"
                        checked={filteredList.rating == 3}
                        onChange={() => dispatch({ type: "RATING", payload: 3 })}
                        />3
                        <span className="material-icons"> star </span> & Above</label
                    >
                    <label className="bat-flex bat-gap-8px bat-align-center" for="sort"
                    ><input type="radio"
                        checked={filteredList.rating == 2}
                        onChange={() => dispatch({ type: "RATING", payload: 2 })}
                        />2
                        <span className="material-icons"> star </span> & Above</label
                    >
                </div>
                <div className="sorting bat-mar-tb-1 bat-flex bat-flx-dir-col">
                    <span className="filter-type">HEROES</span>
                    <label className="bat-flex bat-gap-8px bat-align-center" for="sort"
                    >
                        <input type="checkbox"
                            checked={
                                filteredList?.heroes &&
                                filteredList?.heroes.includes("BATMAN")
                            }
                            onChange={() =>
                                dispatch({
                                    type: "SUPERHEROES",
                                    payload: "BATMAN",
                                })
                            }

                        />BATMAN
                    </label>
                    <label className="bat-flex bat-gap-8px bat-align-center" for="sort"
                    >
                        <input type="checkbox"
                            checked={
                                filteredList?.heroes &&
                                filteredList?.heroes.includes("BLACKPANTHER")
                            }
                            onChange={() =>
                                dispatch({
                                    type: "SUPERHEROES",
                                    payload: "BLACKPANTHER",
                                })
                            }

                        />BLACK PANTHER
                    </label>
                    <label className="bat-flex bat-gap-8px bat-align-center" for="sort"
                    >
                        <input type="checkbox"
                            checked={
                                filteredList?.heroes &&
                                filteredList?.heroes.includes("THOR")
                            }
                            onChange={() =>
                                dispatch({
                                    type: "SUPERHEROES",
                                    payload: "THOR",
                                })
                            }

                        />THOR
                    </label>
                    <label className="bat-flex bat-gap-8px bat-align-center" for="sort"
                    >
                        <input type="checkbox"
                            checked={
                                filteredList?.heroes &&
                                filteredList?.heroes.includes("WONDERWOMAN")
                            }
                            onChange={() =>
                                dispatch({
                                    type: "SUPERHEROES",
                                    payload: "WONDERWOMAN",
                                })
                            }

                        />WONDER WOMAN
                    </label>
                    <label className="bat-flex bat-gap-8px bat-align-center" for="sort"
                    >
                        <input type="checkbox"
                            checked={
                                filteredList?.heroes &&
                                filteredList?.heroes.includes("SUPERMAN")
                            }
                            onChange={() =>
                                dispatch({
                                    type: "SUPERHEROES",
                                    payload: "SUPERMAN",
                                })
                            }

                        />SUPERMAN
                    </label>

                    <label className="bat-flex bat-gap-8px bat-align-center" for="sort"
                    >
                        <input type="checkbox"
                            checked={
                                filteredList?.heroes &&
                                filteredList?.heroes.includes("DEADPOOL")
                            }
                            onChange={() =>
                                dispatch({
                                    type: "SUPERHEROES",
                                    payload: "DEADPOOL",
                                })
                            }

                        />DEADPOOL
                    </label>
                    <label className="bat-flex bat-gap-8px bat-align-center" for="sort"
                    >
                        <input type="checkbox"
                            checked={
                                filteredList?.heroes &&
                                filteredList?.heroes.includes("ROBIN")
                            }
                            onChange={() =>
                                dispatch({
                                    type: "SUPERHEROES",
                                    payload: "ROBIN",
                                })
                            }

                        />ROBIN
                    </label>

                </div>
                <div className="sorting bat-mar-tb-1 bat-flex bat-flx-dir-col">
                    <span className="filter-type">AVAILABILITY</span>
                    <label className="bat-flex bat-gap-8px bat-align-center" for="sort"
                    ><input type="checkbox" checked={
                        filteredList?.inStock
                    }
                        onChange={() =>
                            dispatch({
                                type: "STOCK_AVAILABILITY",
                            })
                        } />Include Out
                        Of Stock</label
                    >
                </div>
            </div>
        </div>


    )
}