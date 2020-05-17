const Hardwares = require('../model/hardwareSpec');

module.exports = {


    async getHardwareInfo(request, response) {

        const { value } = request.body.selected;
        const model = value;

        try {
            const getInfo = await Hardwares.find({model});
            //console.log(getInfo);
            return response.json(getInfo);

        } catch (error) {
            return response.send(error);
        } 
    },

    async createHardware( request, response ) {
        const {model, ram, clock, driver, memoryType, powerSupply} = request.body;
    
        if ( !model || !ram || !clock || !driver || !memoryType || !powerSupply ) {
            return response.send({ message: "Dados insuficientes, por favor preencha todos os campos."});
        }

        try {
            if ( await Hardwares.findOne({ model })) {
                return response.send({ message: "Este hardware já existe no banco de dados."});

            } else {
                const newHardware = Hardwares.create(request.body);
                return response.send(newHardware);
            }

        } catch (error) {
            return response.send(error);
        }
    }
}