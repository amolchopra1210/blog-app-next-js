import {MongoClient} from 'mongodb';

async function handler(req, res) {
  if (req.method === "POST") {
    const { email, name, message } = req.body;
    if (
      !email ||
      !email.includes("@") ||
      !name ||
      name.trim() === "" ||
      !message ||
      message.trim() === ""
    ) {
      res.status(422).json({ message: "Invalid input." });
      return;
    }
    const newMessage = {
      email,
      name,
      message,
    };
    let client; 
    try{
     client = await MongoClient.connect(`mongodb+srv://amolchopra:${process.env.DATABASE_PASS}@cluster0.ikncw.mongodb.net/my-site?retryWrites=true&w=majority`);
    }
  catch(error){
    res.status(500).json({message: "could not connect"});
    return;
  }    
  const db = client.db();
  try {
    const result = await db.collection('messages').insertOne(newMessage);
    newMessage.id = result.insertedId;
  }
  catch(error){
    client.close();
    res.status(500).json({message: "could not add message to db"});
    return;
  }
  client.close();
    res.send(201).json({ message: "Success", message: newMessage });
  }
}

export default handler;
