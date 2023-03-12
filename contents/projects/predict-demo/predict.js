// npm install @tensorflow/tfjs

// const tf = require("@tensorflow/tfjs-node");

const tf = require("@tensorflow/tfjs");

model1 = tf.loadLayersModel(
  "https://raw.githubusercontent.com/jingwora/jingwora.github.io/master/contents/projects/predict-demo/odd-engine-v1.00.6/model.json"
);

// vig  prob1  prob2  prob3
// 0.12    0.7   0.31   0.82

input_xs = tf.tensor2d([[0.12, 0.7, 0.31, 0.82]]);

output = model1.predict(input_xs);

const outputData = output.dataSync();

console.log(output);
