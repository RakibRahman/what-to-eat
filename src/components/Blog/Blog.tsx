import React from 'react'
import { BlogCard } from './BlogCard'
import Blog1 from '../../assets/blog1.png'
import Blog2 from '../../assets/blog2.png'
import BlogM from '../../assets/blogM.png'
import Blog3 from '../../assets/blog5.png'
import Blog4 from '../../assets/blog4.png'
import { Box, Center, Container, Flex, Heading, Image, SimpleGrid, Stack, TableContainer, Text } from '@chakra-ui/react'
import './Blog.css'
export const Blog = () => {
    const blogData = [{
        id: 1,
        title: 'Most Satisfying Cake decorating Cake ideas',
        description: 'Quis hendrerit nibh mauris sed faucibus.Quis hendrerit nibh mauris sed faucibus.',
        img: Blog1
    },
    {
        id: 2,
        title: 'Most Satisfying Cake decorating Cake ideas',
        description: 'Quis hendrerit nibh mauris sed faucibus.Quis hendrerit nibh mauris sed faucibus.',
        img: Blog2
    },
    {
        id: 3,
        title: 'Most Satisfying Cake decorating Cake ideas',
        description: 'Quis hendrerit nibh mauris sed faucibus.Quis hendrerit nibh mauris sed faucibus.',
        img: Blog3
    },
    {
        id: 4,
        title: 'Most Satisfying Cake decorating Cake ideas',
        description: 'Quis hendrerit nibh mauris sed faucibus.Quis hendrerit nibh mauris sed faucibus.',
        img: BlogM
    },
    {
        id: 5,
        title: 'Most Satisfying Cake decorating Cake ideas',
        description: 'Quis hendrerit nibh mauris sed faucibus.Quis hendrerit nibh mauris sed faucibus.',
        img: Blog4
    },

    ]
    return (
        <Box px={[5, 20, 40]} py={20}>
            <Stack alignItems='center' justifyContent='center'>
                <Heading textAlign={'center'} ml={['10px', '210px']}>Our Blog</Heading>


                <Box className="container">
                    <Box className="item item1"><BlogCard data={blogData[0]} /></Box>
                    <Box className="item item2"><BlogCard data={blogData[1]} /></Box>
                    <Box className="item item3">

                        <Box>

                            <Image
                                src={blogData[3].img}
                                alt={blogData[3].title}
                                borderRadius='lg'
                                w='100%'
                            />
                            <Stack mt='6' spacing='3'>
                                <Heading className='blogTitle' size='md'>{blogData[3].title}</Heading>
                                <Text className='blogDescription'>
                                    {blogData[3].description}
                                </Text>

                            </Stack>

                        </Box>
                    </Box>
                    <Box className="item item4">
                        <BlogCard data={blogData[2]} />
                    </Box>
                    <Box className="item item5"><BlogCard data={blogData[4]} /></Box>

                </Box>
            </Stack>
        </Box>
    )
}
