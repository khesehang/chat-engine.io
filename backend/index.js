const express = require("express");
const cors = require("cors");
const { default: axios } = require('axios')

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
    const { username } = req.body;

    try {
        const r = await axios.put(
            'https://api.chatengine.io/users/',
            { username: username, secret: username, first_name: username },
            {
                headers: {
                    "private-key": "e10d07ce-5bf3-4b19-822e-4e3c12bcd6ad"
                }
            }
        )
        return res.status(r.status).json(r.data)
    } catch (e) {
        return res.status(e.status).json(e)
    }
});

app.listen(3001, () => {
    console.log('listening on port', 3001)
});