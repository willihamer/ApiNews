import React, { Fragment, useEffect, useState } from 'react';
import Formulario from './components/Formulario';
import Header from './components/Header';
import ListadoNoticias from './components/ListadoNoticias';


function App() {

    const [categoria, setCategoria] = useState('');
    const [noticias, setNoticias] = useState([]);

    useEffect(() => {
        const consultarAPI = async () => {
            // TODO: here you can put your APIKEY
            const apiKey = '';
            const URL = `https://newsapi.org/v2/top-headlines?country=us&category=${categoria}&apiKey=${apiKey}`;

            const rta = await fetch(URL);
            const noticias = await rta.json();
            setNoticias(noticias.articles);
            

        }
        consultarAPI();
    }, [categoria])

    return (
        <Fragment>
            <Header titulo='Buscador de Noticias' />
            <div className="container white">
                <Formulario
                    setCategoria={setCategoria}
                />
                <ListadoNoticias noticias={noticias}/>
            </div>
        </Fragment>
    );
}

export default App;
