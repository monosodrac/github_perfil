import { useState, useEffect } from "react";

const Formulario = () => {
    const [materiaA, setMateriaA] = useState(0);
    const [materiaB, setMateriaB] = useState(0);
    const [materiaC, setMateriaC] = useState(0);
    const [nome, setNome] = useState('');

    useEffect(() => {
        console.log("O componente iniciou");

        return () => {
            console.log("O componente finalizou");
        };
    }, []);

    useEffect(() => {
        console.log("O estado nome mudou");
    }, [nome]);

    useEffect(() => {
        console.log("materia A mudou para: " + materiaA);
    }, [materiaA]);

    const alteraNome = (e) => {
        setNome(estadoAnterior => {
            return e.target.value;
        });
    };

    const renderizaResultado = () => {
        const soma = materiaA + materiaB + materiaC;
        const media = soma / 3;

        if (media >= 7) {
            return (
                <p>Olá {nome}, Você foi aprovado!</p>
            );
        } else {
            return (
                <p>Olá {nome}, Você naõ foi aprovado!</p>
            );
        };
    };

    return (
        <form>
            <ul>
                {[1, 2, 3, 4, 5].map(item => <li key={item}>{item}</li>)}
            </ul>

            <input type="text" placeholder="Seu nome" onChange={alteraNome} />
            <input type="number" placeholder="Nota matéria A" onChange={({ target }) => setMateriaA(parseInt(target.value))} />
            <input type="number" placeholder="Nota matéria B" onChange={e => setMateriaB(parseInt(e.target.value))} />
            <input type="number" placeholder="Nota matéria C" onChange={e => setMateriaC(parseInt(e.target.value))} />
            <p>O aluno foi aprovado</p>
            {renderizaResultado()}
        </form>
    );
};

export default Formulario;