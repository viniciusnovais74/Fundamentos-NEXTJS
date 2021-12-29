import Layout from "../../components/Layout";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function ClienteProCodigo() {
    
useEffect(()=>{
    console.log(router.query)
})

    return(

        <Layout title='Navegação Dinamica'>
<span>Codigo</span>

        </Layout>
    )
}