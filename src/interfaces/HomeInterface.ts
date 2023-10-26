export interface FilmAtributes {
    attributes: {
      titre: string;
      dateSortie: string;
      cover: {
        data: {
          attributes: {
            url: string;
          };
        }
      };
    };
    id: number;
  }