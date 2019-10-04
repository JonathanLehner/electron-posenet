npm rebuild @tensorflow/tfjs-node --build-from-source --target=v12.4.0
doesnt work (node-pre-gyp error)

use npm install @tensorflow/tfjs-node@1.2.7

solution?? go to node modules and rename tfjs-node/lib/napi-v3 to napi-v4 

some of these make electron break:
    "electron-prebuilt": "^1.4.13",
    "electron-rebuild": "^1.8.6",
    "electron-reload": "^1.2.5",
