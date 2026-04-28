import React, { useState } from "react";
import { motion } from "framer-motion";
import {
    Box,
    Typography,
    TextField,
    Button,
    Stack
} from "@mui/material";

function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
        alert("Thank you! Your message has been sent.");
        setFormData({ name: "", email: "", message: "" });
    };

    return (
        <motion.div
            id="contact"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
        >
            <Box
                sx={{
                    padding: "6rem 2rem",
                    position: "relative",
                    overflow: "hidden",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    background:
                        "linear-gradient(-45deg, #0f172a, #1e293b, #0f172a, #111827)",
                    backgroundSize: "400% 400%",
                    animation: "gradient 15s ease infinite",
                }}
            >
                {/* Glow Background */}
                <motion.div
                    animate={{ y: [0, -40, 0] }}
                    transition={{ repeat: Infinity, duration: 7 }}
                    style={{
                        position: "absolute",
                        top: "10%",
                        left: "20%",
                        width: 250,
                        height: 250,
                        borderRadius: "50%",
                        background: "rgba(59,130,246,0.2)",
                        filter: "blur(100px)",
                    }}
                />

                <motion.div
                    animate={{ y: [0, 40, 0] }}
                    transition={{ repeat: Infinity, duration: 8 }}
                    style={{
                        position: "absolute",
                        bottom: "10%",
                        right: "20%",
                        width: 260,
                        height: 260,
                        borderRadius: "50%",
                        background: "rgba(236,72,153,0.18)",
                        filter: "blur(110px)",
                    }}
                />

                <Typography
                    variant="h3"
                    sx={{
                        color: "white",
                        fontWeight: 700,
                        mb: 5,
                        zIndex: 2
                    }}
                >
                    Contact Me
                </Typography>

                {/* Glass Form */}
                <Box
                    component="form"
                    onSubmit={handleSubmit}
                    sx={{
                        maxWidth: 520,
                        width: "100%",
                        background: "rgba(255,255,255,0.05)",
                        backdropFilter: "blur(15px)",
                        borderRadius: "1.5rem",
                        border: "1px solid rgba(255,255,255,0.15)",
                        padding: "2.5rem 2rem",
                        boxShadow: "0 10px 40px rgba(0,0,0,0.4)",
                        zIndex: 2
                    }}
                >
                    <Stack spacing={3}>
                        <TextField
                            label="Name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            fullWidth
                            variant="filled"
                            sx={{
                                backgroundColor: "rgba(30,41,59,0.6)",
                                borderRadius: 1,
                                input: { color: "white" },
                                label: { color: "#ccc" }
                            }}
                        />

                        <TextField
                            label="Email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            fullWidth
                            variant="filled"
                            sx={{
                                backgroundColor: "rgba(30,41,59,0.6)",
                                borderRadius: 1,
                                input: { color: "white" },
                                label: { color: "#ccc" }
                            }}
                        />

                        <TextField
                            label="Message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            fullWidth
                            variant="filled"
                            multiline
                            rows={4}
                            sx={{
                                backgroundColor: "rgba(30,41,59,0.6)",
                                borderRadius: 1,
                                textarea: { color: "white" },
                                label: { color: "#ccc" }
                            }}
                        />

                        <Button
                            type="submit"
                            sx={{
                                background: "linear-gradient(90deg,#3b82f6,#f472b6)",
                                color: "white",
                                fontWeight: 600,
                                py: 1.5,
                                borderRadius: 2,
                                transition: "all 0.3s",
                                "&:hover": {
                                    transform: "scale(1.05)",
                                    filter: "brightness(1.2)",
                                    boxShadow: "0 10px 30px rgba(59,130,246,0.5)"
                                }
                            }}
                        >
                            Send Message
                        </Button>
                    </Stack>
                </Box>
            </Box>
        </motion.div>
    );
}

export default Contact;

