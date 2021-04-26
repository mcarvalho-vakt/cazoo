export const skipIndex = (page: string | undefined, limit: string | undefined): number => {
    const resultIndex = page && limit ? (parseInt(page) - 1) * parseInt(limit) : 0;
    if(resultIndex < 0) return 0;
    return resultIndex;
}

export const limitIndex = (limit: string | undefined) => {
    return limit ? parseInt(limit) : 0;
}