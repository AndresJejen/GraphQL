//Modelo de documentos
const Doc = require('../../models/docs');

//just user function
const { transformDoc } = require('./merge');

module.exports = {
    //Resolver query docs
    docs: async ()=>{                                                   
        try{
            const docs = await Doc.find();
            return docs.map(doc => {
                return transformDoc(doc);
            });
        }
        catch(err) {
            console.error(`Error en consultar todos los documentos ${err}`)
            throw err;
        };
    },
    // Resolver create a new Doc 
    createDoc: async (args) =>{                                     
        const doc = new Doc({
            name: args.docInput.name,
            titulo: args.docInput.titulo,
            author: args.docInput.author,
            mlanguage: args.docInput.mlanguage,
            typedoc: args.docInput.typedoc,
            wlanguage: args.docInput.wlanguage,
            ilevel: args.docInput.ilevel,
            flevel: args.docInput.flevel,
            date: new Date(),
            link: args.docInput.link,
            helper : '5caa64d94c22f22c601627b6'
        });
        try{
            const result = await doc.save();
            const helper = await User.findById('5caa64d94c22f22c601627b6');
            if (!helper){
                throw new Error('Usuario inexistente.');
            }
            helper.documentsadded.push(doc);
            
            await helper.save();

            return transformDoc(result);
        }
        catch(err) {
            console.error(`Error en guarda un nuevo documento ${err}`)
            throw err;
        };
    }
};
