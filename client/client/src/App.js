import "./App.css";
import { makeStyles } from "@material-ui/core/styles";
import { sizing } from "@material-ui/system";
import { Container } from "@material-ui/core";
import CssBaseline from "@material-ui/core/CssBaseline";
import Promotions from "./components/Promotions";
import { Provider } from "react-redux";
import store from "./store";

const App = () => {
    const classes = useStyles();

    return (
        <Provider store={store}>
            <div className={classes.root} height="100%">
                <Container maxWidth="xl">
                    <CssBaseline />
                    <Promotions />
                </Container>
            </div>
        </Provider>
    );
};

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        height: "100%",
    },
}));

export default App;
