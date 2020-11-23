import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logo from '../../assets/logo.svg';
import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logo} alt="Github Explorer logo" />
      <Title>Explore repositories on GitHub</Title>

      <Form>
        <input placeholder="Search by repository name" />
        <button type="submit">Search</button>
      </Form>

      <Repositories>
        <a href="https://github.com/jennifertakagi">
          <img
            alt="Jennifer Takagi"
            src="https://avatars2.githubusercontent.com/u/31541321?s=460&u=9ed794fbd85ae1e136fdd3910ec0eee70911a7cb&v=4"
          />
          <div>
            <strong>sveltejs / svelte</strong>
            <p>Cybernetically enhanced web apps</p>
          </div>
          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
