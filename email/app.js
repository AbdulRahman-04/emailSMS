import nodemailer from "nodemailer";
import config from "config";
import path from "path"

let userEmail = config.get("USER");
let userPass = config.get("PASS");

async function sendEmail() {
  try {
    let transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: userEmail,
        pass: userPass,
      },
    });
    // console.log(transporter);

    let sender = await transporter.sendMail({
      from: `"code for india" ${sendEmail}`,
      subject: "Abdul Rahman test Email",
      to: "lesnarcena72@gmail.com",
      // text: "☕🫵🍼",
      html: `<h1>hello samid bhaaayyyy</h1>`,
      html: `<img src = "https://bunny-wp-pullzone-lhbuxhw1ph.b-cdn.net/wp-content/uploads/2024/09/UCL.jpg" </img>`,
      attachments: [
        {
            filename: "testsfile.txt",
            path: path.resolve("./steps.txt")
        }
     ]
    
    });

    console.log("email sent✅");
    console.log(sender.messageId);
  } catch (error) {
    console.log(error);
  }
}
sendEmail();
