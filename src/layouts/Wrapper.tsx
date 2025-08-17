/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { ToastContainer } from "react-toastify";
import ScrollToTop from "@/components/common/ScrollToTop";
import { ThemeProvider } from "@/context/ThemeContext"; // ✅ Import the provider

const Wrapper = ({ children }: any) => {
    return (
        <ThemeProvider>
            {children}
            <ScrollToTop />
            <ToastContainer position="top-center" />
        </ThemeProvider>
    );
}

export default Wrapper;