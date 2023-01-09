import { Box, Card, CardBody, Heading, Image, Stack, Text } from '@chakra-ui/react'
import React from 'react'

interface CardProps {
    data: {
        title: string,
        description: string,
        img: string,
    }

}
export const BlogCard: React.FC<CardProps> = ({ data }) => {
    return (
        <Box maxW='277px'>

            <Image
                src={data.img}
                alt={data.title}
                borderRadius='lg'
                w='100%'
            />
            <Stack mt='6' spacing='3'>
                <Heading className='blogTitle' size='md'>{data.title}</Heading>
                <Text className='blogDescription'>
                    {data.description}
                </Text>

            </Stack>

        </Box>
    )
}
