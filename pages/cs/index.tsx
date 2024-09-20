import withLayoutBasic from "@/libs/components/layout/LayoutBasic";
import { Container, Stack } from "@mui/material";
import { NextPage } from "next";

const Cs: NextPage = () => {
  return (
    <div style={{ margin: "20px 0" }}>
      <Stack className="container">Cs LIST</Stack>
    </div>
  );
};

export default withLayoutBasic(Cs);