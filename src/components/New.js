import { useState } from 'react';
import { Flex, TextInput , NumberInput  , Button} from '@mantine/core';

const New = () => {

    const [value, setValue] = useState('');
    const [nnn, setnnn] = useState(0);

    return (
        <form>
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
                    value={value}
                    required
                    onChange={(event) => setValue(event.currentTarget.value)}
                />
                <TextInput
                    label="Image"
                    placeholder="Enter The Image Link"
                    w="70%"
                    value={value}
                    required
                    onChange={(event) => setValue(event.currentTarget.value)}
                />
                <NumberInput  
                    label="Likes"
                    placeholder="Enter The Toy Likes"
                    w="70%"
                    value={nnn } 
                    onChange={setnnn} 
                />
                <Button
                    type="submit"
                    w="40%"
                >
                    Create New
                </Button>
            </Flex>
        </form>
    )
}

export default New
