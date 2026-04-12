 import axios from "axios";

export async function parseIntent(prompt) {
  const res = await axios.post("https://api.openai.com/v1/chat/completions", {
    model: "gpt-4o-mini",
    messages: [
      {
        role: "system",
        content: "Convert user intent into JSON: {action, amount, token}"
      },
      { role: "user", content: prompt }
    ]
  }, {
    headers: {
      Authorization: `Bearer YOUR_API_KEY`
    }
  });

  return JSON.parse(res.data.choices[0].message.content);
}