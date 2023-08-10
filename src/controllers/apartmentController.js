
const getApartmentPage = (req, res) => {
    // process data
    res.send("Hello There")
}

const getWibuPage = (req, res) => {
    res.render("sample.ejs")
}

module.exports = {
    getApartmentPage,
    getWibuPage,
}