export default function Jsx(){

    const titulo = <h1>JSX e um conceito central</h1>;

    function subtitle(){
        return <h2>{"muito legal".toUpperCase()}</h2>
    }

    return (
        <div>
            {titulo}
            {subtitle}
            <p>
                {JSON.stringify({name:'João', age: '32'})}
            </p>

        </div>
    )
}