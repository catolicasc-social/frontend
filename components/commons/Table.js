import { useState, useEffect } from 'react';
import { Table } from 'evergreen-ui';

import { SearchInput } from './SearchInput';
import { Pane } from './Pane';
import { Text } from './Text';

const TableHeader = ({ headerOptions, onSearchTextChange }) => {
  return (
    <Pane display="flex" padding={16} background="tint2" borderRadius={3}>
      <Pane flex={1}>
        <SearchInput onChange={onSearchTextChange} placeholder="Pesquisar..." />
      </Pane>
      <Pane>{headerOptions}</Pane>
    </Pane>
  );
};

const TableEmpty = ({ isSearching, sizeItems }) => (
  <Pane
    display="flex"
    justifyContent="center"
    alignItems="center"
    padding={16}
    height="100%"
  >
    <Text size={500}>
      {isSearching ? 'Nada foi encontrado' : sizeItems === 0 && 'Lista vazia'}
    </Text>
  </Pane>
);

function includesIgnoreCase(a, b) {
  if (!a) return false;
  return a.toUpperCase().includes(b.toUpperCase());
}

const TableCustom = ({
  items,
  header,
  tableHeight,
  headerOptions,
  searchProperty
}) => {
  const keys = Object.keys(header);
  const [filteredItems, setFilteredItems] = useState(items);
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    if (!searchProperty) return;
    if (!keys.includes(searchProperty)) return;

    setFilteredItems(
      items.filter(item => includesIgnoreCase(item[searchProperty], searchText))
    );
  }, [searchText]);

  function onSearchTextChange(event) {
    setSearchText(event.target.value);
  }

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
      <TableHeader
        headerOptions={headerOptions}
        onSearchTextChange={onSearchTextChange}
      />
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
            {filteredItems.length ? (
              filteredItems.map((item, index) => renderRow(item, index))
            ) : (
              <TableEmpty
                isSearching={!!searchText.length}
                sizeItems={items.length}
              />
            )}
          </Table.Body>
        </Table>
      </Pane>
    </Pane>
  );
};

export default TableCustom;
