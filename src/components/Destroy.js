import { Flex, Group, CloseButton, Text } from '@mantine/core';

const Destroy = (props) => {
    const { data, removeItem } = props

    // delete item from the db, item id is passed to the function
    function deleteItem(id) {

        const configObj = {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },

        }

        fetch(`${process.env.REACT_APP_API_URL}/toys/${id}`, configObj)
            .then(res => res.json())
            .then(removeItem(id))
            .catch(error => alert(error)) // show alert incase of an error

    }
    return (
        <Flex
            direction="column"
            align="center"
            gap="xl"
            m="xl"
        >
            {data.map((d) => {
                return <Group
                    key={d.id}
                    w="70%"
                    bg="gray.7"
                    p="md"
                    position="apart"
                >
                    <Text
                        color="white"
                        align="center"
                        size="xl"
                        m="md"
                    >
                        {d.name}
                    </Text>
                    <CloseButton
                        color="red"
                        size="xl"
                        iconSize={30}
                        onClick={() => deleteItem(d.id)}
                    />
                </Group>
            })
            }

        </Flex>
    )
}

export default Destroy
