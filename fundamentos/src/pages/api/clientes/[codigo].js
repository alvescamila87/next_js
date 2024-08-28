export default function handlerCodigo(req, res) {
    const codigo = req.query.codigo

    res.status(200).json({
        id: codigo,
        name: `Madalena ${codigo}`,
        email: `madalena${codigo}@email.com`
    })
}