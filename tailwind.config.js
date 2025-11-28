/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: '#6C63FF',
                secondary: '#A27BFF',
                accent: '#00E4FF',
                dark: {
                    bg: '#0B0F1A',
                    surface: '#1E1E2E',
                }
            },
            fontFamily: {
                poppins: ['Poppins', 'sans-serif'],
                inter: ['Inter', 'sans-serif'],
            },
            animation: {
                'fade-up': 'fadeUp 0.6s ease-out',
                'fade-in': 'fadeIn 0.6s ease-out',
                'slide-in': 'slideIn 0.4s ease-out',
                'glow': 'glow 2s ease-in-out infinite alternate',
                'float': 'float 6s ease-in-out infinite',
            },
            keyframes: {
                fadeUp: {
                    '0%': { opacity: '0', transform: 'translateY(30px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                slideIn: {
                    '0%': { transform: 'translateX(-100%)' },
                    '100%': { transform: 'translateX(0)' },
                },
                glow: {
                    '0%': { boxShadow: '0 0 5px #6C63FF, 0 0 10px #6C63FF' },
                    '100%': { boxShadow: '0 0 10px #6C63FF, 0 0 20px #6C63FF, 0 0 30px #6C63FF' },
                },
                float: {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-20px)' },
                },
            },
            backdropBlur: {
                xs: '2px',
            },
        },
    },
    plugins: [],
}
