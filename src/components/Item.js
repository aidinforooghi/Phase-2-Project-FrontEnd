import { Image, Stack, Text, Badge } from '@mantine/core';
import { useNavigate } from 'react-router-dom'

const Item = (props) => {
    const { name, image, likes ,id} = props.item_data
    let navigate = useNavigate();

    return (
        <Stack
            align="center"
            justify="space-between"
            spacing="sm"
            bg="gray.7"
            sx={{
                '&:hover': {
                    cursor:"pointer"
                }
            }}
        >
            <Image
                src={image}
                fit="contain"
                alt={name}
                onClick={()=>navigate(`/show/${id}`)} 
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
