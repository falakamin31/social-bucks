/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",

        // Or if using `src` directory:
        "./src/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                eina: ["var(--font-eina)", "sans-serif"],
            },
            colors : {
                green : '#90F208',
                'dark-green' : '#72BC0B',
                'off-white' : '#E3E3E3',
                'gray' : '#7F7F7F',
                'dark-gray' : '#1A1A1A',
                'dark-black' : '#030303'
            }
            ,rotate: {
                '5' : '5deg',
                '6' : '6deg',
                '11': '11deg',
                
        }
        },
    },
    plugins: [],
};
