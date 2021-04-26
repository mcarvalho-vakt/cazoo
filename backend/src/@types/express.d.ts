declare namespace Express {
    export interface Response {
        paginatedResults: {
            next: {},
            previous: {},
            results: {}
        }
    }
}