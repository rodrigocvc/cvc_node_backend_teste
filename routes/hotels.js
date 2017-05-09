import _ from 'lodash';

module.exports = app => {
    app.get("/hotels/avail/:cityCode", (req, res) => {
        let cityCode = req.params["cityCode"];
        let hotels = app.get('hotels');
        let result = _.filter(hotels, ["cityCode", parseInt(cityCode)]);
        res.json(result);
    });

    app.get("/hotels/:hotelID", (req, res) => {
        let hotelID = req.params["hotelID"];
        let hotels = app.get('hotels');
        let result = _.filter(hotels, ["id", parseInt(hotelID)]);
        res.json(result);
    });

};