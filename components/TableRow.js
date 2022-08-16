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
      <td>{path}</td>
      <td>{status}</td>
    </tr>
  );
};

export default TableRow;
