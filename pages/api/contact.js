import nodemailer from 'nodemailer';

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

    if (name.length < 2) {
      res
        .status(422)
        .json({ message: 'Name is too short (at least 2 chars).' });
      return;
    }

    if (message.length <= 10) {
      res.status(422).json({
        message: 'Message seems to be to short, type at least 15 chars.',
      });
      return;
    }

    const newMessage = {
      email,
      name,
      message,
    };

    const output = `
    <div style="padding: 10px; border: 1px solid #000; border-radius: 20px">
    <h2 style="text-align: center;" >You have new message from tbwebdev's contact form!</h2>
    <hr style="border-top:1px solid #000;">
    <h3 style="color: #4ace76;" >Contact details:</h3>
    <ul style="list-style-type: none;" >
    <li><span style="font: bold;" >Name:</span> ${newMessage.name}</li>
    <li><span style="font: bold;" >Email:</span> ${newMessage.email}</li>
    </ul>
    <hr style="border-top:1px solid #000; margin-top: 20px">
    <h2>Message:</h2>
    <p style="font-size: 1rem;" >${newMessage.message}</p>
    </div>
    `;

    try {
      let transporter = nodemailer.createTransport({
        host: 'mail.tbwebdev.pl',
        port: 465,
        secure: true,
        auth: {
          user: process.env.EMAIL,
          pass: process.env.PASSWORD,
        },
        tls: {
          rejectUnauthorized: false,
        },
      });

      let info = await transporter.sendMail({
        from: `=>${newMessage.name} <${newMessage.email}>`,
        to: 'tbwebdevpl@gmail.com',
        subject: 'New tbwebdev FORM message',
        html: output,
      });
      res
        .status(201)
        .json({ message: 'Successfully send message!', data: newMessage });
    } catch (err) {
      res
        .status(500)
        .json({ message: err.message || 'Could not send an email!' });
      return;
    }
  }
}

export default handler;
