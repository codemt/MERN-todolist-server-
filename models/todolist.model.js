module.exports = (sequelize,Sequelize) => {

    const Todolist = sequelize.define("todolist",{

            title:{
                type: Sequelize.STRING

            },
            todo:{

                type: Sequelize.STRING

            },
            done:{
                type:Sequelize.BOOLEAN

            }


    })
    return Todolist
}
