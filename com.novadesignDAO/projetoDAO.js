'use strict'

require('../models/projeto-model');
const base = require('../bin/base/DAO-base')

class projetoDAO {
    constructor(){
        this._base = new base('Projetos');
    }



   async getAll(){ 
       return await this._base._model.find().populate('usuario', '_id nome email');
   }
   
   async getById(id){ 
    return await this._base.getById(id); 

   }

   async getByUserId(id){
    return await this._base._model.find({ usuario: id});
}

async getByClienteId(id){
    return await this._base._model.find({ cliente: id});
}
   async create(data){ 
      return await this._base.create(data);
    }

   async update(id, data){ 
        return await this._base.update(id, data);         
}

   async delete(id){ 
       return await this._base.delete(id);
   }
}

module.exports = projetoDAO;