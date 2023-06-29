import { useState, useEffect } from 'react';
import { SimpleGrid } from '@mantine/core';
import Item from './Item';

const Home = () => {
    const [data, setData] = useState([])

    //get all data
    async function getAllData() {
        await fetch("http://localhost:3001/toys")
            .then(res => res.json())
            .then(data => setData(data))
    }

    useEffect(() => {
        getAllData()
        return () => {

        }
    }, [])
    return (
        <SimpleGrid
            cols={4}
            spacing="lg"
            m="xl"
        >
            {data.map((d) => {
                return <Item
                    key={d.id}
                    item_data={d}
                />
            })

            }
        </SimpleGrid>
    )
}

export default Home
