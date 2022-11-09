const Movie = ({image,title}) => {
    return (
        <div className='movie_block'>
        <img src={image} alt={title}/>
     <h1>privet</h1>
        <h3>{title}</h3>
        </div>
    )
}

export default Movie;