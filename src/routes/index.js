const { Router } = require('express');
const nodemailer = require('nodemailer');
const router = Router();

router.post('/send-email',async (req,res)=>{
    const { name, email, phone, message}= req.body;
    contentHTML = `
        <h1>User Information</h1>
        <ul>
            <li>Username: ${name}</li>
            <li>User Email: ${email}</li>
            <li>Phone: ${phone}</li>
        </ul>
        <p>${message}</p>
    `;
    const transporter= nodemailer.createTransport({
        host: 'mail.cherrybit.com.mx',
        port: 26,
        secure: false,
        auth:{
            user:'contacto@cherrybit.com.mx',
            pass:'Yy}S4lJsp)a_'
        },
        tls:{
            rejectUnauthorized:false
        }
    });
    const info = await transporter.sendMail({
        from:"'cherrybit Server'<contacto@cherrybit.com.mx>",
        to: 'oarcia99@gmail.com',
        subject:'Formulario chingon',
        //text: 'hello world'
        html: contentHTML
    });
    console.log('Message sent', info.messageId);
    res.redirect('/success.html')
});
module.exports = router;