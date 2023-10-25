interface FilmAtributes {
    id: number,
    attributes: {
        titre: string,
        description: string,
        dateSortie: string,
        duree: number,
        createdAt: string,
        updatedAt: string,
    }
}

export interface FilmData {
    data: FilmAtributes[]
}