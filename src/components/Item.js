import { Image, Stack, Text, Badge } from '@mantine/core';

const Item = (props) => {
    const { name, image, likes } = props.item_data
    return (
        <Stack
            align="center"
            justify="space-between"
            spacing="sm"
            bg="gray.7"
        >
            <Image
                src={image}
                fit="contain"
                alt={name}
            />
            <Text
                color="white"
                align="center"
                size="xl"
                m="md"
            >
                {name}
            </Text>
            <Badge
                color="teal"
                variant="filled"
                size="lg"
                m="lg"
            >
                {likes}
            </Badge>
        </Stack>
    )
}

export default Item
