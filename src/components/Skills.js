import React from "react";
import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";

// Icons
import {
    FaReact,
    FaJava,
    FaJs,
    FaHtml5,
    FaCss3Alt,
    FaGitAlt,
    FaGithub,
} from "react-icons/fa";

import {
    SiPostgresql,
    SiDotnet,
    SiSpringboot,
    SiMysql,
    SiTailwindcss,
    SiBootstrap,
    SiPostman,
    SiFigma,
    SiJira,
} from "react-icons/si";

import { MdApi, MdBugReport, MdOutlineManageAccounts } from "react-icons/md";
import { HiOutlineChartBar } from "react-icons/hi";

// Skills list
const skills = [
    { name: "Java", icon: <FaJava /> },
    { name: "JavaScript", icon: <FaJs /> },
    { name: "C#", icon: <SiDotnet /> },
    { name: "SQL", icon: <HiOutlineChartBar /> },

    { name: "React", icon: <FaReact /> },
    { name: "HTML", icon: <FaHtml5 /> },
    { name: "CSS", icon: <FaCss3Alt /> },
    { name: "Tailwind", icon: <SiTailwindcss /> },
    { name: "Bootstrap", icon: <SiBootstrap /> },

    { name: "Spring Boot", icon: <SiSpringboot /> },
    { name: "ASP.NET", icon: <SiDotnet /> },
    { name: "REST APIs", icon: <MdApi /> },

    { name: "MySQL", icon: <SiMysql /> },
    { name: "PostgreSQL", icon: <SiPostgresql /> },

    { name: "Git", icon: <FaGitAlt /> },
    { name: "GitHub", icon: <FaGithub /> },
    { name: "Jira", icon: <SiJira /> },
    { name: "Postman", icon: <SiPostman /> },
    { name: "Figma", icon: <SiFigma /> },

    { name: "Agile/Scrum", icon: <MdOutlineManageAccounts /> },
    { name: "Problem-solving", icon: <MdBugReport /> },
    { name: "Teamwork", icon: <MdOutlineManageAccounts /> },
];

function Skills() {
    return (
        <motion.div
            id="skills"
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
                {/* Glow shapes */}
                <motion.div
                    animate={{ y: [0, -30, 0] }}
                    transition={{ repeat: Infinity, duration: 6 }}
                    style={{
                        position: "absolute",
                        top: "10%",
                        left: "15%",
                        width: 200,
                        height: 200,
                        borderRadius: "50%",
                        background: "rgba(59,130,246,0.2)",
                        filter: "blur(90px)",
                    }}
                />

                <motion.div
                    animate={{ y: [0, 30, 0] }}
                    transition={{ repeat: Infinity, duration: 7 }}
                    style={{
                        position: "absolute",
                        bottom: "10%",
                        right: "15%",
                        width: 220,
                        height: 220,
                        borderRadius: "50%",
                        background: "rgba(236,72,153,0.15)",
                        filter: "blur(100px)",
                    }}
                />

                <Typography
                    variant="h3"
                    sx={{ color: "white", fontWeight: 700, mb: 6, zIndex: 2 }}
                >
                    Skills
                </Typography>

                <Box
                    sx={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit, minmax(180px,1fr))",
                        gap: 4,
                        maxWidth: 900,
                        width: "100%",
                        zIndex: 2,
                    }}
                >
                    {skills.map((skill) => (
                        <motion.div
                            key={skill.name}
                            whileHover={{ scale: 1.1, y: -8 }}
                            transition={{ duration: 0.3 }}
                        >
                            <Box
                                sx={{
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                    gap: 2,
                                    padding: "2rem",
                                    borderRadius: "1.5rem",
                                    background: "rgba(255,255,255,0.05)",
                                    backdropFilter: "blur(15px)",
                                    border: "1px solid rgba(255,255,255,0.15)",
                                    boxShadow: "0 8px 30px rgba(0,0,0,0.4)",
                                    transition: "all 0.3s",
                                    "&:hover": {
                                        background:
                                            "linear-gradient(135deg, rgba(59,130,246,0.25), rgba(236,72,153,0.15))",
                                        boxShadow: "0 20px 60px rgba(0,0,0,0.6)",
                                    },
                                }}
                            >
                                <Box
                                    sx={{
                                        fontSize: "50px",
                                        color: "white",
                                    }}
                                >
                                    {skill.icon}
                                </Box>

                                <Typography
                                    sx={{
                                        color: "white",
                                        fontWeight: 600,
                                        textAlign: "center",
                                    }}
                                >
                                    {skill.name}
                                </Typography>
                            </Box>
                        </motion.div>
                    ))}
                </Box>
            </Box>
        </motion.div>
    );
}

export default Skills;