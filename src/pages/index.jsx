import Link from "next/link"
import Layout from "../components/Layout"
export default function Inicio() {
    return (
        <Layout>
            <div>
                <Link href='/estiloso'>Estiloso</Link>
            </div>
        </Layout>
    )
}