const users = require('./data/index.js')

// listUsers
const list = (req, res) => {
    res.json(users)
};
// Should retrieve the entire array from data/index

// showUser
const show = (req, res) => {
    const getUsers = users.some(user => user.id == req.params.id)
    if (getUsers){
      res.send(users.filter(user => user.id == req.params.id))
    } else {
      res.status(404).json({msg: `User id ${req.params.id} not found.`})
    }
};
// Should retrieve just the user that matches the passed-in id

// createUser
const create = (req, res) => {
    let counter = users.length +1;
    const newUser = {        
            id: counter,
            name: req.body.name,
            username: req.body.username,
            email: req.body.email,
            address: {
                street: req.body.address.street,
                suite: req.body.address.suite,
                city: req.body.address.city,
                zipcode: req.body.address.zipcode,
                geo: {
                  lat: req.body.address.geo.lat,
                  lng: req.body.address.geo.lng
                }
            },
            phone: req.body.phone,
            website: req.body.website,
            company: {
                name: req.body.company.name,
                catchPhrase: req.body.company.catchPhrase,
                bs: req.body.company.bs
            }
}
        users.push(newUser);
        counter++;
        res.json({msg: 'User Added: ', newUser})
};
// Should add a user to the array

// updateUser
const update = (req, res) => {
    const found = users.some(user => user.id == req.params.id)
    if (found) {
        const updatedUser = req.body;
        console.log(updatedUser)
        users.forEach(user => {
            if(user.id ==req.params.id){
                user.name = req.body.name ? updatedUser.name : user.name;
                user.username = req.body.username ? updatedUser.username : user.username;
                user.email = req.body.email ? updatedUser.email : user.email;
                    
                    user.phone = req.body.phone ? updatedUser.phone : user.phone;
                    user.website = req.body.website ? updatedUser.website : user.website;
                    
                    res.json({msg: "User Updated Successfully: ", user})            }
        })
    } else {
        res.status(404).json({msg: `User id ${req.params.id} not found.`})
    }

};
// Should update one user in the array based on its id

// deleteUser
const remove = (req, res) => {
    const found = users.some(user => user.id == req.params.id)
    if (found){
        const removeThis = users.filter(user => user.id == req.params.id)
        users.splice(removeThis, 1);
        res.send(users)
    } else {
        res.status(404).json({msg: `User id ${req.params.id} not found.`})
    }
};
// Should delete one user from the array based on its id


module.exports = { 
    list,
    show,
    create,
    update,
    remove
}