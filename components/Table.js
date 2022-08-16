import { useState } from 'react';

// Components
import TableRow from './TableRow';
import { BsDownload as Download } from 'react-icons/bs';

const Table = ({ data }) => {
  const [selected, setSelected] = useState([]);

  const toggleCheckbox = (row) => {
    const rowName = row.name;

    // If the current row already exists within our list of selected rows, delete it
    if (selected.some((data) => data.name === rowName)) {
      setSelected(selected.filter((data) => data.name !== rowName));
    } else {
      // Otherwise, append to our selections
      // Spread over the current array, keeping everything that's there already and add the new row
      setSelected([...selected, row]);
    }
  };

  console.log(selected);

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
              isChecked={selected.some((data) => data.name === row.name)}
              toggleCheckbox={() => toggleCheckbox(row)}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;