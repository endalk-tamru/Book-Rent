"use client";

import { useMemo } from "react";
import { Card, CardContent, Stack, Typography } from "@mui/material";
import {
  Search as SearchIcon,
  FilterList as FilterListIcon,
  Menu as MenuIcon,
  Tune as TuneIcon,
} from "@mui/icons-material";

import GridData from "../common/GridData";
import StatusLabel from "../common/StatusLabel";

const bookData = [
  {
    _id: 1,
    bookNo: "B001",
    owner: "John Doe",
    status: "Free",
    price: 1000,
  },
  {
    _id: 2,
    bookNo: "B002",
    owner: "Jane Doe",
    status: "Rented",
    price: 2000,
  },
  {
    _id: 3,
    bookNo: "B003",
    owner: "John Doe",
    status: "Free",
    price: 3000,
  },
];

export default function LiveBookStatus() {
  const bookColumns = useMemo(
    () => [
      {
        field: "_id",
        headerName: "No",
        flex: 1,
      },
      {
        field: "bookNo",
        headerName: "Book No",
        flex: 1,
      },
      {
        field: "owner",
        headerName: "Owner",
        flex: 1,
      },
      {
        field: "status",
        headerName: "Status",
        flex: 1,
        renderCell: ({ value }) => <StatusLabel status={value} />,
      },
      {
        field: "price",
        headerName: "Price",
        flex: 1,
        type: "number",
      },
    ],
    []
  );

  return (
    <Card variant="outlined" sx={{ my: 4, minWidth: "100%" }}>
      <CardContent>
        <Stack spacing={3}>
          <Stack direction="row" spacing={1.5} justifyContent={"end"}>
            <SearchIcon />
            <FilterListIcon />
            <MenuIcon />
            <TuneIcon />
          </Stack>

          <Typography variant="body1" fontWeight={"bold"}>
            Live Book Status
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
