import PropTypes from "prop-types";

function Table(props) {
  const { columns, data, styles = {} } = props;
  return (
    <table style={styles.table}>
      <thead style={styles.header}>
        <tr>
          {columns.map(({ title }, i) => (
            <th key={i}>{title}</th>
          ))}
        </tr>
      </thead>
      <tbody style={styles.body}>
        {data.map((row, i) => (
          <TableRow key={i} columns={columns} row={row} />
        ))}
      </tbody>
    </table>
  );
}

function TableRow(props) {
  const { columns, row } = props;
  return (
    <tr>
      {columns.map(({ dataIndex, render }, i) => (
        <td key={i}>{render ? render(row) : row[dataIndex]}</td>
      ))}
    </tr>
  );
}

Table.propTypes = {
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      dataIndex: PropTypes.string,
      render: PropTypes.func,
    })
  ),
  styles: PropTypes.shape({
    table: PropTypes.object,
    header: PropTypes.object,
    body: PropTypes.object,
  }),
  data: PropTypes.array,
};

TableRow.propTypes = {
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      dataIndex: PropTypes.string,
      render: PropTypes.func,
    })
  ),
  row: PropTypes.object,
};

export default Table;
