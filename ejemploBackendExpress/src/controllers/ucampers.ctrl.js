const getDataUcamp = (_, res) => {
    res.status(200).json({
        msg:"Bienvenido a la api de ucamp 1"
    })
}

const getDataUcamp2 = (_, res) => {
    res.status(200).json({
        msg:"Bienvenido a la api de ucamp 2"
    })
}

const getDataUcamp3 = (_, res) => {
    res.status(200).json({
        msg:"Bienvenido a la api de ucamp 3"
    })
}

module.exports = {
    getDataUcamp,
    getDataUcamp2,
    getDataUcamp3
}