"use client";

import {
  Card,
  CardContent,
  Chip,
  Stack,
  Switch,
  Typography,
} from "@mui/material";
import {
  Search as SearchIcon,
  FilterList as FilterListIcon,
  Menu as MenuIcon,
  Tune as TuneIcon,
} from "@mui/icons-material";

import GridData from "@/components/common/GridData";
import StatusLabel from "@/components/common/StatusLabel";

const bookData = [
  {
    _id: 1,
    bookNo: "B001",
    bookName: "Harry Potter",
    author: "Harry",
    owner: "John Doe",
    category: "Fiction",
    status: "Active",
    price: 1000,
  },
  {
    _id: 2,
    bookNo: "B002",
    bookName: "Expect the unexpected",
    author: "Harry",
    owner: "Jane Doe",
    category: "Fiction",
    status: "Active",
    price: 2000,
  },
  {
    _id: 3,
    bookNo: "B003",
    bookName: "HarryPotter",
    author: "Harry",
    owner: "John Doe",
    category: "Fiction",
    status: "Active",
    price: 3000,
  },
];

export default function Books() {
  const bookColumns = [
    {
      field: "_id",
      headerName: "No",
      flex: 0,
    },
    {
      field: "author",
      headerName: "Author",
      flex: 1,
    },
    {
      field: "owner",
      headerName: "Owner",
      flex: 1,
    },
    {
      field: "category",
      headerName: "Category",
      flex: 1,
    },
    {
      field: "bookName",
      headerName: "Book Name",
      flex: 1,
    },
    {
      field: "status",
      headerName: "Status",
      flex: 1,
      renderCell: ({ value }) => (
        <Chip
          label={
            <Stack direction={"row"} spacing={1} my={1.5}>
              <StatusLabel status={value} />
              <Switch color="success" size="small" checked />
            </Stack>
          }
        />
      ),
    },
  ];

  return (
    <Card variant="outlined" sx={{ minWidth: "100%" }}>
      <CardContent>
        <Stack spacing={3}>
          <Stack direction="row" spacing={1.5} justifyContent={"end"}>
            <SearchIcon />
            <FilterListIcon />
            <MenuIcon />
            <TuneIcon />
          </Stack>

          <Typography variant="body1" fontWeight={"bold"}>
            List of Books
          </Typography>

          <GridData
            loading={false}
            rows={bookData ?? []}
            columns={bookColumns}
          />
        </Stack>
      </CardContent>
    </Card>
  );
}
