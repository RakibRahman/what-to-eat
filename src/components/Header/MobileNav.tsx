import React from "react";
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
    IconButton,
    Flex,
    Image,
    Box,
    Link,
    Text
} from "@chakra-ui/react";
import { GiHamburgerMenu } from "react-icons/gi";
import Logo from "../../assets/Logo.svg";
import Cart from "../../assets/cart.svg";
import Search from "../../assets/search.svg";
export const MobileNav = ({ cartTotal }: { cartTotal: number }) => {
    return (
        <Flex
            justifyContent={"space-between"}
            alignItems="center"
            pt={3}
            flexWrap="wrap"
        >
            <Image src={Logo} alt="Logo" />

            <Flex gap={5}>
                <Image w="20px" h="20px" src={Search} alt="search" />
                <Box position="relative">
                    {cartTotal > 0 ? (
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

            <Menu>
                <MenuButton
                    as={IconButton}
                    aria-label="Options"
                    bg="white"
                    icon={<GiHamburgerMenu color="#000000" />}
                    variant="outline"
                />
                <MenuList>
                    <MenuItem>
                        <Link
                            href="#home"
                            fontWeight={400}
                            color="#000000"
                            lineHeight="20px"
                            fontSize="18px"
                        >
                            Home
                        </Link>
                    </MenuItem>

                    <MenuItem>
                        <Link
                            href="#about"
                            fontWeight={400}
                            color="#000000"
                            lineHeight="20px"
                            fontSize="18px"
                        >
                            About
                        </Link>
                    </MenuItem>
                    <MenuItem>
                        <Link
                            href="#menu"
                            fontWeight={400}
                            color="#000000"
                            lineHeight="20px"
                            fontSize="18px"
                        >
                            Menu
                        </Link>
                    </MenuItem>
                    <MenuItem>
                        <Link
                            href="blog"
                            fontWeight={400}
                            color="#000000"
                            lineHeight="20px"
                            fontSize="18px"
                        >
                            Blog
                        </Link>
                    </MenuItem>
                    <MenuItem>
                        <Link
                            href="contact"
                            fontWeight={400}
                            color="#000000"
                            lineHeight="20px"
                            fontSize="18px"
                        >
                            Contact
                        </Link>
                    </MenuItem>
                </MenuList>
            </Menu>
        </Flex>
    );
};
