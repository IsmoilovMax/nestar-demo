import withLayoutBasic from "@/libs/components/layout/LayoutBasic";
import { Container, Stack } from "@mui/material";
import { NextPage } from "next";

const Community: NextPage = () => {
  return (
    <div style={{ margin: "20px 0" }}>
      <Stack className="container">Community LIST</Stack>
    </div>
  );
};

export default withLayoutBasic(Community);