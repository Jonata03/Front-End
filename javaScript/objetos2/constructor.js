function Task(name){
    let _name= name
    this.createAt=new Date()
    this.changeName = function(newName){
        if(newName){
            this.name = newName
            this.updatedAt = new Date()
        }

    }
    this.getName = function (){
        return _name
    }
}

const task1 = new Task("minha tarefa")
task1.changeName("minha tarefa atualizada")

console.log(task1)

const task2 = new Task("2ª tarefa")
console.log(task2)
task2.changeName()
console.log(task2)
console.log(task2.getName())