let LoggedUser : boolean = false


export default function Greetings(obj:{name: string}){
    return( 
        <div>
            {LoggedUser &&  <p>Hola {obj.name}!, Cabronazo</p>}
        </div>        
    );
}