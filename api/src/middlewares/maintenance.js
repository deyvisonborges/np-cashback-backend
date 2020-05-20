const mode = flag => async (req, res, next) => {
    try {
        console.log(flag)
        if (flag == true)
            return res.send({ msg: 'Estamos em mode de manutenção'});
        
        next(); 
    } catch (err) {
        next(err);
    }
}
module.exports = mode;
