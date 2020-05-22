const mode = flag => (req, res, next) => {
	try {
		if (flag === true)
			return res.json({	
				title: 'Modo de manutenção',
				description: 'No momento estamos em manuntenção. Volte mais tarde.'
			});
		next();
	} catch (err) {
		next(req.body = err.message);
	}
}
module.exports = mode;
