export interface FilmDetailInterface {
        attributes: {
            titre: string;
            dateSortie: string;
            description: string;
            images: {
                data: FilmDetailImages[];
            }
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

interface FilmDetailImages {
    id: number;
    attributes: {
        url: string;
    }
}