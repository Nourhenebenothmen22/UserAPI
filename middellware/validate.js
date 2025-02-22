const { validationResult, body } = require("express-validator");

const validatefacture = (fields) => {
    const validations = fields.map((field) => {
        switch (field) {
            case "ref":
                return body('ref')
                    .notEmpty().withMessage({ name: "ref", message: "La référence est requise" })
                    .isLength({ min: 3 }).withMessage({ name: "ref", message: "La référence doit contenir au moins 3 caractères" })
                    
            case "remise":
                return body('remise')
                    .optional() // La remise est optionnelle
                    .isNumeric().withMessage({ name: "remise", message: "La remise doit être un nombre" })
                    .isFloat({ min: 0 }).withMessage({ name: "remise", message: "La remise ne peut pas être négative" });
            case "description":
                return body('description')
                    .notEmpty().withMessage({ name: "description", message: "La description est requise" });
            case "montantTotal":
                return body('montantTotal')
                    .notEmpty().withMessage({ name: "montantTotal", message: "Le montant total est requis" })
                    .isNumeric().withMessage({ name: "montantTotal", message: "Le montant total doit être un nombre" })
                    .isFloat({ min: 0 }).withMessage({ name: "montantTotal", message: "Le montant total ne peut pas être négatif" });
            default:
                return null;
        }
    }).filter(Boolean);

    return [
        ...validations,
        (req, res, next) => {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                const formattedErrors = errors.array().map(err => ({
                    name: err.path,
                    message: err.msg.message || err.msg
                }));
                return res.status(400).json({ errors: formattedErrors });
            }
            next();
        }
    ];
};

module.exports = validatefacture;