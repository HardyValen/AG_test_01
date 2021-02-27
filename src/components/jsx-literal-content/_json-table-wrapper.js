// Data = [[key, value], ...]

const JSONTableWrapper = ({entries}) => {
  if (entries) {
    return (
      <tr>
        <th>{entries[0]}</th>
        <td>{entries[1]}</td>
      </tr>
    );
  } else return null
}

export default JSONTableWrapper