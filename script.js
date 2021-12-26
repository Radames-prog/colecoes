function getAdmins(map){
    let admins = []
    for([key, value] of map){
        if(value === 'Admin'){
            admins.push(key)
        }
    }
    return admins
}
const ususarios = new Map()
ususarios.set('Luiz', 'Admin')
ususarios.set('Radames', 'Admin')
ususarios.set('Lucimar', 'User')
ususarios.set('Natalia', 'Admin')

console.log(getAdmins(ususarios))