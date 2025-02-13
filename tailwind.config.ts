const brand = process.env.VITE_BRAND || 'melhor-escola';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const preset = require(`@quero/zilla-dictionary/tailwind/themes/${brand}.tailwind.preset.js`);

module.exports = {
  presets: [preset],
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}']
};
