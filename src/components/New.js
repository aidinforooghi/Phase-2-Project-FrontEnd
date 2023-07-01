import { useState } from 'react';
import { Flex, TextInput, NumberInput, Button } from '@mantine/core';

const New = (props) => {
    const { addNewItem } = props
    const [name, setName] = useState('');
    const [image, setImage] = useState('')
    const [likes, setLikes] = useState(0);

    // function to clear the states 
    function clearStates() {
        setName('')
        setImage('')
        setLikes(0)
    }

    // add a new item to the db
    function addNew() {
        const configObj = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ // request body from states
                name: name,
                image: image,
                likes: likes,
            })
        }
        fetch(`${process.env.REACT_APP_API_URL}/toys`, configObj)
            .then(res => res.json())
            .then(data => addNewItem(data)) //add the new item to the app state
            .then(clearStates())
            .catch(error => alert(error)) // show alert incase of an error
    }

    return (
        <Flex
            direction="column"
            align="center"
            gap="xl"
            m="xl"
        >
            <TextInput
                label="Name"
                placeholder="Enter The Toy Name"
                w="70%"
                value={name}
                required
                onChange={(event) => setName(event.currentTarget.value)}
            />
            <TextInput
                label="Image"
                placeholder="Enter The Image Link"
                w="70%"
                value={image}
                required
                onChange={(event) => setImage(event.currentTarget.value)}
            />
            <NumberInput
                label="Likes"
                placeholder="Enter The Toy Likes"
                w="70%"
                value={likes}
                onChange={setLikes}
            />
            <Button
                type="submit"
                w="40%"
                disabled={name === '' || image === ''}
                onClick={() => addNew()}
            >
                Add New
            </Button>
        </Flex>
    )
}

export default New
