import { Box, Button, Flex, Heading, Stack } from '@chakra-ui/react'
import React from 'react'
import { Select } from '@chakra-ui/react'

export const HomeKitchen = () => {
    const buttonFontStyles = {
        flex: 1,
        borderRadius: 0,
        minWidth: '100px',
        fontSize: '16px',
        fontWeight: 400,
        lineHeight: '20px',
        color: '#929292',
        textAlign: 'center' as const,
        borderRight: '1px solid #F3BA00',
        bg: '#F7F8FA'
    }
    return (
        <>
            <Heading fontSize={'24px'} lineHeight={'24px'}>Home Kitchen</Heading>
            <Flex border='1px solid #F3BA00' flexWrap={'wrap'} maxWidth={'667px'}>
                <Button borderRadius={0} minWidth='100px' bg='#F3BA00' color='#000000' fontSize='16px' fontWeight={600}
                    p={2}
                >All</Button>
                <Button {...buttonFontStyles} >
                    Mutton
                </Button>
                <Button {...buttonFontStyles}>
                    Free Delivery
                </Button>
                <Button {...buttonFontStyles}>
                    New
                </Button>
                <Button {...buttonFontStyles} borderRight={0}>
                    Coming
                </Button>
            </Flex>
            <Select placeholder='Filters' maxW={'213px'} border='1px solid #929292' borderRadius={'10px'}>
                <option value='option1'>Chicken</option>
                <option value='option2'>Meat</option>
                <option value='option3'>Juice</option>
            </Select>
        </>
    )
}
