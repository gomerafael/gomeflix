import React, {useState} from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import FormField from '../../../components/FormField';

function CadastroCategoria() {

    const [categorias, setCategorias] = useState([]);
    
    const valoresIniciais = {
      nome: '',
      descricao: '',
      cor: '',
    }
    
    const [values, setValues] = useState(valoresIniciais);

    function setValue(chave, valor) {
      setValues({
        ...values,
        [chave]: valor,
      })
    }

    function funcaoHandler(infosDoEvento) {
      
      setValue(
        infosDoEvento.target.getAttribute('name'), 
        infosDoEvento.target.value,
      );
      //  setNomeDaCategoria(infosDoEvento.target.value);
    }

    return (
      <PageDefault>

    <h1>Cadastro de Categoria: {values.nome}</h1>
        
        <form onSubmit = {function handleSubmit(infosDoEvento) {
          infosDoEvento.preventDefault();
          setCategorias([
            ...categorias,
            values
          ]);
          setValues(valoresIniciais)
        }}>
          <FormField
            label = "Nome da Categoria"
            type = "text"
            name = "nome"
            value = {values.nome}
            onChange = {funcaoHandler}
          />

          <FormField 
            label = "Descrição"
            type = "text"
            name = "descricao"
            value = {values.descricao}
            onChange = {funcaoHandler}
          />

          <FormField
            label = "Cor"
            type = "color"
            name = "cor"
            value = {values.cor}
            onChange = {funcaoHandler}
          />
          {/*
          <div>
            <label>
                Descrição:
                <textarea
                  type = "text"
                  name = "descricao"
                  value = {values.descricao}
                  onChange = {funcaoHandler}
                />
            </label>
          </div>
          <div>
            <label>
                Cor:
                <input 
                  type ="color"
                  name = "cor"
                  value = {values.cor}
                  onChange = {funcaoHandler}
                />
            </label>
          </div> */}
            

            <button>
                Cadastrar
            </button>
        </form>

        <ul>
          {categorias.map((categoria, indice) => {
            return (
              <li key = {`${categoria}${indice}`}>
                {categoria.nome}
              </li>
            )
          })}
        </ul>

        <Link to = "/">
            Ir para home
        </Link>
      </PageDefault>
    )
  }

  export default CadastroCategoria;