export const calculateTotalPages = (totalItems, itemsPerPage) => {
    let paginationInfo;
    if (totalItems <= 0) {
        paginationInfo = {
            limit: itemsPerPage,
            totalPages: 0,
        };
        return paginationInfo;
    }

    paginationInfo = {
        limit: itemsPerPage,
        totalPages: Math.ceil(totalItems / itemsPerPage),
    }
    return paginationInfo;
};