export default function handlerCliente(req, res) {

    if(req.method === 'GET'){
        handleWebpackExternalForEdgeRuntime(req, res)
    } else {
        res.status(405).send()
    }

    // res.status(204).send() ou .json()
    // res.status(200).json({
    //     id: 3,
    //     name: "Madalena",
    //     age: 36
    // })
}

function handleGet(req, res){
    res.status(200).json({
        id: 3,
        name: "Madalena",
        age: 36,
        email: 'madalena@email.com'
    })
}