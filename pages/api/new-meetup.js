import { MongoClient } from "mongodb";

async function handlers(req, res) {
  if (req.method === "POST") {
    const data = req.body;

    try {
      const client = await MongoClient.connect(
        "mongodb+srv://amusatako:44P7WbYlIjJM7oPz@cluster0.zic2ust.mongodb.net/?retryWrites=true&w=majority"
      );
      const db = client.db();

      const meetupsCollection = db.collection("meetups");
      const result = await meetupsCollection.insertOne(data);

      client.close();
      res.status(201).json({ message: "Meetup created" });
    } catch (error) {
      res.status(400).json({ message: "Meetup creation error, retry later" });
    }
  }
}

export default handlers;
