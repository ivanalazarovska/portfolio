import React, { useEffect, useState } from "react";

export default function CursorGlow() {
    const [position, setPosition] = useState({ x: -100, y: -100 });
    const [hovered, setHovered] = useState(false);

    useEffect(() => {
        const move = (e) => setPosition({ x: e.clientX, y: e.clientY });
        window.addEventListener("mousemove", move);

        const links = document.querySelectorAll("a, button");
        links.forEach((el) => {
            el.addEventListener("mouseenter", () => setHovered(true));
            el.addEventListener("mouseleave", () => setHovered(false));
        });

        return () => {
            window.removeEventListener("mousemove", move);
            links.forEach((el) => {
                el.removeEventListener("mouseenter", () => setHovered(true));
                el.removeEventListener("mouseleave", () => setHovered(false));
            });
        };
    }, []);

    return (
        <div
            style={{
                position: "fixed",
                top: position.y - (hovered ? 25 : 10),
                left: position.x - (hovered ? 25 : 10),
                width: hovered ? 50 : 20,
                height: hovered ? 50 : 20,
                background: "rgba(59,130,246,0.5)",
                borderRadius: "50%",
                pointerEvents: "none",
                transition: "all 0.15s ease-out",
                zIndex: 9999,
                mixBlendMode: "difference",
            }}
        />
    );
}