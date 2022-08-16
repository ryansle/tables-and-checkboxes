import { useState } from 'react';

// Components
import TableRow from './TableRow';
import { BsDownload as Download } from 'react-icons/bs';

const Table = ({ data }) => {
  const [selected, setSelected] = useState([]);

  return (
    <div>
      <div className='flex p-2 items-center'>
        <input
          type='checkbox'
        />

        <p className='ml-4'>
          {selected.length === 0 ? 'None Selected' : `Selected (${selected.length})`}
        </p>

        <button className='flex items-center ml-10 p-2 rounded hover:bg-gray-200'>
          <Download className='mr-3' />
          Download Selected
        </button>
      </div>

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