'use strict'

require('../models/projeto-model');
const mongoose = require('mongoose');
const projetoModel = mongoose.model('Projetos');

class projetoDAO {
    constructor(){ }



   async getAll(){ 
       return await projetoModel.find();
   }
   
   async getById(id){ 
    return await projetoModel.findById(id); 

   }

   async create(data){ 
       let modelo = await projetoModel(data);
        return await modelo.save();
    }

   async update(id, data){ 
        await projetoModel.findByIdAndUpdate(id, {$set: data});
        let resultado = projetoModel.findById(id);
        return resultado;
   }

   async delete(id){ 
       return await projetoModel.findByIdAndRemove(id);
   }
}

module.exports = projetoDAO;