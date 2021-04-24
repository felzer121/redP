const sgMail = require("@sendgrid/mail");

export default async function (req, res) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);

  const { email, name, message } = req.body;

  const content = {
    to: "partners@red-affiliates.com",
    from: "partners@red-affiliates.com",
    subject: `Red Affiliates Contact Form`,
    text: message,
    html: `
      Name: ${name}<br/>
      Email: ${email}
      <p>${message}</p>
      `,
  };

  try {
    await sgMail.send(content);
    res.status(200).send("Message sent successfully.");
  } catch (error) {
    console.log("ERROR", error);
    res.status(400).send("Message not sent.");
  }
}
