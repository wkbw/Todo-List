function Todo({todo,index,remove}){
    function handle(){
        remove(index);
    }
    return <div className='todo' onClick={handle}>
        <input type="checkbox" />&nbsp;{todo.text} (-)</div>
}