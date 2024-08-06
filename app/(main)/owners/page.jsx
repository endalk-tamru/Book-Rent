"use client";

import {
  Avatar,
  Button,
  Card,
  CardContent,
  Chip,
  IconButton,
  Stack,
  Switch,
  Typography,
} from "@mui/material";
import {
  Visibility as VisibilityIcon,
  Delete as DeleteIcon,
  Search as SearchIcon,
  FilterList as FilterListIcon,
  Menu as MenuIcon,
  Tune as TuneIcon,
} from "@mui/icons-material";
import { GridActionsCellItem } from "@mui/x-data-grid";

import GridData from "@/components/common/GridData";
import StatusLabel from "@/components/common/StatusLabel";

const ownerData = [
  {
    _id: 1,
    owner: "John Doe",
    upload: "15 Books",
    location: "Addis Ababa",
    status: "Active",
    currentStatus: "Approve",
  },
  {
    _id: 2,
    owner: "Jane Doe",
    upload: "10 Books",
    location: "Addis Ababa",
    status: "Inactive",
    currentStatus: "Approve",
  },
  {
    _id: 3,
    owner: "John Doe",
    upload: "15 Books",
    location: "Addis Ababa",
    status: "Active",
    currentStatus: "Approve",
  },
  {
    _id: 4,
    owner: "Jane Doe",
    upload: "10 Books",
    location: "Addis Ababa",
    status: "Inactive",
    currentStatus: "Approved",
  },
  {
    _id: 5,
    owner: "John Doe",
    upload: "15 Books",
    location: "Addis Ababa",
    status: "Active",
    currentStatus: "Approved",
  },
];

export default function Owners() {
  const ownerColumns = [
    {
      field: "_id",
      headerName: "No",
      flex: 0,
    },
    {
      field: "owner",
      headerName: "Owner",
      flex: 1,
      renderCell: ({ value }) => (
        <Stack direction={"row"} spacing={1.5} my={1.5}>
          <Avatar alt={value} src={""} sx={{ width: 24, height: 24 }} />
          <Typography variant="body2">{value}</Typography>
        </Stack>
      ),
    },
    {
      field: "upload",
      headerName: "Upload",
      flex: 1,
    },
    {
      field: "location",
      headerName: "Location",
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
    {
      field: "action",
      headerName: "Action",
      flex: 1,
      renderCell: ({ value }) => (
        <Stack direction={"row"} spacing={1.5}>
          <IconButton>
            <VisibilityIcon />
          </IconButton>
          <IconButton color="error">
            <DeleteIcon />
          </IconButton>
        </Stack>
      ),
    },
    {
      field: "currentStatus",
      headerName: "",
      flex: 1,
      renderCell: ({ value }) => (
        <Button
          variant="contained"
          color={value === "Approved" ? "primary" : "shadow"}
          size="small"
        >
          {value}
        </Button>
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
            List of Owners
          </Typography>

          <GridData
            loading={false}
            rows={ownerData ?? []}
            columns={ownerColumns}
          />
        </Stack>
      </CardContent>
    </Card>
  );
}
