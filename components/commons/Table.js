import { Table } from 'evergreen-ui';
import { SearchInput } from './SearchInput';
import { Pane } from './Pane';

const TableHeader = ({ headerOptions }) => {
  return (
    <Pane display="flex" padding={16} background="tint2" borderRadius={3}>
      <Pane flex={1}>
        <SearchInput placeholder="Pesquisar..." />
      </Pane>
      <Pane>{headerOptions}</Pane>
    </Pane>
  );
};

const TableCustom = ({ items, header, tableHeight, headerOptions }) => {
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
    <Pane border="default" width="100%">
      <TableHeader headerOptions={headerOptions} />
      <Pane borderTop="default">
        <Table>
          <Table.Head>
            {keys.map((key, index) => (
              <Table.TextHeaderCell key={index}>
                {header[key]}
              </Table.TextHeaderCell>
            ))}
          </Table.Head>
          <Table.Body height={tableHeight} backgroundColor="#fff">
            {items.map((item, index) => renderRow(item, index))}
          </Table.Body>
        </Table>
      </Pane>
    </Pane>
  );
};

export default TableCustom;
