import {
    Button,
    Flex,
    Image,
    Table,
    TableContainer,
    Tbody,
    Td,
    Th,
    Thead,
    Tr
} from "@chakra-ui/react";
import { ChangeEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cartProducts, removeFromCart } from "../../slices/cartSlice";
import { Payment } from "./Payment";
import { Quantity } from "./Quantity";
export const Cart = () => {
    const cartItems = useSelector(cartProducts);
    const totalPrice = cartItems.reduce(
        (acc, item) => acc + item.price * item.quantity!,
        0
    );
    const dispatch = useDispatch();

    return (
        <>
            <h1>Shopping Cart</h1>

            <Flex flexDirection="column" className="shopping-cart">
                <TableContainer>
                    <Table variant="simple">
                        <Thead>
                            <Tr>
                                <Th>Product</Th>
                                <Th>Quantity</Th>
                                <Th>Price</Th>
                                <Th>Total</Th>
                                <Th>Remove</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            {cartItems.map((cartItem) => (
                                <Tr key={cartItem.id}>
                                    <Td>
                                        <Flex alignItems="center" gap="5px">
                                            <Image
                                                src={
                                                    cartItem.image ??
                                                    "https://via.placeholder.com/150"
                                                }
                                                alt={cartItem.name}
                                                w="80px"
                                                h="80px"
                                                objectFit="cover"
                                                borderRadius={10}
                                            />
                                            {cartItem.name}
                                        </Flex>
                                    </Td>
                                    <Td>
                                        <Quantity
                                            id={cartItem.id}
                                            quantity={cartItem.quantity!}
                                            quantity_available={
                                                cartItem.quantity_available
                                            }
                                        />
                                    </Td>
                                    <Td>{cartItem.price}</Td>
                                    <Td>
                                        {cartItem.price * cartItem.quantity!}
                                    </Td>
                                    <Td>
                                        <Button
                                            bg="red"
                                            size="sm"
                                            color="white"
                                            onClick={() => {
                                                dispatch(
                                                    removeFromCart(cartItem.id)
                                                );
                                            }}
                                        >
                                            Remove
                                        </Button>
                                    </Td>
                                </Tr>
                            ))}
                        </Tbody>
                    </Table>
                </TableContainer>
                <Payment totalPrice={totalPrice} />
            </Flex>
        </>
    );
};
