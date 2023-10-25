import { FilmData } from '../interfaces/HomeLoaderInterface'
export const HomeLoader = async (): Promise<FilmData> => {
    const data : FilmData = await fetch('http://localhost:1337/api/films?populate=*&sort=createdAt:desc', {
        method: 'GET',
        headers: {
            "Authorization": `Bearer ${localStorage.getItem('token')}`,
        }
    })
    .then((res) => res.json())
    return data
}