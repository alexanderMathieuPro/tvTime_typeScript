export interface Categories {
    id: number, 
    attributes: {
        nom: string
    }
}

export interface UserInputs {
    titre: string;
    description: string;
    duree: number;
    dateSortie: string;
    cover: number;
    categories: UserInputsCategories[];
}

interface UserInputsCategories{
    id: number;
}