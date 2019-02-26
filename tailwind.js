// let defaultConfig = require('tailwindcss/defaultConfig')()

let colors = {
  'transparent': 'transparent',
  'black': '#22292f',
  'grey-darkest': '#3d4852',
  'grey-darker': '#606f7b',
  'grey-dark': '#8795a1',
  'grey': '#b8c2cc',
  'grey-light': '#dae1e7',
  'grey-lighter': '#f1f5f8',
  'grey-lightest': '#f8fafc',
  'white': '#ffffff',
  'red': '#F30206',
}

const createSize = (dir) => ({
  'auto': 'auto',
  'px': '1px',
  '1': '0.25rem',
  '2': '0.5rem',
  '3': '0.75rem',
  '4': '1rem',
  '5': '1.25rem',
  '6': '1.5rem',
  '8': '2rem',
  '10': '2.5rem',
  '12': '3rem',
  '16': '4rem',
  '24': '6rem',
  '32': '8rem',
  '48': '12rem',
  '64': '16rem',
  '1/2': '50%',
  '1/3': '33.33333%',
  '2/3': '66.66667%',
  '1/4': '25%',
  '3/4': '75%',
  '1/5': '20%',
  '2/5': '40%',
  '3/5': '60%',
  '4/5': '80%',
  '1/6': '16.66667%',
  '5/6': '83.33333%',
  'full': '100%',
  'screen': '100v' + dir
})

const createSpacing = () => ({
  'auto': 'auto',
  'px': '1px',
  '0': '0',
  '1': '0.25rem',
  '2': '0.5rem',
  '3': '0.75rem',
  '4': '1rem',
  '5': '1.25rem',
  '6': '1.5rem',
  '8': '50px',
  '10': '2.5rem',
  '12': '3rem',
  '16': '4rem',
  '20': '5rem',
  '24': '6rem',
  '32': '8rem',
})

const ignoreProperties = ['leading', 'textAlign', 'opacity', 'appearance', 'cursor', 'float', 'overflow', 'outline', 'resize', 'flexbox', 'borderStyle', 'pointerEvents', 'borderRadius', 'negativeMargin', 'lists', 'backgroundAttachment', 'backgroundPosition', 'backgroundRepeat', 'backgroundSize', 'borderCollapse', 'svgFill', 'svgStroke', 'tracking', 'userSelect', 'verticalAlign', 'visibility', 'whitespace', 'zIndex'].reduce((b, a) => ({...b, [a]: []}), {})

module.exports = {
  colors: colors,
  screens: {
    'sm': '576px',
    'md': '768px'
  },
  fonts: {
    'sans': [ 'system-ui', 'BlinkMacSystemFont', '-apple-system', 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', 'sans-serif' ],
    'mono': [ 'Menlo', 'Monaco', 'Consolas', 'Liberation Mono', 'Courier New', 'monospace' ]
  },
  textSizes: {
    'xs': '.75rem',     // 12px
    'sm': '.875rem',    // 14px
    'base': '1rem',     // 16px
    'lg': '1.125rem',   // 18px
    'xl': '1.25rem',    // 20px
    '2xl': '1.5rem',    // 24px
    '3xl': '1.875rem',  // 30px
    '4xl': '2.25rem',   // 36px
    '5xl': '3rem',      // 48px
  },
  fontWeights: {
    'hairline': 100,
    'thin': 200,
    'light': 300,
    'normal': 400,
    'medium': 500,
    'semibold': 600,
    'bold': 700,
    'extrabold': 800,
    'black': 900,
  },
  leading: {
    'none': 1,
    'tight': 1.25,
    'normal': 1.5,
    'loose': 2,
  },
  tracking: {
    'tight': '-0.05em',
    'normal': '0',
    'wide': '0.05em',
  },
  textColors: colors,
  backgroundColors: colors,
  backgroundSize: {
    'auto': 'auto',
    'cover': 'cover',
    'contain': 'contain',
  },
  borderWidths: {
    default: '1px',
    '0': '0',
    '2': '2px',
    '4': '4px',
    '8': '8px',
  },
  borderColors: global.Object.assign({ default: colors['grey-light'] }, colors),
  borderRadius: {
    'none': '0',
    default: '.25rem',
    'full': '9999px',
  },
  width: { ...createSize('w') },
  height: { ...createSize('h') },
  minWidth: {
    '0': '0',
    'full': '100%',
  },
  minHeight: {
    '0': '0',
    'full': '100%',
    'screen': '100vh'
  },
  maxWidth: {
    'xs': '20rem',
    'lg': '50rem',
    '5xl': '100rem',
    'full': '100%',
  },
  maxHeight: {
    'full': '100%',
    'screen': '100vh',
  },
  padding: { ...createSpacing() },
  margin: { ...createSpacing() },
  negativeMargin: {},
  shadows: {
    default: '0 2px 4px 0 rgba(0,0,0,0.10)',
    'inner': 'inset 0 2px 4px 0 rgba(0,0,0,0.06)',
    'outline': '0 0 0 3px rgba(52,144,220,0.5)',
    'none': 'none',
  },
  zIndex: {
    '0': 0,
    '10': 10,
    '20': 20,
  },
  opacity: {
    '0': '0',
    '25': '.25',
    '50': '.5',
    '75': '.75',
    '100': '1',
  },
  modules: {
    backgroundColors: ['hover', 'focus'],
    borderColors: ['responsive', 'hover', 'focus'],
    borderWidths: ['responsive'],
    display: ['responsive'],
    fonts: ['responsive'],
    fontWeights: ['responsive', 'hover', 'focus'],
    height: ['responsive'],
    margin: ['responsive'],
    maxHeight: ['responsive'],
    maxWidth: ['responsive'],
    minHeight: ['responsive'],
    minWidth: ['responsive'],
    padding: ['responsive'],
    position: ['responsive'],
    shadows: ['hover', 'focus'],
    textColors: ['responsive', 'hover', 'focus'],
    textSizes: ['responsive'],
    textStyle: ['responsive', 'hover', 'focus'],
    width: ['responsive'],
    ...ignoreProperties
  },
  plugins: [
    require('tailwindcss/plugins/container')({}),
  ],
  options: {
    prefix: '',
    important: false,
    separator: ':',
  },
}
