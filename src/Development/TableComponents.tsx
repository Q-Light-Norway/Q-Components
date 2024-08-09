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
      description: "This is a description",
    },
  },
  {
    key: "2",
    data: {
      id: 2,
      layoutName: "Layout 2",
      enabled: true,
      enablePreview: true,
      enableConfigurator: true,
      description: "This is a description",
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
      description: "This is a description",
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
      description: "This is a description",
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
      description: "This is a description",
    },
  },
];

const TableComponents = () => {
  const onRowClicked = (row: any) => {
    console.log("row clicked", row);
  };

  return (
    <Table style={{ gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr 1fr" }}>
      <Row header>
        <HeaderCell>
          <p>ID</p>
        </HeaderCell>
        <HeaderCell>
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
        <HeaderCell>
          <p>Description</p>
        </HeaderCell>
      </Row>

      <TableBody>
        {rows.map((row, i) => {
          return (
            <Row key={i} handleClick={() => onRowClicked(row)}>
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
