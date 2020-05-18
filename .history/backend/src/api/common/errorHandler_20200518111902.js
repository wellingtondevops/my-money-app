const _ = require('lodash')


module.exports = (req, res, next) => {
    const bundle = res.locals.bundle

    if (bundle.error) {
        const errors = parseErrors(bundle.errors)
        res.status(500).json({ errors })
    } else {
        next()
    }
}

const parseErrors = (nodeRestfulErros) => {
    const erros = []
    _.forIn(nodeRestfulErros, error => errors.push(error.message))
    return errors
}