//Creado para poder editar cada para del html de cada pagina (Alterar)

import Document, { Html ,Head, Main, NextScript } from "next/document";
class MyDocument extends Document {
    static async getInitial(ctx) {
        const initialProps =  await Document.getInitial(ctx);
         return {... initialProps};
    }

    render(){
        return(
            <Html>
                <Head>
                    <title>my portfoio</title>
                    <meta name="description"  content="Daniel Mastrapa Portfolio web Site"  />
                     <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.css"></link>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument ;