import { Box, Flex, Image, Link, Text, useMediaQuery } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import Cart from "../../assets/cart.svg";
import Logo from "../../assets/Logo.svg";
import Search from "../../assets/search.svg";
import { cartProducts } from "../../slices/cartSlice";
import { MobileNav } from "./MobileNav";
export const Navbar = () => {
    const cartProductsInfo = useSelector(cartProducts);
    const [isSmallerThan990] = useMediaQuery("(max-width: 990px)");

    const DesktopNav = () => (
        <Flex
            justifyContent={"space-between"}
            alignItems="center"
            pt={3}
            flexWrap="wrap"
        >
            <Image src={Logo} alt="site logo" />

            <Flex gap={10} alignItems="center">
                <Link
                    href="#home"
                    fontWeight={400}
                    color="#ffffff"
                    lineHeight="20px"
                    fontSize="18px"
                >
                    Home
                </Link>
                <Link
                    href="#about"
                    fontWeight={400}
                    color="#ffffff"
                    lineHeight="20px"
                    fontSize="18px"
                >
                    About
                </Link>
                <Link
                    href="#menu"
                    fontWeight={400}
                    color="#ffffff"
                    lineHeight="20px"
                    fontSize="18px"
                >
                    Menu
                </Link>
                <Link
                    href="blog"
                    fontWeight={400}
                    color="#ffffff"
                    lineHeight="20px"
                    fontSize="18px"
                >
                    Blog
                </Link>

                <Link
                    href="contact"
                    fontWeight={400}
                    color="#ffffff"
                    lineHeight="20px"
                    fontSize="18px"
                >
                    Contact
                </Link>
            </Flex>

            <Flex gap={5}>
                <Image w="20px" h="20px" src={Search} alt="search" />
                <Box position="relative">
                    {cartProductsInfo.length > 0 ? (
                        <Text
                            position={"absolute"}
                            bottom={3}
                            left={3}
                            bg="#F3BA00"
                            w="15px"
                            height="15px"
                            borderRadius={"50%"}
                        ></Text>
                    ) : null}
                    <Image w="20px" h="20px" src={Cart} alt="search" />
                </Box>
            </Flex>
        </Flex>
    );

    return (
        <>
            {isSmallerThan990 ? (
                <MobileNav cartTotal={cartProductsInfo.length} />
            ) : (
                <DesktopNav />
            )}
        </>
    );
};
