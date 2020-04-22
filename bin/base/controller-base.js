"use strict";

//-----------------------RN ----------------------


exports.senEmail = async(email, texto) =>{
  const nodemailer = require("nodemailer");
  let transporter = nodemailer.createTransport({
    host: "smtp-mail.outlook.com",
    port: 25,
    secure: false,
    auth:{
        user: "rael_goomes@hotmail.com",
        pass: "gordinho157"
    }
});

transporter.sendMail({
    from: "Israel Gomes <rael_goomes@hotmail.com>",
    to: "rael_goomes@hotmail.com",
    subject: "Teste do nodemailer",
    text: "Teste nodemailer texto",
    html: "Teste pelo <a href='https://www.google.com.br'>HTMLM</a>"
}).then(message=>{
    console.log(message)
}).catch(error =>{
    console.log(error)
})


}


exports.getAll = async (repository, req, res) => {
  try {
    let resultado = await repository.getAll();
    res.status(200).send(resultado);
  } catch (err) {
    console.log("Get com erro, motivo: ", err);
    res.status(400).send({ message: "Erro no processamento", error: err });
  }
};

exports.getById = async (repository, req, res) => {
  try {
    let id = req.params.id;
    if (id) {
      let resultado = await repository.getById(id);
      res.status(200).send(resultado);
    }
  } catch (err) {
    console.log("Get por ID com erro, motivo: ", err);
    res.status(400).send({ message: "Erro no processamento", error: err });
  }
};

exports.post = async(repository, validalidationContract, req, res) => {
  try {
    let data = req.body;
    if (!validalidationContract.isValid()) {
      res.status(400).send({
          message: "Existem dados inválidos na requisiçao",
          validation: validalidationContract.errors()}).end();
      return;
    }

    let resultado = await repository.create(data);
    res.status(202).send(resultado);
  } catch (err) {
    console.log("post com erro, motivo: ", err);
    res.status(400).send({ message: "Erro no processamento", error: err });
  }
};

exports.put = async (repository, validalidationContract, req, res) => {
  try {
    let id = req.params.id;
    let data = req.body;

    if (!validalidationContract) {
      res.status(400).send({
          message: "Existem dados inválidos na requisição",
          validation: validalidationContract.errors()}).end();
      return;
    }

    let resultado = await repository.update(id, data);
    res.status(201).send(resultado);
  } catch (err) {
    console.log("post com erro, motivo: ", err);
    res.status(400).send({ message: "Erro no processamento", error: err });
  }
};

exports.delete = async (repository, req, res) => {
  try {
    let id = req.params.id;

    if (id) {
      let resultado = await repository.delete(id);
      res.status(200).send({ message: "Registro exlcuido com sucesso !!" });
    } else {
    }
  } catch (err) {
    console.log("post com erro, motivo: ", err);
    res.status(400).send({ message: "Erro no processamento", error: err });
  }
};

