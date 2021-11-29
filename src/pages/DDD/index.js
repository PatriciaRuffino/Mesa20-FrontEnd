import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Formik, Form, Field } from 'formik';
import Swal from 'sweetalert2';
import apis from '../../services/apis';


const DDD = () => {
    const [ddd, setDdd] = useState({});
    const { numeroDdd } = useParams();

    useEffect(() => {
        if (numeroDdd) {
            getDddData({ codigoDdd: numeroDdd});
        }
    }, [numeroDdd]);

    const getDddData = async ({ codigoDdd }) => {
        try {
            const response = await apis[2].get(`${codigoDdd}`);
            setDdd(response.data);
        } catch (error) {
            Swal.fire({
                title: error.response.status,
                icon: 'error',
                text: error.response.message
              })
        }
    }

    return (
        <>
        <Link to="/">Retornar para Home</Link>
        <section id="ddd" className="col-md-4 col-sm-6 my-3 container text-center">
        <h2>Procure pela área do DDD</h2>
        <Formik initialValues={{ codigoDdd: '' }} onSubmit={getDddData}>
          <Form>
            <Field placeholder="Insira o numero do DDD" required type="number" name="codigoDdd" id="codigoDdd" className="form-control" />
            <button className="btn btn-primary my-3" type="submit">Pesquisar DDD</button>
          </Form>
        </Formik>
        {ddd.state && (
          <ul>
            <li>Estado: {ddd.state}</li>
            <li>Cidades: {ddd.cities.join(", ")}</li>
          </ul>
        )}
          

        </section>
        </>
    )
}

export default DDD;