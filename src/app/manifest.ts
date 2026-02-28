import type { MetadataRoute } from "next"

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: "Echo | Breaking Echo Chambers",
        short_name: "Echo",
        description: "Empowering local leaders with AI decision intelligence.",
        start_url: "/",
        display: "standalone",
        background_color: "#ffffff",
        theme_color: "#000080", // Goverment Blue
        icons: [
            {
                src: "/favicon.ico",
                sizes: "any",
                type: "image/x-icon",
            },
        ],
    }
}
