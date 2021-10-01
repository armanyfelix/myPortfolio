export default function (req, res) {

    require('dotenv').config()
    let nodemailer = require('nodemailer')

    if (req.method === 'POST') {
        let transporter = nodemailer.createTransport({
            port: 465,     
            host: "smtp.gmail.com",
            auth: {
                user: process.env.BOT_USER,
                pass: process.env.BOT_PASS,
            },
            secure: true,
        });
        const name = req.body.name;
        const email = req.body.email;
        const message = req.body.message;
        const mail = {
            from: process.env.BOT_USER,
            to: process.env.USER,
            text: "Send from portfolio",
            subject: `Message from ${name}`,
            html: `<p>Name: ${name}</p>
                   <p>Email: ${email}</p>
                   <p>Message: ${message}</p>`,
        };

        transporter.sendMail(mail, (error) => {
            if (error) {
                res.json({ status:  "ERROR" });
            } else {
                res.json({ status: "Message sent" });
            }
        });

        const mailReply = {
            from: process.env.BOT_USER,
            to: email,
            subject: `Thanks for the message, ${name}!`,
            text: 'Hello, I am Armany[bot]! You sent a message through the Contact form of my portfolio, thanks! Your message has been received, and you should get a reply soon.',
            html:
                '<div><h3>Hello, I am Armany[bot]!</h3><p>You sent a message through the Contact form on my <a href="https://armanyfelix.herokuapp.com/">portfolio</a>, thanks! Your message has been received, and you should get a reply ASAP. Meanwhile, check out my <a href="https://www.linkedin.com/in/armany-felix/">Linkedin</a> and <a href="https://github.com/armanyfelix">Github!</a></p><h3>¡Peace!</h3></div>'
        }

        transporter.sendMail(mailReply, (err, info) => {
            if (err) {
                console.log(err)
            } else {
                console.log(info);
            }
        });
    }
}

