import styles from '../styles/Estiloso.module.css';///

import Link from 'next/link';
import Layout from '../components/Layout';
export default function Estiloso() {

    return (
        <Layout title="Bem Vindo a Pagina Estiloso">
            <div className={styles.roxo}>

                <h1>Estilo usando CSS Modulos</h1>
            </div>
        </Layout>
    )

}