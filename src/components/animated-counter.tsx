"use client"

import * as React from "react"
import { motion, useMotionValue, useSpring, useInView } from "framer-motion"

export function AnimatedCounter({ value, decimals = 1 }: { value: number, decimals?: number }) {
    const ref = React.useRef(null)
    const isInView = useInView(ref, { once: true })
    const motionValue = useMotionValue(0)
    const springValue = useSpring(motionValue, {
        damping: 30,
        stiffness: 100,
    })

    React.useEffect(() => {
        if (isInView) {
            motionValue.set(value)
        }
    }, [isInView, value, motionValue])

    React.useEffect(() => {
        springValue.on("change", (latest) => {
            if (ref.current) {
                (ref.current as HTMLElement).textContent = Intl.NumberFormat("en-US", {
                    minimumFractionDigits: decimals,
                    maximumFractionDigits: decimals,
                }).format(latest)
            }
        })
    }, [springValue, decimals])

    return <span ref={ref}>0.0</span>
}
