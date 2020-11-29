import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

import logo from '../../assets/logo.svg';

import { Issues, Header, RepositoryInfo } from './styles';

interface RepositoryParams {
  repository: string;
}

const Repository: React.FC = () => {
  const { params } = useRouteMatch<RepositoryParams>();

  return (
    <>
      <Header>
        <img src={logo} alt="Github Explorer" />
        <Link to="/">
          <FiChevronLeft size={16} />
          Back
        </Link>
      </Header>
      <RepositoryInfo>
        <header>
          <img src={logo} alt="Github Explorer" />
          <div>
            <strong>bla</strong>
            <p>description</p>
          </div>
        </header>
        <ul>
          <li>
            <strong>1809</strong>
            <span>Stars</span>
          </li>
          <li>
            <strong>1809</strong>
            <span>Forks</span>
          </li>
          <li>
            <strong>1809</strong>
            <span>Open Issues</span>
          </li>
        </ul>
      </RepositoryInfo>
      <Issues>
        <Link to="/">
          <div>
            <strong>sasas</strong>
            <p>ahiusa</p>
          </div>
          <FiChevronRight size={20} />
        </Link>
      </Issues>
    </>
  );
};

export default Repository;
