// const row = {
//     name: "Christmas",
//     type: "common",
//     startDate: new Date(),
//     endDate: new Date(),
//     userGroupName: "A",
// };

// renderCell: (params) => (
//     <strong>
//       {(params.value as Date).getFullYear()}
//       <Button
//         variant="contained"
//         color="primary"
//         size="small"
//         style={{ marginLeft: 16 }}
//       >
//         Open
//       </Button>
//     </strong>
//   ),

const columnsDatagrid = [
    {
        field: "id",
        hide: true,
    },
    {
        field: "name",
        headerName: "Name",
        description: "",
        flex: 1,
    },
    {
        field: "type",
        headerName: "Type",
        description: "bla bla bla bla",
    },
    {
        field: "startDate",
        headerName: "Start Date",
        description: "",
        type: "dateTime",
        flex: 1,
    },
    {
        field: "endDate",
        headerName: "End Date",
        description: "",
        type: "dateTime",
        flex: 1,
    },
    {
        field: "userGroupName",
        headerName: "User Group",
        description: "",
        width: 130,
    },
];

export const columns = [
    {
        width: 200,
        label: "Name",
        dataKey: "name"
    },
    {
        width: 100,
        label: "Type",
        dataKey: "type"
    },
    {
        width: 120,
        label: "Start Date",
        dataKey: "startDate"
    },
    {
        width: 120,
        label: "End Date",
        dataKey: "endDate"
    },
    {
        width: 120,
        label: "User Group",
        dataKey: "userGroupName"
    },
];
