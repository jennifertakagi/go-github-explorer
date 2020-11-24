import React, { useState, FormEvent } from 'react';
import { FiChevronRight } from 'react-icons/fi';

import api from '../../services/api';

import logo from '../../assets/logo.svg';
import { Title, Form, Repositories } from './styles';

interface Repository {
  full_name: string;
  description: string;
  owner: {
    login: string;
    avatar_url: string;
  };
}

const Dashboard: React.FC = () => {
  const [repositories, setRepositories] = useState<Repository[]>([]);
  const [newRepo, setNewRepo] = useState('');

  async function handleAddRepository(
    event: FormEvent<HTMLFormElement>,
  ): Promise<void> {
    event.preventDefault();

    const { data: repository } = await api.get<Repository>(`repos/${newRepo}`);

    setRepositories([...repositories, repository]);
    setNewRepo('');
  }

  return (
    <>
      <img src={logo} alt="Github Explorer logo" />
      <Title>Explore repositories on GitHub</Title>

      <Form onSubmit={handleAddRepository}>
        <input
          value={newRepo}
          onChange={e => setNewRepo(e.target.value)}
          placeholder="Search by repository name"
        />
        <button type="submit">Search</button>
      </Form>

      <Repositories>
        {repositories.map(repository => (
          <a
            key={repository.full_name}
            href="https://github.com/jennifertakagi"
          >
            <img
              alt={repository.owner.login}
              src={repository.owner.avatar_url}
            />
            <div>
              <strong>{repository.full_name}</strong>
              <p>{repository.description}</p>
            </div>
            <FiChevronRight size={20} />
          </a>
        ))}
      </Repositories>
    </>
  );
};

export default Dashboard;
