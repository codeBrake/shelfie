module.exports = {
    addInventory(req, res){
        let db = req.app.get('db')
        let {imageUrl, productName, price} = req.body
        console.log(req.body)
        db.add_inventory({imageUrl, productName, price}).then(dbRes => { //need to add_inventory sql file
            res.status(200).send(dbRes)
        })
    },
    getList(req, res){
        let db = req.app.get('db')
        db.get_List().then( dbRes => {  //need to get_list sql file
            res.status(200).send(dbRes)
        })
    },
    editArray(req, res){
        let db = req.app.get('db')
        db.edit_Array().then(dbRes => {
            res
        })
    },
    deleteSome(req, res) {
        let db = req.app.get('db')
        let {id} = req.params 
        db.delete_by_id({id}).then(dbRes => {
            res.status(200).send(dbRes)
        })
    }
}