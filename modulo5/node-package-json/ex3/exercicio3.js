const task = ["Lavar a louça", "Estudar"]
const addTask = `${process.argv[2]} ${process.argv[3]} ${process.argv[4]}`
task.push(addTask)

console.log(`Tarefa adicionada com sucesso`)
console.log(task)