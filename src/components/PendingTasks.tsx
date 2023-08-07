

export default function PendingTasks(obj: {todos: string[]}){
    const tasks: any[] = obj.todos.map( todo =>
        <li key={todo}>{todo}</li>
    )

    return (
        <ul>{tasks}</ul>
    )
}