import { config } from "dotenv";
import express from "express";
import axios from "axios";
import { paymentMiddleware, Resource } from "x402-express";
import cors from "cors";
config();

const facilitatorUrl = process.env.FACILITATOR_URL as Resource;
const payTo = process.env.ADDRESS as `0x${string}`;

if (!facilitatorUrl || !payTo) {
  console.error("Missing required environment variables");
  process.exit(1);
}

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

app.use(
  paymentMiddleware(
    payTo,
    {
      "POST /1-dollar": {
        price: "$0.001",
        network: "base-sepolia",
      },
      "GET /5-dollar": {
        price: "$5",
        network: "base-sepolia",
      }
      ,"GET /10-dollar": {
        price: "$10",
        network: "base-sepolia",
      }
      ,"GET /20-dollar": {
        price: "$20",
        network: "base-sepolia",
      }
      ,"GET /50-dollar": {
        price: "$50",
        network: "base-sepolia",
      }
      ,"GET /100-dollar": {
        price: "$100",
        network: "base-sepolia",
      }
    },
    {
      url: facilitatorUrl,
    },
  ),
);

//make a function that can be called in all of my donation endpoints that makes the api call to streamlabs
const makeStreamlabsApiCall = async (amount: number, name: string, identifier: string, message: string) => {
  await axios.post("https://streamlabs.com/api/v2.0/donations", {
    name: name,
    message: message || null,
    identifier: identifier,
    amount: amount,
    currency: "USD"
  }, {
    headers: {
      'Content-Type': 'application/json',
      'X-Requested-With': 'XMLHttpRequest',
      'Authorization': `Bearer ${process.env.STREAMLABS_TOKEN}`
    }
  });
}

app.post("/1-dollar", async (req, res) => {
  const { amount, name, identifier, message } = req.body;
  try {
    if (!amount || !name) {
      return res.status(400).send({message: "A donation amount and name are required"});
    }

    await makeStreamlabsApiCall(amount, name, identifier, message);
    res.status(200).send({message: "Donation successful"});
    
  } catch (error) {
    console.error(error);
    return res.status(500).send({message: "An error occurred"});
  }});
  
app.post("/5-dollar", async (req, res) => {
  const { amount, name, identifier, message } = req.body;
  try {
    if (!amount || !name) {
      return res.status(400).send({message: "A donation amount and name are required"});
    }

    await makeStreamlabsApiCall(amount, name, identifier, message);
    res.status(200).send({message: "Donation successful"});
    
  } catch (error) {
    console.error(error);
    return res.status(500).send({message: "An error occurred"});
}});

app.post("/10-dollar", async (req, res) => {
  const { amount, name, identifier, message } = req.body;
  try {
    if (!amount || !name) {
      return res.status(400).send({message: "A donation amount and name are required"});
    }

    await makeStreamlabsApiCall(amount, name, identifier, message);
    res.status(200).send({message: "Donation successful"});
    
  } catch (error) {
    console.error(error);
    return res.status(500).send({message: "An error occurred"});
}});

app.post("/20-dollar", async (req, res) => {
  const { amount, name, identifier, message } = req.body;
  try {
    if (!amount || !name) {
      return res.status(400).send({message: "A donation amount and name are required"});
    }

    await makeStreamlabsApiCall(amount, name, identifier, message);
    res.status(200).send({message: "Donation successful"});
    
  } catch (error) {
    console.error(error);
    return res.status(500).send({message: "An error occurred"});
}});

app.post("/50-dollar", async (req, res) => {
  const { amount, name, identifier, message } = req.body;
  try {
    if (!amount || !name) {
      return res.status(400).send({message: "A donation amount and name are required"});
    }

    await makeStreamlabsApiCall(amount, name, identifier, message);
    res.status(200).send({message: "Donation successful"});
    
  } catch (error) {
    console.error(error);
    return res.status(500).send({message: "An error occurred"});
}});

app.post("/100-dollar", async (req, res) => {
  const { amount, name, identifier, message } = req.body;
  try {
    if (!amount || !name) {
      return res.status(400).send({message: "A donation amount and name are required"});
    }

    await makeStreamlabsApiCall(amount, name, identifier, message);
    res.status(200).send({message: "Donation successful"});
    
  } catch (error) {
    console.error(error);
    return res.status(500).send({message: "An error occurred"});
}});

app.get("/get-streamer-info", async (req, res) => {
try{
  //make api call to streamlabs to get the streamer info
  const response = await axios.get("https://streamlabs.com/api/v2.0/user", {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${process.env.STREAMLABS_TOKEN}`
    }
  });
  return res.status(200).json(response.data);
} catch (error) {
  console.error(error);
  return res.status(500).send({message: "An error occurred"});
}
});

// create streamlabs api call logic here

app.listen(4021, () => {
  console.log(`Server listening at http://localhost:${4021}`);
});