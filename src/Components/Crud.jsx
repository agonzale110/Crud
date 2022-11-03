import React, { useState } from 'react';
import { Container, Row, Col, Form, FloatingLabel, Table, Button, Alert } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Crud() {
    const [id, setId] = useState(1);
    const [lista, setLista] = useState([]);
    const [error, setError] = useState([]);
    const [editId, setEditId] = useState(null);

    const [user, setUser] = useState({
        nombre: '',
        apellido: '',
        cedula: '',
    });

    const resetUser = () => {
        setUser({
            nombre: '',
            apellido: '',
            cedula: '',
        });
    }

    const onChangeHandler = (_property, _value) => {
        setUser(prevState => {
            return { ...prevState, [_property]: _value }
        });
    }

    const addToList = (_value, customId = null) => {
        if (!customId) 
            _value.id = id;
        setLista(prevState => [...prevState,_value] );
    }

    const addToError = (_value) => {
        setError(prevState => [...prevState,_value] );
    }

    const resetError = () => {
        setError([]);
    }

    const verifyFields = () => {
        let errored = false;
        Object.keys(user).forEach((key) => {
            if (key === 'id') return;

            if (!user[key] || !user[key].trim()) {
                addToError(`${key} es requerido`);
                errored = true;
            }
        })

        if (errored) {
            return false;
        }
        return true;
    }

    const formSubmitHandler = (e) => {
        e.preventDefault();
        resetError();
        if (editId) {  
            if (!verifyFields())
                return;
            
            deleteUser(editId)
            addToList({...user}, editId)

            setEditId(null);
        } else {
            if (!verifyFields())
                return;
            addToList(user);
            setId(id + 1);
        }
        resetUser();
    }

    const deleteUser = (id) => {
        const filtrado = lista.filter(item => item.id !== id)
        setLista(filtrado);

        resetUser();
        setEditId(null);
    }

    const setFields = (obj) => {
        setUser(obj);
        setEditId(obj.id);
    }

    return (
        <Container className='mt-4 justify-content-center'>
            <Row className='justify-content-center'>
                <Col xs={8}>
                    <Form onSubmit={formSubmitHandler}>
                        <Form.Group className='mb-3'>
                            <Form.Control type='hidden' value={id} />
                        </Form.Group>
                        <FloatingLabel
                            controlId='nombre'
                            label='Nombre'
                            className='mb-3'
                        >
                            <Form.Control type='text' size='md' onChange={(e) => onChangeHandler(`nombre`, e.target.value)} placeholder='Ingrese su nombre' value={user.nombre} />
                        </FloatingLabel>
                        
                        <FloatingLabel
                            controlId='apellido'
                            label='Apellido'
                            className='mb-3'
                        >
                            <Form.Control type='text' size='md' onChange={(e) => onChangeHandler(`apellido`, e.target.value)} placeholder='Ingrese su apellido' value={user.apellido} />
                        </FloatingLabel>

                        <FloatingLabel
                            controlId='cedula'
                            label='Cedula'
                            className='mb-3'
                        >
                            <Form.Control type='text' size='md' onChange={(e) => onChangeHandler(`cedula`, e.target.value)} placeholder='Ingrese su cedula' value={user.cedula} />
                        </FloatingLabel>
                        {
                            editId ? (
                                <Button variant='primary w-100' type='submit'>
                                    Editar
                                </Button>
                            ) : (
                                <Button variant='primary w-100' type='submit'>
                                    Agregar
                                </Button>
                            )
                        }

                    </Form>
                </Col>
                <Col xs={8} className='mt-4'>
                    <Table striped responsive hover variant='light'>
                        <thead>
                            <tr>
                                <th className='text-center'>Id</th>
                                <th className='text-center'>Nombre</th>
                                <th className='text-center'>Apellido</th>
                                <th className='text-center'>Cedula</th>
                                <th className='text-center'>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                lista.map(user => (
                                    <tr key={user.id + 1}>
                                        <td className='text-center'>{user.id}</td>
                                        <td className='text-center'>{user.nombre}</td>
                                        <td className='text-center'>{user.apellido}</td>
                                        <td className='text-center'>{user.cedula}</td>
                                        <td className='text-center'>
                                            <Button className='me-2' onClick={() => { setFields(user) }} variant='outline-primary' size='sm'>Editar</Button>
                                            <Button onClick={() => { deleteUser(user.id) }} variant='outline-danger' size='sm'>Borrar</Button>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </Table>
                    {
                        error.length !== 0 &&
                            <Alert className='text-uppercase' variant='danger'>
                                {error.join(', ')}
                            </Alert>
                    }
                </Col>
            </Row>
        </Container>
    )
}

export default Crud;