/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    screens: {
      'sm': '360px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      backgroundImage: {
        // 'hero': "url('https://lasrental.s3.us-west-2.amazonaws.com/lasrental_website/lasrental_hero.jpeg')",
        // 'private-tours': "url('https://lasrental.s3.us-west-2.amazonaws.com/lasrental_website/antelope-canyon.jpg')",
        // 'grand-canyon': "url('https://lasrental.s3.us-west-2.amazonaws.com/lasrental_website/grand-caynon.jpg')",
      }
    },
  },
  plugins: [
    
  ],
}
