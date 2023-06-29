import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Loader, Container, Button, Flex, Box ,TextInput,NumberInput } from '@mantine/core'
import Item from './Item';

const Show = () => {
    const [itemData, setItemData] = useState()
    const [editOn, setEditOn] = useState(false)

    const [name, setName] = useState('');
    const [image, setImage] = useState('')
    const [likes, setLikes] = useState(0);

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
        if (editOn===true ){
            setEditOn(false)
        }
        else {
            setEditOn(true)
            setName(itemData.name)
            setImage(itemData.image)
            setLikes(itemData.likes)
        }
        
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
                        editOn &&
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
                              //  onClick={() => addNew()}
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
