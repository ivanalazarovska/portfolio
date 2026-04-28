import React, { useState } from "react";
import { Box, Typography, Button, Stack, IconButton } from "@mui/material";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";

function Hero() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e) => {
        const { clientX, clientY } = e;
        setMousePosition({ x: clientX, y: clientY });
    };

    return (
        <Box
            onMouseMove={handleMouseMove}
            sx={{
                position: "relative",
                height: "100vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
                color: "white",
                overflow: "hidden",
                background:
                    "linear-gradient(-45deg, #0f172a, #1e293b, #0f172a, #111827)",
                backgroundSize: "400% 400%",
                animation: "gradient 15s ease infinite",
            }}
        >
            {/* Overlay */}
            <Box
                sx={{
                    position: "absolute",
                    inset: 0,
                    backgroundColor: "rgba(15,23,42,0.3)",
                    zIndex: 0,
                }}
            />

            {/* Mouse Glow */}
            <Box
                sx={{
                    position: "absolute",
                    top: mousePosition.y - 250,
                    left: mousePosition.x - 250,
                    width: "500px",
                    height: "500px",
                    pointerEvents: "none",
                    background:
                        "radial-gradient(circle, rgba(59,130,246,0.35) 0%, rgba(0,0,0,0) 70%)",
                    filter: "blur(120px)",
                    transition: "top 0.1s linear, left 0.1s linear",
                    zIndex: 1,
                }}
            />

            {/* Floating shapes */}
            <motion.div
                initial={{ y: -20 }}
                animate={{ y: 20 }}
                transition={{ duration: 4, repeat: Infinity, repeatType: "reverse" }}
                style={{
                    position: "absolute",
                    top: "20%",
                    left: "10%",
                    width: 150,
                    height: 150,
                    background: "rgba(255,255,255,0.05)",
                    backdropFilter: "blur(10px)",
                    borderRadius: 10,
                    zIndex: 1,
                }}
            />

            <motion.div
                initial={{ y: 10 }}
                animate={{ y: -10 }}
                transition={{ duration: 5, repeat: Infinity, repeatType: "reverse" }}
                style={{
                    position: "absolute",
                    top: "30%",
                    right: "15%",
                    width: 120,
                    height: 120,
                    background: "rgba(255,255,255,0.05)",
                    backdropFilter: "blur(10px)",
                    borderRadius: 10,
                    zIndex: 1,
                }}
            />

            {/* Content */}
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                style={{ position: "relative", zIndex: 2 }}
            >
                <Typography
                    variant="h2"
                    sx={{
                        fontWeight: 700,
                        fontSize: { xs: "32px", md: "56px" },
                    }}
                >
                    Hi, I'm Ivana
                </Typography>

                {/* Subtitle */}
                <Typography
                    sx={{
                        color: "#94a3b8",
                        mt: 1,
                        fontSize: { xs: "16px", md: "20px" },
                        fontWeight: 500,
                    }}
                >
                    Tech Enthusiast
                </Typography>

                {/* Glow line */}
                <Box
                    sx={{
                        width: 80,
                        height: 4,
                        background: "linear-gradient(90deg,#3b82f6,#f472b6)",
                        margin: "14px auto",
                        borderRadius: 10,
                    }}
                />

                {/* Typewriter */}
                <Typography
                    variant="h5"
                    sx={{
                        marginTop: 2,
                        color: "#ccc",
                        fontSize: { xs: "18px", md: "24px" },
                    }}
                >
                    <Typewriter
                        words={[

                            "Learning. Building. Growing.",
                        ]}
                        loop={0}
                        cursor
                        cursorStyle="|"
                        typeSpeed={70}
                        deleteSpeed={50}
                        delaySpeed={1500}
                    />
                </Typography>

                {/* Buttons */}
                <Stack
                    direction="row"
                    spacing={2}
                    justifyContent="center"
                    sx={{ mt: 4 }}
                >
                    <Button
                        variant="contained"
                        href="#projects"
                        sx={{
                            background: "linear-gradient(90deg,#3b82f6,#2563eb)",
                            borderRadius: "30px",
                            padding: "10px 26px",
                            textTransform: "none",
                            fontWeight: 600,
                            "&:hover": {
                                transform: "translateY(-3px)",
                            },
                        }}
                    >
                        View Projects
                    </Button>

                    <Button
                        variant="outlined"
                        href="#contact"
                        sx={{
                            borderColor: "#3b82f6",
                            color: "#3b82f6",
                            borderRadius: "30px",
                            padding: "10px 26px",
                            textTransform: "none",
                            fontWeight: 600,
                            "&:hover": {
                                borderColor: "#60a5fa",
                                color: "#60a5fa",
                                transform: "translateY(-3px)",
                            },
                        }}
                    >
                        Contact Me
                    </Button>
                </Stack>

                {/* Social Icons */}
                <Box sx={{ mt: 3 }}>
                    <IconButton
                        href="https://github.com/ivanalazarovska"
                        target="_blank"
                        sx={{ color: "white", "&:hover": { color: "#3b82f6" } }}
                    >
                        <GitHubIcon />
                    </IconButton>

                    <IconButton
                        href="https://www.linkedin.com/in/ivana-lazarovska-151313237/"
                        target="_blank"
                        sx={{ color: "white", "&:hover": { color: "#3b82f6" } }}
                    >
                        <LinkedInIcon />
                    </IconButton>

                    <IconButton
                        href="mailto:lazarovskaivana233@gmail.com"
                        sx={{ color: "white", "&:hover": { color: "#3b82f6" } }}
                    >
                        <EmailIcon />
                    </IconButton>
                </Box>
            </motion.div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ y: 0 }}
                animate={{ y: 15 }}
                transition={{ repeat: Infinity, duration: 1.5, repeatType: "reverse" }}
                style={{
                    position: "absolute",
                    bottom: 30,
                    fontSize: "28px",
                    zIndex: 2,
                }}
            >
                ↓
            </motion.div>
        </Box>
    );
}

export default Hero;