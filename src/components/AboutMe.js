import React from "react";
import { Box, Typography, Avatar } from "@mui/material";
import { motion } from "framer-motion";

function AboutMe() {
    return (
        <motion.div
            id="about"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
        >
            <Box
                sx={{
                    minHeight: "70vh",
                    display: "flex",
                    flexDirection: { xs: "column", md: "row" },
                    justifyContent: "center",
                    alignItems: "center",
                    gap: 6,
                    padding: "4rem 2rem",
                    position: "relative",
                    background:
                        "linear-gradient(-45deg, #0f172a, #1e293b, #0f172a, #111827)",
                    backgroundSize: "400% 400%",
                    animation: "gradient 15s ease infinite",
                }}
            >
                {/* Floating Shapes */}
                <motion.div
                    animate={{ y: [0, -20, 0] }}
                    transition={{ repeat: Infinity, duration: 4 }}
                    style={{
                        position: "absolute",
                        top: "15%",
                        left: "10%",
                        width: 120,
                        height: 120,
                        borderRadius: "50%",
                        background: "rgba(59,130,246,0.2)",
                        filter: "blur(40px)",
                        zIndex: 0,
                    }}
                />
                <motion.div
                    animate={{ y: [0, 15, 0] }}
                    transition={{ repeat: Infinity, duration: 5 }}
                    style={{
                        position: "absolute",
                        bottom: "20%",
                        right: "15%",
                        width: 150,
                        height: 150,
                        borderRadius: "50%",
                        background: "rgba(236,72,153,0.2)",
                        filter: "blur(50px)",
                        zIndex: 0,
                    }}
                />

                {/* Avatar with subtle glow */}
                <motion.div
                    animate={{ y: [0, -15, 0] }}
                    transition={{ repeat: Infinity, duration: 3 }}
                    style={{ zIndex: 2 }}
                >
                    <Avatar
                        sx={{
                            width: { xs: 120, md: 180 },
                            height: { xs: 120, md: 180 },
                            border: "2px solid rgba(255,255,255,0.3)",
                            boxShadow: "0 0 30px rgba(59,130,246,0.5)",
                        }}
                        src="/me.jpg" // ставете ја вашата слика
                        alt="Ivana L."
                    />
                </motion.div>

                {/* Glass Card with Text */}
                <Box
                    sx={{
                        background: "rgba(255,255,255,0.05)",
                        backdropFilter: "blur(20px)",
                        borderRadius: "1.5rem",
                        border: "1px solid rgba(255,255,255,0.2)",
                        padding: "2.5rem",
                        maxWidth: 700,
                        boxShadow: "0 12px 40px rgba(0,0,0,0.4)",
                        position: "relative",
                        zIndex: 2,
                    }}
                >
                    <Typography
                        variant="h3"
                        sx={{ color: "white", fontWeight: 700, mb: 3 }}
                    >
                        About Me
                    </Typography>
                    <Typography
                        sx={{
                            color: "#ccc",
                            fontSize: { xs: "16px", md: "18px" },
                            lineHeight: 1.6,
                        }}
                    >
                        Recently graduated in Computer Science and Engineering from the Faculty of Computer Science and Engineering (FINKI). Passionate about technology and developing modern web solutions, with a strong focus on creating intuitive and impactful digital experiences.
                    </Typography>
                </Box>
            </Box>
        </motion.div>
    );
}

export default AboutMe;