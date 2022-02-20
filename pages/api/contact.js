import { MongoClient } from 'mongodb';

async function handler(req, res) {
  if (req.method === 'POST') {
    const { email, name, message } = req.body;

    if (
      !email ||
      !email.includes('@') ||
      !name ||
      name.trim() === '' ||
      !message ||
      message.trim() === ''
    ) {
      res.status(422).json({ message: 'Invalid input.' });
      return;
    }

    //store in db
    const newMessage = {
      email,
      name,
      message,
    };

    let client;

    try {
      client = await MongoClient.connect(
        'mongodb+srv://admin2:admin2@nextjs.lkgt2.mongodb.net/my-site?retryWrites=true&w=majority'
      );
    } catch (err) {
      res.status(500).json({ message: 'Could not connect to db!' });
      return;
    }

    const db = client.db();

    try {
      const result = await db.collection('messages').insertOne(newMessage);
      newMessage.id = result.insertedId;
    } catch (err) {
      res.status(500).json({ message: 'Storing message failed!' });
      client.close();
      return;
    }

    client.close();

    res
      .status(201)
      .json({ message: 'Successfully stored message!', data: newMessage });
  }
}

export default handler;
