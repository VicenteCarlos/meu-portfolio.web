import { Variants } from "framer-motion"

export const animateModal: Variants = {
    hidden: {
        y: "100%"
    },
    visible: {
        y: 0,
        transition: { duration: 0.7 }
    }
}