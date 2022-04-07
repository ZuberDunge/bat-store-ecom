import { calculateDiscount } from "../pages/discount";

export function filteredPriceList(sortBy, productList) {
    if (sortBy === "HIGH_TO_LOW") {
        return [...productList].sort((a, b) => calculateDiscount(b.price, b.discount) - calculateDiscount(a.price, a.discount));
    }
    if (sortBy === "LOW_TO_HIGH") {
        return [...productList].sort((a, b) => calculateDiscount(a.price, a.discount) - calculateDiscount(b.price, b.discount));
    }
    return productList;
}

export function filteredCategoryList(categories, productList) {
    return [...productList].filter((item) =>
        categories.includes(item.categoryName)
    );
}

export function filteredHeroList(heroes, productList) {
    console.log(heroes);
    return [...productList].filter((item) =>
        heroes.some(hero => item.superHeroes.includes(hero))
    );
}

export function filteredStockList(stock, productList) {
    if (stock) {
        return productList
    } else {
        return productList.filter((item) => item.stockAvailability === true);
    }
}

export function filteredRatingList(rating, productList) {
    if (rating != null) {
        return [...productList].filter((item) =>
            item.rating >= rating
        );
    } else {
        return productList
    }

}

export function filteredPriceRangeList(priceRange, productList) {
    console.log(priceRange);
    if (priceRange == "25") {
        return [...productList].filter((item) => calculateDiscount(item.price, item.discount) >= 600);
    } else if (priceRange == "50") {
        return [...productList].filter((item) => calculateDiscount(item.price, item.discount) >= 1200);
    } else if (priceRange == "75") {
        return [...productList].filter((item) => calculateDiscount(item.price, item.discount) >= 1800);
    } else if (priceRange == "100") {
        return [...productList].filter((item) => calculateDiscount(item.price, item.discount) >= 2400);
    } else {
        return productList;
    }

}