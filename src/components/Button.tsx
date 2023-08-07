export default function HelloButton(obj: { username: string }) {

    function greetUser(name: string) {
        return alert(`Hola ${name}`);
    };
    
    return (
        <button onClick={() => greetUser(obj.username)}>😹</button>
    );
}

