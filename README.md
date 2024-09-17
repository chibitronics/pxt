# Chibitronics fork of pxt
 

## Build notes

We're using this fork to make changes to the pxt library, but instead of hosting our own npm package that chibitronics/pxt-microbit pulls in, we are going to use `patch-package` to manage the changes to the `pxt` library within chibitronics/pxt-microbit.

So to update pxt in chibitronics/pxt-microbit, clone this repo, and then run this command:

- `npm run build`

Then go back to the chibitronics/pxt-microbit directory and run these commands:

- `cp ../pxt/built/pxt.js node_modules/pxt-core/built/pxt.js`
- `cp ../pxt/built/pxtsim.js node_modules/pxt-core/built/pxtsim.js`
- `cp ../pxt/built/web/pxtsim.js node_modules/pxt-core/built/web/pxtsim.js`

Then run:

- `npx patch-package pxt-core`

This will generate a `patches/pxt-core+10.3.4.patch` file.

In chibitronics/pxt-microbit, package.json runs `patch-package` on `postinstall`, which will apply the patched changes after installing the pxt-core node module.