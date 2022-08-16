import { useState } from 'react';

// Components
import TableActions from './TableActions';
import TableRow from './TableRow';

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

  return (
    <div>
      <TableActions
        data={data}
        selected={selected}
        setSelected={setSelected}
      />

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