export type Film = {
    id: string;
    title: string;
    description: string;
    image: string;
    movie_banner: string;
    release_date: string;
    running_time: string;
  };
  
  export type FavoriteItem = Pick<Film, 'id' | 'title' | 'image'>;
  
  export type FilmsStackParamList = {
    FilmsList: undefined;
    FilmDetail: { film: Film };
  };
  
  export type FavoritesStackParamList = {
    FavoritesList: undefined;
    FilmDetail: { film: Film };
  };
  
  export type GhibliTabParamList = {
    FilmsTab: undefined;
    FavoritesTab: undefined;
  };
  