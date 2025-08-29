import { config } from "dotenv";
import express from "express";
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
      "GET /1-dollar": {
        price: "$1",
        network: "base-sepolia",
      }
      ,"GET /5-dollar": {
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

app.post("/1-dollar", (req, res) => {
  const { amount, name, identifier, message } = req.query;
    if (!amount || !name) {
      return res.status(400).send({message: "A donation amount and name are required"});
    }
  
  res.status(200).send({message: "Donation successful"});
});

app.get("/5-dollar", (req, res) => {
  const { amount, name, identifier, message } = req.query;
  if (!amount || !name) {
    return res.status(400).send({message: "A donation amount and name are required"});
  }
  res.status(200).send({message: "Donation successful"});
});

app.get("/10-dollar", (req, res) => {
  const { amount, name, identifier, message } = req.query;
  if (!amount || !name) {
    return res.status(400).send({message: "A donation amount and name are required"});
  }
  res.status(200).send({message: "Donation successful"});
});

app.get("/20-dollar", (req, res) => {
  const { amount, name, identifier, message } = req.query;
  if (!amount || !name) {
    return res.status(400).send({message: "A donation amount and name are required"});
  }
  res.status(200).send({message: "Donation successful"});
});

app.get("/50-dollar", (req, res) => {
  const { amount, name, identifier, message } = req.query;
  if (!amount || !name) {
    return res.status(400).send({message: "A donation amount and name are required"});
  }
  res.status(200).send({message: "Donation successful"});
});

app.get("/100-dollar", (req, res) => {
  const { amount, name, identifier, message } = req.query;
  if (!amount || !name) {
    return res.status(400).send({message: "A donation amount and name are required"});
  }
  res.status(200).send({message: "Donation successful"});
});

// create streamlabs api call logic here

app.listen(4021, () => {
  console.log(`Server listening at http://localhost:${4021}`);
});