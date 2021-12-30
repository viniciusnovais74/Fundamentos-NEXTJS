export default function handler(req,res){
    const cod = req.query.cod
    res.status(200).json({
        id: 1,
        nome: `Maria ${cod}`,
        email: `mariaaaadasgraças@${cod}.com`
    })
}