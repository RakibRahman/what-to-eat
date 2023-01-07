import { Button, Flex, Text } from "@chakra-ui/react";
import { useDispatch } from "react-redux";

import { FaMinus, FaPlus } from "react-icons/fa";
import { quantityDecrement, quantityIncrement } from "../../slices/cartSlice";

export const Quantity = ({
    quantity,
    quantity_available,
    id
}: {
    quantity: number;
    quantity_available: number;
    id: number;
}) => {
    const dispatch = useDispatch();
    return (
        <Flex gap={3} alignItems="center">
            <Button
                bg="green.500"
                size="xs"
                disabled={quantity_available === quantity}
                onClick={() => {
                    dispatch(quantityIncrement({ id }));
                }}
            >
                <FaPlus color="#ffffff" />{" "}
            </Button>
            <Text fontWeight={500} fontSize="md">
                {quantity}
            </Text>
            <Button
                size="xs"
                bg="red.500"
                disabled={quantity === 1}
                onClick={() => {
                    dispatch(quantityDecrement({ id }));
                }}
            >
                <FaMinus color="#ffffff" />{" "}
            </Button>
        </Flex>
    );
};
