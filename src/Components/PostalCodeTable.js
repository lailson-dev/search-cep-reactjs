import React from 'react';
import './PostalCodeTable.css';

function PostalCodeTable({ cep, address, district, city, state }) {
  return (
    <table className="postal-code-table">
      <thead>
        <tr>
          <th>CEP</th>
          <th>Endereço</th>
          <th>Bairro</th>
          <th>Cidade</th>
          <th>Estado</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{cep}</td>
          <td>{address}</td>
          <td>{district}</td>
          <td>{city}</td>
          <td>{state}</td>
        </tr>
      </tbody>
    </table>
  );
}

export default PostalCodeTable;