export const calculateDiscount = (initial, persent) => {
    return initial - Math.round((persent / 100) * initial)
}

export const calculateTotalDiscount = (total, currentValue) => {
    let discount = Math.round((currentValue.discount / 100) * currentValue.price)
    return total + (discount * currentValue.qty)
}