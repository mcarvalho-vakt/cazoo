export default interface IFindCarDTO {
    limit?: number;
    skip?: number;
    sort?: Record<string, 'asc' | 'desc'>;
    maker?: string;
    color?: string;
}