import { useState } from "react";
import Layout from "../components/Layout";

export default function Estado() {

    const [numero, setNumero] = useState(0)

    function incremento() {
        setNumero(numero + 1)
    }
    return (
        <Layout title='Componente com Estado'>
            <div>{numero}</div>
            <button onClick={incremento}></button>
        </Layout>
    )
}