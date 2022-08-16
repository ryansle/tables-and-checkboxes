// Utilities
import { capitalizeFirstLetter } from '../utils';

const TableRow = ({ row }) => {
  // Rather than pass each field of row as a prop, let's just pass
  //  the entire row and destructure the object to make this cleaner
  const {
    name,
    device,
    path,
    status
  } = row;

  return (
    <tr className='border hover:bg-gray-100 p-2'>
      {/* No idea why I can't apply the p-2 style to the <tr /> */}
      <td className='p-2'>
        <input
          type='checkbox'
        />
      </td>
      <td>{name}</td>
      <td>{device}</td>
      <td>
        <div className='flex justify-between items-center'>
          {path}
          {/* draw green circle when status is set to available */}
          {status === 'available' && <div className='w-3 h-3 bg-green-500 rounded-full mr-2' />}
        </div>
      </td>
      <td>{capitalizeFirstLetter(status)}</td>
    </tr>
  );
};

export default TableRow;
