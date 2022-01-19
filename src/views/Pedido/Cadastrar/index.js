import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom"
import { Container, Input, Label, FormGroup, Button, Form, Alert } from "reactstrap"
import { api } from "../../../config";

export const CadastrarPedido = () => {

    const [pedido, setPedido] = useState({
        data: '',
        ClienteId: ''
    });

    const [status, setStatus] = useState({
        type: '',
        message: ''
    })

    const valorInput = e => setPedido({
        ...pedido, [e.target.name]: e.target.value
    });

    const cadPedido = async e => {
        e.preventDefault();
        console.log(pedido);

        const headers = {
            'Content-Type': 'application/json'
        }

        await axios.post(api + "/pedidos", pedido, { headers })
            .then((response) => {
                //console.log(response.data.message);
                if (response.data.error) {
                    setStatus({
                        type: 'error',
                        message: response.data.message
                    })
                } else {
                    setStatus({
                        type: 'success',
                        message: response.data.message
                    });
                }
            })
            .catch(() => {
                console.log("Erro: Sem conexão com a API.");
            })
    }

    return (
        <Container>
            <div className="d-flex">
                <div className="m-auto p-2">
                    <h1>Cadastrar Pedido</h1>
                </div>
                <div className="p-2">
                    <Link to="/listar-pedido" className="btn btn-outline-success btn-sm">Pedidos</Link>
                </div>
            </div>

            <hr className="m-1"></hr>

            {status.type === 'error' ? <Alert color="danger">{status.message}</Alert> : ""}

            {status.type === 'success' ? <Alert color="success">{status.message}</Alert> : ""}

            <Form className="p-2" onSubmit={cadPedido}>
                <FormGroup className="p-2">
                    <Label>Data do pedido</Label>
                    <Input type="date" name="data" placeholder="Data" onChange={valorInput} />
                </FormGroup>

                <FormGroup className="p-2">
                    <Label>Para qual cliente</Label>
                    <Input type="number" name="ClienteId" placeholder="id do cliente" onChange={valorInput} />
                </FormGroup>

                <Button type="submit" outline color="success">Cadastrar</Button>
            </Form>
        </Container>
    );
};