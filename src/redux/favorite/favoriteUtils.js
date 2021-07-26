export const addMovieToFavorite = (favoriteMovie, favoriteMovieToAdd) => {
    const existingFavoriteMovie = favoriteMovie.find(
        movie => movie.imdbID === favoriteMovieToAdd.imdbID
    );

    if (existingFavoriteMovie) {
        return favoriteMovie.map(movie =>
            movie.imdbID === favoriteMovieToAdd.imdbID ?
                { ...movie }
                : movie
        )
    }

    return [...favoriteMovie, { ...favoriteMovieToAdd }]
};
