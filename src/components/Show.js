import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Loader, Container, Button, Flex, Box } from '@mantine/core'
import Item from './Item';

const Show = () => {
    const [itemData, setItemData] = useState()

    // item id from the params
    const { id } = useParams();

    // get item data from db
    function getItem(id) {
        fetch(`http://localhost:3001/toys/${id}`)
            .then(res => res.json())
            .then(data => setItemData(data))
            .catch(error => alert(error)) // show alert incase of an error
    }
    useEffect(() => {
        getItem(id)

    }, [id]) //rerender when id changes

    if (itemData === undefined)
        return <Loader />
    else
        return (
            <Flex
                direction="row"
                //  align="center"
                //  justify="center"
                gap="xl"
                m="xl"
                miw="100vw"
            >
                <Box
                    w="50%"
                >
                    <Item
                        item_data={itemData}
                    />
                </Box>
                <Button
                    w="50%"
                >
                    Edit
                </Button>
            </Flex>
        )
}

export default Show
