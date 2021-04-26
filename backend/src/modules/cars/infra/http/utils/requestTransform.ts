export const transformSort = (sort: string | undefined): Record<string, 'asc' | 'desc'> | undefined => {
    if(!sort) return undefined;
    const sortArr = sort.split(',');
    return {[sortArr[0]]: sortArr[1] === 'desc' ? sortArr[1] : 'asc'};
}