


module.exports = {

    async createHardware(request, response) {
        const { model, ram, clock, driver, memoryType, powerSupply } = request.body;
        console.log(request.body);

        
    }
}

