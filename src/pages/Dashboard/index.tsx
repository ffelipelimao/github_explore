import React, { useState, useEffect ,FormEvent} from 'react';
import { FiChevronRight } from 'react-icons/fi';
import {Link} from 'react-router-dom';

import api from '../../services/api'

import logoImage from '../../assets/field.svg';

import { Title, Form, Repositories,Error } from './styles';

interface Repository{
    full_name: string;
    description: string;
    owner: {
        login:string;
        avatar_url: string;
    };
}

const Dashboard: React.FC = () => {

    const [inputError, setInputError] = useState('');
    const [newRepo, setNewRepo] = useState('');
    const [ repositories, setRepositories ] = useState<Repository[]>(() => {
        const storagedRepositories = localStorage.getItem('@explorer:repositories');
        if (storagedRepositories){
            return JSON.parse(storagedRepositories);
        }else{
            return[];
        }
    });

    useEffect(() => {
        localStorage.setItem('@explorer:repositories', JSON.stringify(repositories))
    }, [repositories])

    async function handleAddRepository(event: FormEvent<HTMLFormElement>): Promise<void> {
    
        event.preventDefault();
        
        if(!newRepo){
            setInputError('Digite autor/nome do repositorio');
            return;
        }
    try{
        const response = await api.get<Repository>(`repos/${newRepo}`);

        const repository = response.data;

        setRepositories([...repositories, repository]);
        setNewRepo('');
        setInputError('');
    }catch(err){
        setInputError('Erro na busca desse repositorio');
        }
    }

    return (
        <>
            <img src={logoImage} />
            <Title>Explore Repositorios no GitHub</Title>
            <Form hasError={!!inputError} onSubmit={handleAddRepository}>
                <input 
                onChange={e => setNewRepo(e.target.value)}
                value={newRepo}
                placeholder="Digite o nome do repositorio" 
                 />
                <button type="submit" >Pesquisar</button>
            </Form>
            {inputError && <Error>{inputError}</Error>}
            
            <Repositories>
                {repositories.map(repo => (
                    <Link key={repo.full_name} to={`/repository/${repo.full_name}`}>
                    <img src={repo.owner.avatar_url}
                        alt={repo.owner.login}
                    />
                    <div>
                    <strong>{repo.full_name}</strong>
                        <p>{repo.description}</p>
                    </div>
                    <FiChevronRight size={20} />
                </Link>

                ))}
            </Repositories>
        </>
    );

}

export default Dashboard;