import { Grid, GridItem } from "@chakra-ui/react";

// import './DashBoard.css'
const DashBoard = () => {
  return (
    <div className="max-w-screen-xl mx-auto">
      <Grid
        className="h-[88.5vh]"
        templateRows="repeat(12, 1fr)"
        templateColumns="repeat(12, 1fr)"
        gap={4}
      >
        <GridItem rowSpan={12} colSpan={3} bg="tomato" />
        <GridItem colSpan={9} rowSpan={12} bg="papayawhip" />
      </Grid>
    </div>
  );
};

export default DashBoard;
