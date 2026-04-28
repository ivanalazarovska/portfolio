import React from "react";
import { Box, Typography, Card, CardContent, CardActions, Button, Chip } from "@mui/material";
import { motion } from "framer-motion";

const projects = [
    { name: "Portfolio Website", description: "Personal portfolio with React & Material UI.", link: "https://github.com/ivanalazarovska/portfolio" },
    { name: "FitWay App", description: "Full-stack app with React & Spring Boot", link: "https://github.com/ivanalazarovska/fitway-app" },
    { name: "Event Manager", description: "Event management platform built with Spring Boot", link: "https://github.com/ivanalazarovska/eventmanagement-app" },
    { name: "Task Manager", description: "Task manager app with .NET & React", link: null, status: "In Progress" },
];

function Projects() {
    return (
        <motion.div
            id="projects"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
        >
            <Box
                sx={{
                    padding: "6rem 2rem",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    position: "relative",
                    overflow: "hidden",
                    background:
                        "linear-gradient(-45deg, #0f172a, #1e293b, #0f172a, #111827)",
                    backgroundSize: "400% 400%",
                    animation: "gradient 15s ease infinite",
                }}
            >
                {/* Floating glow elements */}
                <motion.div
                    animate={{ y: [0, -30, 0] }}
                    transition={{ repeat: Infinity, duration: 6 }}
                    style={{
                        position: "absolute",
                        top: "15%",
                        left: "10%",
                        width: 200,
                        height: 200,
                        borderRadius: "50%",
                        background: "rgba(59,130,246,0.2)",
                        filter: "blur(80px)",
                    }}
                />

                <motion.div
                    animate={{ y: [0, 30, 0] }}
                    transition={{ repeat: Infinity, duration: 7 }}
                    style={{
                        position: "absolute",
                        bottom: "10%",
                        right: "15%",
                        width: 250,
                        height: 250,
                        borderRadius: "50%",
                        background: "rgba(236,72,153,0.15)",
                        filter: "blur(100px)",
                    }}
                />

                <Typography variant="h3" sx={{ color: "white", fontWeight: 700, mb: 5, zIndex: 2 }}>
                    Projects
                </Typography>

                <Box
                    sx={{
                        display: "grid",
                        gap: 5,
                        gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
                        width: "100%",
                        maxWidth: 1100,
                        zIndex: 2,
                    }}
                >
                    {projects.map((p) => (
                        <motion.div
                            whileHover={{ scale: 1.05, y: -8 }}
                            transition={{ duration: 0.3 }}
                            key={p.name}
                        >
                            <Card
                                sx={{
                                    background: "rgba(255,255,255,0.05)",
                                    backdropFilter: "blur(18px)",
                                    borderRadius: "1.5rem",
                                    border: "1px solid rgba(255,255,255,0.15)",
                                    boxShadow: "0 8px 40px rgba(0,0,0,0.4)",
                                    transition: "all 0.3s ease",
                                    "&:hover": {
                                        background:
                                            "linear-gradient(135deg, rgba(59,130,246,0.2), rgba(236,72,153,0.15))",
                                        boxShadow: "0 15px 60px rgba(0,0,0,0.6)",
                                    },
                                }}
                            >
                                <CardContent>
                                    <Typography variant="h5" sx={{ color: "#fff", fontWeight: 700 }}>
                                        {p.name}
                                    </Typography>

                                    <Typography sx={{ color: "#ccc", mt: 1 }}>
                                        {p.description}
                                    </Typography>

                                    {p.status && (
                                        <motion.div
                                            animate={{ opacity: [0.7, 1, 0.7] }}
                                            transition={{ repeat: Infinity, duration: 2 }}
                                        >
                                            <Chip
                                                label={p.status}
                                                sx={{
                                                    mt: 2,
                                                    fontWeight: 600,
                                                    color: "#fff",
                                                    background:
                                                        "linear-gradient(90deg, #f59e0b, #fbbf24)",
                                                    boxShadow:
                                                        "0 0 15px rgba(255,191,36,0.6)",
                                                }}
                                            />
                                        </motion.div>
                                    )}
                                </CardContent>

                                {p.link && (
                                    <CardActions>
                                        <Button
                                            size="small"
                                            href={p.link}
                                            target="_blank"
                                            sx={{
                                                color: "#3b82f6",
                                                fontWeight: 600,
                                                borderRadius: 2,
                                                "&:hover": {
                                                    backgroundColor:
                                                        "rgba(59,130,246,0.1)",
                                                },
                                            }}
                                        >
                                            View Code
                                        </Button>
                                    </CardActions>
                                )}
                            </Card>
                        </motion.div>
                    ))}
                </Box>
            </Box>
        </motion.div>
    );
}

export default Projects;