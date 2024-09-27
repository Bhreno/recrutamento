import {useState, useEffect} from 'react';
import ListaDeAlunos from './components/ListaDeAlunos';
import {initializeApp} from "firebase/app";
import {connectFirestoreEmulator, getFirestore} from "firebase/firestore";

const App = () => {

    useEffect(() => {
        const firebaseConfig = {
            //TODO: colocar a configuração do seu projeto aqui
        };
        
        const firebaseApp = initializeApp(firebaseConfig);
        const db = getFirestore(firebaseApp);
        setFs(db);
        
        connectFirestoreEmulator(db, "localhost", 8080);
    },[]);
    
    const [fs, setFs] = useState(null);
    const [mostraLista, setMostraLista] = useState(false);

    const handleLista = () => {
        setMostraLista(true);
    }

    return(
        <div className={`flex bg-primary-700 min-h-dvh`}>
                <div className="card w-full h-fit my-8 mx-4 sm:mx-12 lg:mx-28 xl:mx-40">
                    <div className="flex flex-col">    
                        <div className="pt-1 pb-3 border-b-2 border-secondary-600">
                            <div className="px-6 text-primary-500 font-fredoka font-semibold text-2xl">
                                Lista de alunos
                            </div>
                        </div>
                        <div className="pb-2 pt-4 flex flex-col gap-2">
                            {mostraLista?
                            <ListaDeAlunos db={fs} />
                            :
                            <button onClick={() => {handleLista()}} 
                                className='px-2 py-1 rounded btn btn-primary text-white w-fit'>
                                Traz sua lista de alunos
                            </button>
                            }
                        </div>                            
                    </div>
                </div>
        </div>
    )
}

export default App;