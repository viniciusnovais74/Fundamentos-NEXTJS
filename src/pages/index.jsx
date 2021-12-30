
import { useState } from "react"
import Navegador from "../components/Navegador"
export default function Inicio() {
 
    return (
        <div style={{
            display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap', height: '100vh'
        }}>
            <Navegador destino='/estiloso' name='Estiloso' cor='crimoson' />
            <Navegador destino='/exemplo' name='Exeplo' cor='darkblue' />
            <Navegador destino='/jsx' name='JSX' cor='purple' />
            <Navegador destino='/navegacao/' name='Navegação 01' cor='green' />

            <Navegador destino='/cliente/' name='Navegação 01' cor='green' />

            <Navegador destino='/integracao_1' name='Clientes ' cor='#9d00ff' />
            <Navegador destino='/estatico' name='Clientes ' cor='#9d00ff' />
            <Navegador destino='/integracao_1' name='Clientes ' cor='#9d00ff' />
        </div>
    )
}