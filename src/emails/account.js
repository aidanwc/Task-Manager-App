const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email,name) => {
    sgMail.send({
        to:email,
        from:'aidanwc98@gmail.com',
        subject:'Thanks for joining us!',
        text:`Welcome to the note taking app. $(name). We hope you enjoy it.`
    })
}

const sendCancellationEmail = (email,name) => {
    sgMail.send({
        to:email,
        from:'aidanwc98@gmail.com',
        subject:'Sorry to see you go!',
        text:`Goodbye $(name). We hope to see you back soon.`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancellationEmail
}
