// npm install @tensorflow/tfjs

// const tf = require("@tensorflow/tfjs-node");

const tf = require("@tensorflow/tfjs");
// const fs = require("fs");

const model = tf.loadLayersModel(
  "https://raw.githubusercontent.com/jingwora/jingwora.github.io/master/contents/projects/predict-demo/odd-engine-v1.00.6/model.json"
);

// vig  prob1  prob2  prob3
// 0.12    0.7   0.31   0.82

const input_xs = tf.tensor2d([[0.12, 0.7, 0.31, 0.82]]);

const output = model1.predict(input_xs);

const outputData = output.dataSync();

console.log(output);
