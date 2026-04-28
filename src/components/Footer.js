import React from "react";
import { Box, Typography, IconButton, Button } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { motion } from "framer-motion";

function Footer() {

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <Box
            sx={{
                position: "relative",
                background: "linear-gradient(-45deg, #0f172a, #1e293b, #0f172a)",
                textAlign: "center",
                padding: "60px 20px",
                color: "white",
            }}
        >

            {/* Animated gradient line */}
            <Box
                sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    height: "3px",
                    width: "100%",
                    background: "linear-gradient(90deg,#3b82f6,#60a5fa,#3b82f6)",
                    backgroundSize: "200% 100%",
                    animation: "gradientMove 6s linear infinite",
                    "@keyframes gradientMove": {
                        "0%": { backgroundPosition: "0% 0%" },
                        "100%": { backgroundPosition: "200% 0%" },
                    },
                }}
            />

            <Typography
                variant="h5"
                sx={{ fontWeight: 600, mb: 3 }}
            >
                Connect with me
            </Typography>

            {/* Social icons */}
            <Box sx={{ mb: 3 }}>
                <IconButton
                    href="https://github.com/ivanalazarovska"
                    target="_blank"
                    sx={{
                        color: "white",
                        transition: "0.3s",
                        "&:hover": {
                            color: "#3b82f6",
                            transform: "translateY(-4px)",
                        },
                    }}
                >
                    <GitHubIcon />
                </IconButton>

                <IconButton
                    href="https://www.linkedin.com/in/ivana-lazarovska-151313237/"
                    target="_blank"
                    sx={{
                        color: "white",
                        transition: "0.3s",
                        "&:hover": {
                            color: "#3b82f6",
                            transform: "translateY(-4px)",
                        },
                    }}
                >
                    <LinkedInIcon />
                </IconButton>

                <IconButton
                    href="mailto:lazarovskaivana233@gmail.com"
                    sx={{
                        color: "white",
                        transition: "0.3s",
                        "&:hover": {
                            color: "#3b82f6",
                            transform: "translateY(-4px)",
                        },
                    }}
                >
                    <EmailIcon />
                </IconButton>
            </Box>

            {/* Download CV button */}
            <Button
                variant="contained"
                href="/Ivana_CV.pdf"
                target="_blank"
                sx={{
                    background: "linear-gradient(90deg,#3b82f6,#2563eb)",
                    borderRadius: "30px",
                    padding: "10px 28px",
                    textTransform: "none",
                    fontSize: "16px",
                    transition: "0.3s",
                    "&:hover": {
                        background: "linear-gradient(90deg,#2563eb,#1d4ed8)",
                        transform: "translateY(-3px)",
                    },
                }}
            >
                Download CV
            </Button>

            {/* Back to top button */}
            <Box sx={{ mt: 4 }}>
                <IconButton
                    onClick={scrollToTop}
                    sx={{
                        background: "linear-gradient(90deg,#3b82f6,#2563eb)",
                        color: "white",
                        transition: "0.3s",
                        "&:hover": {
                            transform: "translateY(-3px)",
                            background: "linear-gradient(90deg,#2563eb,#1d4ed8)",
                        },
                    }}
                >
                    <KeyboardArrowUpIcon />
                </IconButton>
            </Box>

            {/* Copyright */}
            <Typography
                variant="body2"
                sx={{ mt: 4, color: "#94a3b8" }}
            >
                © {new Date().getFullYear()} Ivana Lazarovska. All rights reserved.
            </Typography>

        </Box>
    );
}

export default Footer;