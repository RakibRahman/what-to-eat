import { Button, Flex, Text } from "@chakra-ui/react";
import { useDispatch } from "react-redux";

import { FaMinus, FaPlus } from "react-icons/fa";
import { quantityDecrement, quantityIncrement } from "../../slices/cartSlice";
import { toast } from "react-hot-toast";

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
                sx={{
                    opacity: quantity_available === quantity ? 0.5 : 1
                }}
                onClick={() => {
                    dispatch(quantityIncrement({ id }));
                    if (quantity_available === quantity) {
                        toast.error("The product  is out of the stock");
                    }
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
                sx={{
                    opacity: quantity === 1 ? 0.5 : 1
                }}
                onClick={() => {
                    dispatch(quantityDecrement({ id }));
                    if (quantity === 1) {
                        toast.error(
                            "The product quantity  cant be less than 1"
                        );
                    }
                }}
            >
                <FaMinus color="#ffffff" />{" "}
            </Button>
        </Flex>
    );
};
