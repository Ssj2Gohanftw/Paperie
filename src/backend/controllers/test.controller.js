const helloWorld = (req,res) => {

    const message = {msg:"Hello world"};

    console.log(req.body);

    res.status(200).send(message);

}


module.exports = {
    helloWorld
}