// npm install @tensorflow/tfjs-node

import tf from "@tensorflow/tfjs-node";

const app = async () => {
  const model = await tf.loadLayersModel(
    "https://raw.githubusercontent.com/jingwora/jingwora.github.io/master/contents/projects/predict-demo/odd-engine-v1.00.6/model.json"
  );

  // vig  prob1  prob2  prob3
  // 0.12    0.7   0.31   0.82

  const input_xs = tf.tensor2d([[0.12, 0.7, 0.31, 0.82]]);

  const outputData = model.predict(input_xs).dataSync();

  console.log(outputData);
};

app();
