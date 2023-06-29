import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Loader, Container, Button, Flex, Box, TextInput, NumberInput } from '@mantine/core'
import Item from './Item';

const Show = () => {
    const [itemData, setItemData] = useState()
    const [editOn, setEditOn] = useState(false)

    const [name, setName] = useState('');
    const [image, setImage] = useState('')
    const [likes, setLikes] = useState(0);

    const [updated, setUpdated] = useState(false)

    // item id from the params
    const { id } = useParams();

    // get item data from db
    function getItem(id) {
        fetch(`http://localhost:3001/toys/${id}`)
            .then(res => res.json())
            .then(data => setItemData(data))
            .catch(error => alert(error)) // show alert incase of an error
    }

    function clickEdit() {
        if (editOn === true) {
            setEditOn(false)
        }
        else { // populate edit fields with item data
            setEditOn(true)
            setName(itemData.name)
            setImage(itemData.image)
            setLikes(itemData.likes)
        }
    }

    // update item in the db
    function updateItem() {
        const configObj = {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ // request body from states
                name: name,
                image: image,
                likes: likes,
            })
        }
        fetch(`http://localhost:3001/toys/${id}`, configObj)
            .then(res => res.json())
            // .then(data => setItemData(data))
            .then(setEditOn(false))
            .then(setUpdated(true)) // to trigger rerender to fetch updated item data
            .catch(error => alert(error)) // show alert incase of an error
    }
    useEffect(() => {
        getItem(id)
        setUpdated(false)
    }, [id, updated]) //rerender when id changes

    if (itemData === undefined)
        return <Loader />
    else
        return (
            <Flex
                direction="row"
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
                <Flex
                    w="50%"
                    direction="column"
                >
                    <Button
                        w="30%"
                        onClick={() => {
                            clickEdit()
                        }}
                    >
                        Edit
                    </Button>
                    {
                        editOn && // shows when editOn is true
                        <Flex
                            direction="column"
                            align="start"
                            gap="xl"
                        >
                            <TextInput
                                label="Name"
                                placeholder="Change The Toy Name"
                                w="70%"
                                value={name}
                                required
                                onChange={(event) => setName(event.currentTarget.value)}
                            />
                            <TextInput
                                label="Image"
                                placeholder="Change The Image Link"
                                w="70%"
                                value={image}
                                required
                                onChange={(event) => setImage(event.currentTarget.value)}
                            />
                            <NumberInput
                                label="Likes"
                                placeholder="Change The Toy Likes"
                                w="70%"
                                value={likes}
                                onChange={setLikes}
                            />
                            <Button
                                w="40%"
                                color="green"
                                disabled={name === '' || image === ''}
                                onClick={() => updateItem()}
                            >
                                Save Changes
                            </Button>
                        </Flex>
                    }
                </Flex>
            </Flex>
        )
}

export default Show
