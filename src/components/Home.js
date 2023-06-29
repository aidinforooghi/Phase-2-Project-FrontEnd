import { useState, useEffect } from 'react';
import { SimpleGrid } from '@mantine/core';

const Home = () => {
    const [movies, setMovies] = useState([])

    //get all movies
    async function getAllMovies() {
        await fetch("http://localhost:3001/toys")
            .then(res => res.json())
            .then(data => setMovies(data))
    }

    useEffect(() => {
        getAllMovies()
        return () => {

        }
    }, [])
    return (
        <SimpleGrid
            cols={4}
            spacing="lg"
            m="xl"
        >
            {movies.map((movie) => {
                return <div key={movie.id}>
                    {movie.name}
                </div>
            })

            }
        </SimpleGrid>
    )
}

export default Home
