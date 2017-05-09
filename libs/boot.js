import fs from 'fs';

module.exports = app => {

    let port = app.get("port");

    fs.readFile('data/hotels_v1.json', (err, data) => {
        if(err) throw err;
        // console.log(data.toString());
        let hotels = JSON.parse(data.toString());
        app.set('hotels', hotels);
    });

    app.listen(port, () => {
        console.log(`listen port ${port}`);
    })

};