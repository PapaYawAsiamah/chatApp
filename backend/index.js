
const express = require("express");
const cors = require("cors");
const axios = require('axios')

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
  const { username } = req.body;

  try {
    const r = await axios.put(
      "https://api.chatengine.io/users/",
      {
        username: username,
        secret: username,
        first_name: username,
      },

      {
        headers: { "private-key": "a79cae9a-4d5b-47b0-9f0e-2cc6a730b566" },
      }
    );
    return res.status(r.status).json(r.data);
  } catch (e) {
     console.log(e);
  }
});

app.listen(3001);
