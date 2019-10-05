# posenet code was made for posture penguin in hackzurich 2019 - team ergohack achieved 2nd overall and 1st in the logitech challenge

![desktop app](https://github.com/JonathanLehner/electron-posenet/blob/master/71496939_2108432516126044_3081230763878776832_n.png)

npm rebuild @tensorflow/tfjs-node --build-from-source --target=v12.4.0
doesnt work (node-pre-gyp error)

use npm install @tensorflow/tfjs-node@1.2.7

solution?? go to node modules and rename tfjs-node/lib/napi-v3 to napi-v4 

some of these make electron break:
    "electron-prebuilt": "^1.4.13",
    "electron-rebuild": "^1.8.6",
    "electron-reload": "^1.2.5",
The node version does not use GPU - unlike the webgl accelerated browser version. However, the C code still seems to be faster in electron. And the canvas is much smoother. The fps calculator might be incorrect.

fix napi-4 bug:
cp -r ./node_modules/@tensorflow/tfjs-node/lib/napi-v3 ./node_modules/@tensorflow/tfjs-node/lib/napi-v4
