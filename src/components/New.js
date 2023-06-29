import { useState } from 'react';
import { Flex, TextInput } from '@mantine/core';

const New = () => {

    const [value, setValue] = useState('');

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
                    placeholder="Add Link To The Image"
                    w="70%"
                    value={value}
                    onChange={(event) => setValue(event.currentTarget.value)}
                />
                
            </Flex>
        </form>
    )
}

export default New
