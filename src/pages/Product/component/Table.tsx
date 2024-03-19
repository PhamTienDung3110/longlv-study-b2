import * as React from 'react';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { Box } from '@mui/material';
import Product from '../Product';
const flexField = 1;
const columns: GridColDef[] = [
    { field: 'productId', headerName: 'Product ID', flex: flexField },
    { field: 'category', headerName: 'Category', flex: flexField },
    { field: 'productName', headerName: 'Product Name', flex: flexField },
    {
        field: 'stock',
        headerName: 'Stock',
        type: 'text',
        flex: flexField,
    },
    {
        field: 'createdDate',
        headerName: 'Created Date',
        flex: flexField
    },
    {
        field: 'status',
        headerName: 'Status',
        type: 'number',
        flex: flexField
    },
    {
        field: 'action',
        headerName: 'Actions',
        type: 'string',
        flex: flexField,
        sortable: false,
        renderCell: () => {
            return (
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <MoreVertIcon></MoreVertIcon>
                </Box>
            )
        }
    },
];

const rows = [
    { productId: 1, category: 'Snow', productName: 'Jon', stock: 35, action: MoreVertIcon },
    { productId: 2, category: 'Lannister', productName: 'Cersei', stock: 42, action: MoreVertIcon },
    { productId: 3, category: 'Lannister', productName: 'Jaime', stock: 45, action: MoreVertIcon },
    { productId: 4, category: 'Stark', productName: 'Arya', stock: 16, action: MoreVertIcon },
    { productId: 5, category: 'Targaryen', productName: 'Daenerys', stock: null, action: MoreVertIcon },
    { productId: 6, category: 'Melisandre', productName: null, stock: 150, action: MoreVertIcon },
    { productId: 7, category: 'Clifford', productName: 'Ferrara', stock: 44, action: MoreVertIcon },
    { productId: 8, category: 'Frances', productName: 'Rossini', stock: 36, action: MoreVertIcon },
    { productId: 9, category: 'Roxie', productName: 'Harvey', stock: 65, action: MoreVertIcon },
];
const DataTable = () => {
    return (
        <div style={{ height: 400, width: '100%' }}>
            <DataGrid
                getRowId={(row) => row.productId}
                rows={rows}
                columns={columns}
                initialState={{
                    pagination: {
                        paginationModel: { page: 0, pageSize: 5 },
                    },
                }}
                pageSizeOptions={[5, 10]}
            />
        </div>
    );
}
export default DataTable