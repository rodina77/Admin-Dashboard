import { Stack, useTheme } from "@mui/material";
import Card from "./card";
import EmailIcon from "@mui/icons-material/Email";
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
            <EmailIcon
              sx={{ fontSize: "23px", color: theme.palette.secondary.main }}
            />
          }
          title={"12,316"}
          subtitle={"Emails Sent"}
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
          title={"1000"}
          subtitle={"Identify"}
          increase={"+10%"}
          data={data2}
          scheme={"category10"}

        />
        <Card
          icon={
            <PersonAddIcon
              sx={{ fontSize: "25px", color: theme.palette.secondary.main }}
            />
          }
          title={"15,250"}
          subtitle={"Adding new data"}
          increase={"+30%"}
          data={data3}
          scheme={"accent"}

        />
        <Card
          icon={
            <FamilyRestroomIcon
              sx={{ fontSize: "25px", color: theme.palette.secondary.main }}
            />
          }
          title={"16,380"}
          subtitle={"Return of the Missing"}
          increase={"+40%"}
          data={data4}
          scheme={"dark2"}

        />
      </Stack>
    </div>
  );
};

export default Row1;
