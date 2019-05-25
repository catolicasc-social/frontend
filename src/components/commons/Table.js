import { Table } from 'evergreen-ui';
import { SearchInput } from './SearchInput';
import { Pane } from './Pane';

const TableHeader = ({ header2 }) => {
  return (
    <Pane display="flex" padding={16} background="tint2" borderRadius={3}>
      <Pane flex={1}>
        <SearchInput placeholder="Pesquisar..." />
      </Pane>
      <Pane>{header2}</Pane>
    </Pane>
  );
};

const TableCustom = ({ items, header, tableHeight, header2 }) => {
  const keys = Object.keys(header);

  function renderRow(item, index) {
    return (
      <Table.Row key={index}>
        {keys.map((key, i) => (
          <Table.TextCell key={i}>{item[key]}</Table.TextCell>
        ))}
      </Table.Row>
    );
  }

  return (
    <Pane border="default">
      <TableHeader header2={header2} />
      <Pane borderTop="default">
        <Table>
          <Table.Head>
            {keys.map((key, index) => (
              <Table.TextHeaderCell key={index}>
                {header[key]}
              </Table.TextHeaderCell>
            ))}
          </Table.Head>
          <Table.Body height={tableHeight}>
            {items.map((item, index) => renderRow(item, index))}
          </Table.Body>
        </Table>
      </Pane>
    </Pane>
  );
};

export default TableCustom;
