export const formatPrice = (price) => {
    if (!String(price).includes('.')) {
        return `${price}.00`;
    }
    return price;
}