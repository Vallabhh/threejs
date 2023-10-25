import OpenAI from "openai";
// const OpenAI = require("openai");

const openai = new OpenAI({
  apiKey: "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" 
});

async function main() {
  const image = await openai.images.generate({ prompt: "A cute baby sea otter" });

  console.log(image.data);
}
main();