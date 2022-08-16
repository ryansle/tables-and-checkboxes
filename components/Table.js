import { useState } from 'react';

// Components
import TableRow from './TableRow';

const Table = ({ data }) => {
  const [selected, setSelected] = useState([]);

  return (
    <div>
      <table className='border rounded w-full text-left'>
        <thead>
          <tr>
            <th />
            <th>Name</th>
            <th>Device</th>
            <th>Path</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {data.map((row, index) => (
            <TableRow
              key={index}
              row={row}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;