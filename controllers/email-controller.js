'use-strict'

function emailController(){ }
    
    emailController.prototype.sendEmailMet = async (req, res)=>{
   
        let emails = ''
             req.body.emails.forEach(i=>{
                     emails += `${i.email};`
            })
        console.log('Emails', emails)
        //criando um transporter, que é um entrgador de emails
        const nodemailer = require("nodemailer");
        let transporter = nodemailer.createTransport({
         host: "smtp-mail.outlook.com",
         port: 25,
         secure: false,
         auth:{
             user: "web2square@hotmail.com",
             pass: "estudo123"
         },
         tls: { rejectUnauthorized: false }
     });
    
     const emailOptions = {
        from: "Web² <web2square@hotmail.com>",
        to: emails,
        subject: req.body.assunto,
        text: req.body.text,
     }

     await transporter.sendMail(emailOptions, (error, info) =>{
        if (error) {
            console.log('Erro', error);
                 res.status(400).send(error);
        } else {
            console.log('Email enviado com sucesso.');
            res.status(200).send(info);
            }
    });
        
    //  }).then(message=>{
    //      console.log('Não deu erro', message)
    //      res.status(200).send({ message: "Sucesso"});
    //  }).catch(error =>{
    //      console.log('Entrou no erro',error)
    //      res.status(400).send({ message: "Erro no processamento", error: error });
    //     }) 
        
        }


 module.exports = emailController
