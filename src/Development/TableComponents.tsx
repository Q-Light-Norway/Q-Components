import { HeaderCell, Row, RowCell, Table, TableBody } from "../index";

const rows = [
  {
    key: "1",
    data: {
      id: 1,
      layoutName: "Layout 1",
      enabled: true,
      enablePreview: true,
      enableConfigurator: true,
      description: "This is a description 1",
    },
  },
  {
    key: "2",
    data: {
      id: 2,
      layoutName: "Layout 32",
      enabled: true,
      enablePreview: true,
      enableConfigurator: true,
      description: "This is a description 2",
    },
  },
  {
    key: "3",
    data: {
      id: 3,
      layoutName: "Layout 3",
      enabled: true,
      enablePreview: true,
      enableConfigurator: true,
      description: "This is a description 3",
    },
  },
  {
    key: "4",
    data: {
      id: 4,
      layoutName: "Layout 4",
      enabled: true,
      enablePreview: true,
      enableConfigurator: true,
      description: "This is a description 4",
    },
  },
  {
    key: "5",
    data: {
      id: 5,
      layoutName: "Layout 5",
      enabled: true,
      enablePreview: true,
      enableConfigurator: true,
      description: "This is a description 5",
    },
  },
];

const TableComponents = () => {
  const onRowClicked = (row: any) => {
    console.log("row clicked", row);
  };

  return (
    <Table
      style={{ gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr 1fr" }}
      defaultSortKey="layoutName"
    >
      <Row header>
        <HeaderCell sortKey="id">
          <p>ID</p>
        </HeaderCell>
        <HeaderCell sortKey="layoutName">
          <p>Type Name</p>
        </HeaderCell>
        <HeaderCell>
          <p>Enabled</p>
        </HeaderCell>
        <HeaderCell>
          <p>Enable Preview</p>
        </HeaderCell>
        <HeaderCell>
          <p>Enable Configurator</p>
        </HeaderCell>
        <HeaderCell sortKey="description">
          <p>Description</p>
        </HeaderCell>
      </Row>

      <TableBody>
        {rows.map((row, i) => {
          return (
            <Row
              sortObject={row.data}
              key={i}
              handleClick={() => onRowClicked(row)}
              href={`https://www.google.com/search?q=${row.data.layoutName}`}
            >
              <RowCell>
                <p>{row.key}</p>
              </RowCell>
              <RowCell>
                <p>{row.data.layoutName}</p>
              </RowCell>
              <RowCell>
                <p>{row.data.enabled ? "Yes" : "No"}</p>
              </RowCell>
              <RowCell>
                <p>{row.data.enablePreview ? "Yes" : "No"}</p>
              </RowCell>
              <RowCell>
                <p>{row.data.enableConfigurator ? "Yes" : "No"}</p>
              </RowCell>
              <RowCell>
                <p>{row.data.description}</p>
              </RowCell>
            </Row>
          );
        })}
      </TableBody>
    </Table>
  );
};

export default TableComponents;
