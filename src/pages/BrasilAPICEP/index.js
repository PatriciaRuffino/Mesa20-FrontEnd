import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Formik, Form, Field } from 'formik';
import Swal from 'sweetalert2';
import apis from '../../services/apis';

const BrasilAPICEP = () => {
  const [endereco, setEndereco] = useState({});
  const { cep } = useParams();

  useEffect(() => {
    if (cep) {
      handleSubmit({ cep });
    }
  }, [cep])

  const handleSubmit = async ({ cep }) => {
    try {
      const response = await apis[0].get(`${cep}`);
      setEndereco(response.data);
    } catch (error) {
      Swal.fire({
        title: 'Oops',
        icon: 'error',
        text: 'CEP não encontrado ou erro no servidor.'
      });
    }
  }

  return (
    <>
      <main>
        <Link to="/">Ir para ViaCEP</Link>
        <div className="col-md-4 col-sm-6 my-3 container text-center">
          <h2>Procure um CEP</h2>
          <Formik initialValues={{ cep: '' }} onSubmit={handleSubmit}>
            <Form>
              <Field placeholder="Insira o CEP" required type="text" name="cep" id="cep" className="form-control my-3" />
              <button type="submit" className="btn btn-primary">Pesquisar</button>
            </Form>
          </Formik>
          {endereco.cep && (
            <ul className="list-group my-3">
              <li><Link to={`/${endereco.cep}`}>Ver no ViaCEP</Link></li>
              <li>CEP:{endereco.cep}</li>
              <li>Estado:{endereco.state}</li>
              <li>Cidade:{endereco.city}</li>
              <li>Bairro:{endereco.neighborhood}</li>
              <li>Rua:{endereco.street}</li>
              <li>Serviço:{endereco.service}</li>
            </ul>
          )}
        </div>
      </main>
    </>
  );
}

export default BrasilAPICEP;