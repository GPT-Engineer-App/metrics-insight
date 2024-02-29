import React from "react";
import { Box, Flex, Text, Grid, GridItem, Stat, StatLabel, StatNumber, StatHelpText, StatArrow, Icon, VStack } from "@chakra-ui/react";
import { FaChartLine, FaDollarSign, FaShoppingCart, FaUsers } from "react-icons/fa";

const DashboardStat = ({ icon, label, value, delta, deltaType }) => (
  <Stat p={4} shadow="md" border="1px" borderColor="gray.200" borderRadius="md" bg="white">
    <Flex alignItems="center">
      <Box fontSize="3xl" color="gray.500" mr={2}>
        <Icon as={icon} />
      </Box>
      <Box>
        <StatLabel fontWeight="medium">{label}</StatLabel>
        <StatNumber fontSize="2xl">{value}</StatNumber>
        <StatHelpText>
          <StatArrow type={deltaType} />
          {delta}
        </StatHelpText>
      </Box>
    </Flex>
  </Stat>
);

const Index = () => {
  return (
    <Box p={8}>
      <VStack spacing={8}>
        <Flex w="full" justifyContent="space-between" alignItems="center">
          <Text fontSize="2xl" fontWeight="bold">
            Dashboard
          </Text>
        </Flex>
        <Grid templateColumns="repeat(4, 1fr)" gap={6}>
          <GridItem>
            <DashboardStat icon={FaShoppingCart} label="Total Sales" value="1,024" delta="12.4%" deltaType="increase" />
          </GridItem>
          <GridItem>
            <DashboardStat icon={FaUsers} label="New Customers" value="89" delta="15.2%" deltaType="increase" />
          </GridItem>
          <GridItem>
            <DashboardStat icon={FaDollarSign} label="Revenue" value="$14,400" delta="9.8%" deltaType="increase" />
          </GridItem>
          <GridItem>
            <DashboardStat icon={FaChartLine} label="Profit" value="$4,230" delta="5.6%" deltaType="decrease" />
          </GridItem>
        </Grid>
      </VStack>
    </Box>
  );
};

export default Index;
