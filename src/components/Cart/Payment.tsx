import React from "react";
import { Box, Text, Button, Flex, Stack } from "@chakra-ui/react";
export const Payment = ({ totalPrice }: { totalPrice: number }) => {
    return (
        <Stack alignSelf={"flex-end"} mr={20}>
            <Flex
                gap="25px"
                alignItems={"center"}
                justifyContent="space-between"
            >
                <Text>Discount</Text>
                <Text textAlign={"left"} fontWeight="bold">
                    {" "}
                    0.00$
                </Text>
            </Flex>
            <Flex
                gap="25px"
                alignItems={"center"}
                justifyContent="space-between"
            >
                <Text>Subtotal</Text>
                <Text textAlign={"left"} fontWeight="bold">
                    {" "}
                    {totalPrice.toFixed(2)}$
                </Text>
            </Flex>
            <Flex
                gap="25px"
                alignItems={"center"}
                justifyContent="space-between"
            >
                <Text>Tax(0%)</Text>
                <Text textAlign={"left"} fontWeight="bold">
                    {" "}
                    0$
                </Text>
            </Flex>
            <Flex
                gap="25px"
                alignItems={"center"}
                justifyContent="space-between"
            >
                <Text>Total</Text>
                <Text textAlign={"left"} fontWeight="bold">
                    {" "}
                    {totalPrice.toFixed(2)}$
                </Text>
            </Flex>

            <Button className="checkout">Checkout</Button>
        </Stack>
    );
};
