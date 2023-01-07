import { useToast } from "@chakra-ui/react";

const useToaster = (
    title: string,
    toastStatus: "info" | "warning" | "success" | "error",
    id?: string,
    description?: string
) => {
    const toast = useToast({
        id,
        title: title,
        description: description ?? "",
        status: toastStatus,
        duration: 3000,
        isClosable: true,
        position: "top",
        variant: "top-accent"
    });

    return { toast };
};
export default useToaster;
