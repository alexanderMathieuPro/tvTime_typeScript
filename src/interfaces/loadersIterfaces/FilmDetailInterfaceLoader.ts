export interface FilmData {
    data: {
        attributes: {
            titre: string;
            dateSortie: string;
            cover: {
                data: {
                    attributes: {
                        url: string;
                    };
                };
            };
        };
        id: number;
    };
}

export interface Param {
    id: string;
}