import React from 'react';

import logoImage from '../../assets/field.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
    return (
        <>
            <img src={logoImage} />
            <Title>Explore Repositorios no GitHub</Title>
            <Form>
                <input placeholder="Digite o nome do repositorio" type="text" />
                <button type="submit" >Pesquisar</button>
            </Form>

            <Repositories>
                <a href="teste">
                    <img src="https://avatars2.githubusercontent.com/u/28612817?s=460&u=0e070e77c729750e9b2444eee155921bdd2685de&v=4"
                        alt="monty"
                    />
                </a>
            </Repositories>
        </>
    );

}

export default Dashboard;