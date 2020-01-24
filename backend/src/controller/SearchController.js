const Dev = require('../models/Dev');

module.exports = {
    async index(request, response){

        const { latitude, longitude, techs } = request.query;

        const techsArray = parseStringAsArray(techs);

        const devs = await Dev.find({
            techs: {
                $in: techsArray,

            },
            location:{
                $near: {
                    $geometry:{
                        type: 'Point',
                        coordinates:  [longitude, latitude],
                    },
                    $maxDistance: 10000,
                }
            },
        });
        // busca todos dev num raio de 10 KM e filtrando por tecnologias

        return response.json({ devs: []});

    }
}