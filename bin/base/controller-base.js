'use strict'

exports.getAll = async(repository, req, res) => {
    try {
        let resultado = await repository.getAll();
        res.status(200).send(resultado);

    } catch (err) {
        console.log('Get com erro, motivo: ', err);
        res.status(400).send({message: 'Erro no processamento', error: err});
    }
}

exports.getById = async(repository, req, res) => {
try {
    let id = req.params.id;
    if(id){
        let resultado = await repository.getById(id);
        res.status(200).send(resultado);
    }

} catch (error) {
    console.log('Get por ID com erro, motivo: ', err);
    res.status(400).send({message: 'Erro no processamento', error: err});
}
}

exports.post= async(repository, validalidationContract, req, res) => {
    try {
        let data = req.body
        if(!validalidationContract){
            res.status(400).send({message: 'Existem dados inválidos na requisiçao', validation: validalidationContract.error()}).end();
            return;
        }

        let resultado = await repository.create(data);
        res.status(202).send(resultado);
    } catch (error) {
        console.log('post com erro, motivo: ', err);
    res.status(400).send({message: 'Erro no processamento', error: err});
    }

}

exports.put = async(repository, validalidationContract, req, res) => {
    try {
        let id = req.params.id;
        let data = req.body;
       if (!validalidationContract){
            res.status(400).send({message: 'Existem dados inválidos na requisição', validation: validalidationContract.error()}).end();
            return;
        }

        let resultado = await repository.update(id, data);
        res.status(201).send(resutlado);
    } catch (error) {
        console.log('post com erro, motivo: ', err);
        res.status(400).send({message: 'Erro no processamento', error: err});
    }
}

exports.delete = async(repository, req, res) => {
    try {
        let id = req.params.id;

        if(id){
            let resultado = await repository.delete(id);
            res.status(200).send({message: 'Registro exlcuido com sucesso !!'});
        }else {

        }
    } catch (error) {
        console.log('post com erro, motivo: ', err);
        res.status(400).send({message: 'Erro no processamento', error: err});
    }
}
