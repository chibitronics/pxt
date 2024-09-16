# Chibitronics fork of pxt

## Build notes

- `npm run build`

Then go back to the chibitronics/pxt-microbit directory

- `cp ../pxt/built/pxt.js node_modules/pxt-core/built/pxt.js`
- `cp ../pxt/built/pxtsim.js node_modules/pxt-core/built/pxtsim.js`
- `cp ../pxt/built/web/pxtsim.js node_modules/pxt-core/built/web/pxtsim.js`

Then run

- `npx patch-package pxt-core`
