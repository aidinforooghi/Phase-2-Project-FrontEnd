import { SimpleGrid } from '@mantine/core';
import Item from './Item';

const Home = (props) => {

    const {data} = props

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
