import { useEffect, useState } from "react";
import TabelaPadrao from "./TabelaPadrao";
import { collection, getDocs, query } from "firebase/firestore";

const ListaDeAlunos = ({db}) => {

    const [alunosData, setAlunosData] = useState([]);

    useEffect(() => {
        const colRef = collection(db, "alunos");
        let q = query(colRef);
        getDocs(q).then((querySnapshot) => {
            let alunos_aux = [];
            let cont = 0;
            querySnapshot.forEach((doc) => {
                let aluno_aux = {};
                aluno_aux["id"] = cont;
                aluno_aux["idAluno"] = doc.id;
                aluno_aux["nome"] = doc.data().nome;
                aluno_aux["email"] = doc.data().email;
                aluno_aux["papel"] = doc.data().papel;
                alunos_aux.push(aluno_aux);
                cont+=1;
            });
            setAlunosData(alunos_aux);
        }).catch((err) => {
            alert("Houve um erro ao buscar a lista de alunos. Tente novamente por favor."
                +"\nSe o erro persistir, contate um administrador.");
            console.log(err.message);
        })
    },[]);

    const columns = [
        {
            name: "Nome",
            selector: "nome",
            width: "w-1/3",
            textwrap: "truncate",
        },
        {
            name: "Email",
            selector: "email",
            width: "w-1/3",
            textwrap: "truncate",
        },
        {
            name: "Papel",
            selector: "papel",
            width: "w-1/3",
            textwrap: "truncate",
        },
    ];


    return(
        <TabelaPadrao columns={columns} data={alunosData} />
    )
}

export default ListaDeAlunos;