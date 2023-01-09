import { Box } from "@chakra-ui/react";
import { Toaster } from "react-hot-toast";
import "./App.css";
import { Blog } from "./components/Blog/Blog";
import { CardContainer } from "./components/CardContainer/CardContainer";
import { Header } from "./components/Header/Header";

function App() {

    return (
        <Box>

            {/* <Cart /> */}
            <Header />
            <CardContainer />
            <Blog />
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
