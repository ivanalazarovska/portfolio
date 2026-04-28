import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Link } from "react-scroll";
import { Box, Button } from "@mui/material";

function Navbar() {
    return (
        <AppBar position="fixed" color="transparent" elevation={0}>
            <Toolbar sx={{ justifyContent: "space-between", padding: "1rem 2rem" }}>
                <Typography variant="h6" sx={{ color: "white" }}>
                    Ivana
                </Typography>

                <Box>
                    {["about", "skills", "projects", "contact"].map((sec) => (
                        <Link to={sec} smooth={true} duration={500} key={sec}>
                            <Button sx={{ color: "white", fontSize: "16px" }}>{sec}</Button>
                        </Link>
                    ))}
                </Box>
            </Toolbar>
        </AppBar>
    );
}

export default Navbar;