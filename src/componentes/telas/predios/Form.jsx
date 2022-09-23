import { useContext } from "react";
import Alerta from "../../Alerta";
import CampoEntrada from "../../comuns/CampoEntrada";
import Dialogo from "../../comuns/Dialogo";
import PrediosContext from "./PrediosContext";

function Form() {

    const { objeto, handleChange, acaoCadastrar, alerta } =
        useContext(PrediosContext);

    (() => {
        'use strict'

        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        const forms = document.querySelectorAll('.needs-validation')

        // Loop over them and prevent submission
        Array.from(forms).forEach(form => {
            form.addEventListener('submit', event => {
                if (!form.checkValidity()) {
                    event.preventDefault()
                    event.stopPropagation()
                }

                form.classList.add('was-validated')
            }, false)
        })
    })()

    return (
        <Dialogo id="modalEdicao" title="Prédio" idForm="formulario" onSubmit={acaoCadastrar}>

            <Alerta alerta={alerta} />

            <CampoEntrada label="Código" id="txtCodigo" type="number"
                name="codigo" value={objeto.codigo} onChange={handleChange}
                readOnly="true" required="true" maxLength="5"
            />

            <CampoEntrada label="Nome" placeholder="Nome do prédio" id="txtNome" type="text"
                name="nome" value={objeto.nome} onChange={handleChange} required="true" maxLength="40"
                validMessage="Nome OK" invalidMessage="Nome é obrigatório!"
            />

            <CampoEntrada label="Descrição" placeholder="Aqui vai uma descrição" id="txtDescricao" type="text"
                name="descricao" value={objeto.descricao} onChange={handleChange} required="true" maxLength="40"
                validMessage="Descrição OK" invalidMessage="Descrição é obrigatório!"
            />

            <CampoEntrada label="Sigla" placeholder="ABCD" id="txtSigla" type="text"
                name="sigla" value={objeto.sigla} onChange={handleChange} required="true"
                maxLength="4" validMessage="Sigla OK" invalidMessage="Sigla é obrigatório!"
            />

        </Dialogo>
    );

}

export default Form;