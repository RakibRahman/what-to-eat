import {
    Flex,
    Heading,
    Image,
    Input,
    InputGroup,
    InputRightAddon, Stack,
    Text,
    useMediaQuery
} from "@chakra-ui/react";
import Cook from "../../assets/cook.png";

export const Hero = () => {
    const [isSmallerThan990] = useMediaQuery("(max-width: 1300px)");

    return (
        <Flex
            justifyContent="space-between"
            py={10}
            gap="50px"
            flexDirection={isSmallerThan990 ? "column" : "row"}
        >
            <Stack flex={1} mt={isSmallerThan990 ? 20 : 30} gap="20px">
                <Heading
                    w={isSmallerThan990 ? "100%" : "80%"}
                    fontSize="70px"
                    color="#ffffff"
                    lineHeight="82px"
                >
                    Authentic Home food in UK
                </Heading>
                <Text
                    w={isSmallerThan990 ? "100%" : "55%"}
                    fontSize="16px"
                    color="#ffffff"
                    fontWeight={400}
                    lineHeight="20px"
                >
                    What2Eat is a courier service in which authentic home cook
                    food is delivered to a customer.
                </Text>
                <InputGroup size="sm" w={isSmallerThan990 ? "100%" : "55%"}>
                    <Input
                        color="#ffffff"
                        pr="4.5rem"
                        type={"text"}
                        h="58px"
                        placeholder="Search food you love"
                    />

                    <InputRightAddon
                        pl={8}
                        color="#ffffff"
                        fontWeight={600}
                        lineHeight="20px"
                        fontSize="16px"
                        textAlign={"center"}
                        w="112px"
                        h="58px"
                        bg="#F3BA00"
                        children="Search"
                    />
                </InputGroup>
            </Stack>
            <Image
                flex={1}
                src={Cook}
                alt="hero"
                w="100%"
                objectFit={"cover"}
            />
        </Flex>
    );
};
