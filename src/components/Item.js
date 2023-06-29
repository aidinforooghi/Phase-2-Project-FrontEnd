import { Image, Stack ,Text} from '@mantine/core';

const Item = (props) => {
    const { name, image } = props.item_data
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
        </Stack>
    )
}

export default Item
