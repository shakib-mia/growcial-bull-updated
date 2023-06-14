/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        animations: {
          '0%': { backgroundPositionX: 0 },
          '100%': { backgroundPositionX: "100vw" },
        },
      },
      animation: {
        background: 'animations 50s linear infinite'
      }
    },

    // screens: {
    //   'sm': '500px',
    //   'md': [
    //     // Sidebar appears at 768px, so revert to `sm:` styles between 768px
    //     // and 868px, after which the main content area is wide enough again to
    //     // apply the `md:` styles.
    //     { 'min': '668px', 'max': '767px' },
    //     { 'min': '868px' }
    //   ],
    //   'lg': '1440px',
    //   'xl': '2000px',
    // }
  },
  plugins: [],
}
