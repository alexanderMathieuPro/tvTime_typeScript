export interface FilmDetailInterface {
        attributes: {
            titre: string;
            dateSortie: string;
            description: string;
            cover: {
                data: {
                    attributes: {
                        url: string;
                    };
                };
            };
        };
        id: number;
}