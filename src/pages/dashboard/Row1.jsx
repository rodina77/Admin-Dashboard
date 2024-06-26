import { Stack, useTheme } from "@mui/material";
import Card from "./card";
import SearchIcon from '@mui/icons-material/Search';
import FingerprintIcon from "@mui/icons-material/Fingerprint";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import FamilyRestroomIcon from "@mui/icons-material/FamilyRestroom";
import { data1, data2, data3, data4 } from "./data";

const Row1 = () => {
  const theme = useTheme();

  return (
    <div>
      <Stack
        direction={"row"}
        flexWrap={"wrap"}
        gap={1}
        justifyContent={{ xs: "center", sm: "space-between" }}
        mt={2}
      >
        <Card
          icon={
            <SearchIcon
              sx={{ fontSize: "23px", color: theme.palette.secondary.main }}
            />
          }
          title={"missing tests"}
          subtitle={"person and his family"}
          increase={"+15%"}
          data={data1}
          scheme={"nivo"}
        />
        <Card
          icon={
            <FingerprintIcon
              sx={{ fontSize: "25px", color: theme.palette.secondary.main }}
            />
          }
          title={"Identification test"}
          subtitle={"data about preson"}
          increase={"+10%"}
          data={data2}
          scheme={"category10"}

        />
        <Card
          icon={
            <FamilyRestroomIcon
              sx={{ fontSize: "25px", color: theme.palette.secondary.main }}
            />
          }
          title={"Paternity test"}
          subtitle={"child and father"}
          increase={"+30%"}
          data={data3}
          scheme={"accent"}

        />
        <Card
          icon={
            <PersonAddIcon
              sx={{ fontSize: "25px", color: theme.palette.secondary.main }}
            />
          }
          title={"Adding new"}
          subtitle={"collecting DNA data"}
          increase={"+40%"}
          data={data4}
          scheme={"dark2"}

        />
      </Stack>
    </div>
  );
};

export default Row1;
