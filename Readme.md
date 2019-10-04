npm rebuild @tensorflow/tfjs-node --build-from-source --target=v12.4.0
doesnt work

use npm install @tensorflow/tfjs-node@1.2.7

solution?? go to node modules and rename tfjs-node/lib/napi-v3 to napi-v4 

Comments:
The node version does not use GPU - unlike the webgl accelerated browser version. However, the C code still seems to be faster in electron. And the canvas is much smoother. The fps calculator might be incorrect.
