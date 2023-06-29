import { Flex, Group, CloseButton, Text } from '@mantine/core';

const Destroy = (props) => {
    const { data } = props
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
                    />
                </Group>
            })
            }

        </Flex>
    )
}

export default Destroy
