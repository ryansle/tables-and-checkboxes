import { useState } from 'react';

// Components
import TableRow from './TableRow';
import { BsDownload as Download } from 'react-icons/bs';

const Table = ({ data }) => {
  const [selected, setSelected] = useState([]);

  const toggleAllCheckboxes = () => {
    // Compare how many things we have selected versus the total amount of data
    //  This wouldn't work as well with a paginated table, but for 
    //  the purposes of this tiny little table, it'll work just fine
    const shouldBeChecked = selected.length < data.length;

    if (shouldBeChecked) setSelected(data);
    else setSelected([]);
  };

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

  const downloadSelected = () => {
    if (selected.length === 0) alert('Error: please select rows to be downloaded.');
    else {
      let availableOutput = '';
      let scheduledOutput = '\n Scheduled downloads: \n';

      // Merge the values of selected (that we care about) 
      //  into 'availableOutput' and 'scheduledOutput' strings 
      //  for the download alert
      availableOutput = selected.reduce((availableOutput, row) => {
        let concat = '';
        if (row.status === 'available') {
          // Add a header to the output for downloading 'available' items
          //  to differentiate them from 'scheduled' items
          if (availableOutput === '') {
            availableOutput += 'Downloading items...\n';
          }

          concat = `Device: ${row.device} \n Path: ${row.path} \n`;
          // Just going to use an 'else' here rather than 'else-if' since
          //  I know all rows are either marked as 'available' or 'scheduled'.
        } else {
          scheduledOutput += `Device: ${row.device} \n Path: ${row.path} \n`;
        }
        return availableOutput + concat;
      }, availableOutput);

      // Handle different edge cases for rendering the alert
      //  Case 1: no scheduled downloads were selected
      //  Case 2: both available and scheduled downloads were selected
      //  Case 3: no available downloads were selected (handled above by not including the 'Downloading items...' text)
      //  Case 4: nothing was selected (handled above)
      const output = scheduledOutput === '\n Scheduled downloads: \n' ? availableOutput : (availableOutput + scheduledOutput)

      alert(output);
    }
  };

  return (
    <div>
      <div className='flex p-2 items-center'>
        <input
          type='checkbox'
          checked={data.length === selected.length}
          onChange={toggleAllCheckboxes}
        />

        <p className='ml-4'>
          {selected.length === 0 ? 'None Selected' : `Selected (${selected.length})`}
        </p>

        <button
          className='flex items-center ml-10 p-2 rounded hover:bg-gray-200'
          onClick={downloadSelected}
        >
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