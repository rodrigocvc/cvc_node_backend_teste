var fs = require('fs'),
    lodash = require('lodash');
var stream = fs.createWriteStream("data/hotels_v1.json");
stream.once('open', function (fd) {

    let cities = [
        {"id":1032, "name": "Porto Seguro"},
        {"id":9626, "name": "São Paulo"},
        {"id":7110, "name": "Rio de Janeiro"}
    ];

    stream.write(`[`);
    let totalhotels = lodash.range(5000);
    totalhotels.forEach((hotelData, i, hotels) => {
        let city = cities[lodash.random(0,2)];
        let hotel = `{
           "id": ${i} ,
           "name": "Hotel Teste ${i}",
           "cityCode": ${city.id},
           "cityName": "${city.name}",
           "rooms": [`

        let totalQuartos = lodash.range(lodash.random(1, 3));

        totalQuartos.forEach((quartoId, i, quartos) => {
            let tipoQuarto = "";
            switch (quartoId) {
                case 0:
                    tipoQuarto = 'Standard';
                    break;
                case 1:
                    tipoQuarto = 'Luxo';
                    break;
                case 2:
                    tipoQuarto = 'Triplo';
                    break;
                dafault:
                    tipoQuarto = 'Standard';
                    break;
            }

            let valorAdulto = lodash.round(lodash.random(200.1, 2000.99),2);
            let valorCrianca = lodash.round(lodash.random(100.1, 1000.99),2);

            hotel += `{
                   "roomID": ${quartoId},
                   "categoryName": "${tipoQuarto}",
                   "price": {
                       "adult": ${valorAdulto},
                       "child": ${valorCrianca}
                   }
               }`;
            if(i !== quartos.length -1){
                hotel += ",";
            }
        });
        hotel += `]}`;

        if(i !== hotels.length -1){
            hotel += ",";
        }
       stream.write(hotel);
    });
    stream.write("]");
    stream.end();
});




