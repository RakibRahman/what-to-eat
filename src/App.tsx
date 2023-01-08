import { Box } from "@chakra-ui/react";
import { Toaster } from "react-hot-toast";
import { useGetProducts } from "./apiOperations";
import "./App.css";
import { Header } from "./components/Header/Header";

function App() {
    const { data, isError, isSuccess } = useGetProducts();

    return (
        <Box>
            {/* <CardContainer productList={data!} /> */}
            {/* <Cart /> */}
            <Header />
            <Toaster
                position="bottom-center"
                reverseOrder={false}
                gutter={8}
                containerClassName=""
                containerStyle={{}}
                toastOptions={{
                    className: "",
                    duration: 3000,
                    style: {
                        background: "#363636",
                        color: "#fff"
                    }
                }}
            />
        </Box>
    );
}

export default App;
