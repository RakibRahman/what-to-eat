import { Box, Button, Center, SimpleGrid, Stack } from "@chakra-ui/react";
import { FaPlus } from "react-icons/fa";
import { useGetProducts } from "../../apiOperations";
import { Product } from "../../models/products";
import { Card } from "../Card/Card";
import { HomeKitchen } from "./HomeKitchen";


export const CardContainer = () => {
    const { data, isError, isSuccess } = useGetProducts();

    return (
        <Box px={[5, 15, 40]} bg='#F7F8FA' pt={20} pb={20}>

            <Stack spacing={10} >
                <HomeKitchen />
                <SimpleGrid alignItems={'center'} minChildWidth='277px' spacing={20} >
                    {data?.map((product: Product) => (
                        <Card key={product.id} product={product} />
                    ))}
                </SimpleGrid>
            </Stack>
            <Center>
                <Button
                    mt={20}
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px',
                        width: '172px',
                        height: '46px',
                        border: '1px solid #F3BA00',
                        borderRadius: '10px',
                        color: '#929292',
                        fontFamily: 'SF Pro Text',
                        fontStyle: 'normal',
                        fontWeight: 400,
                        fontSize: '16px',
                        lineHeight: ' 20px',

                    }}
                >
                    <FaPlus color='#929292'></FaPlus> Load More...
                </Button>
            </Center>
        </Box >
    );
};
