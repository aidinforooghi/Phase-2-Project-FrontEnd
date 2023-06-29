import { useState } from 'react';
import { Flex, TextInput , NumberInput } from '@mantine/core';

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
                    onChange={(event) => setValue(event.currentTarget.value)}
                />
                <TextInput
                    label="Image"
                    placeholder="Enter The Image Link"
                    w="70%"
                    value={value}
                    onChange={(event) => setValue(event.currentTarget.value)}
                />
                <NumberInput  
                    label="Likes"
                    placeholder="Enter The Toy Likes"
                    w="70%"
                    value={nnn } 
                    onChange={setnnn} 
                />
                
            </Flex>
        </form>
    )
}

export default New
