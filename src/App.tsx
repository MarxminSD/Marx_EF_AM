import { useState } from "react";
import StaffChat from "./lib/StaffChat";
import Dashboard from "./lib/Dashboard";
import Players from "./lib/Players";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import {
  AppShell,
  Navbar,
  Header,
  MantineProvider,
  Image,
  Text,
  Box,
  NavLink,
  Divider
  } from "@mantine/core";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";

import {
  IconLookup,
  IconDefinition,
  findIconDefinition
} from "@fortawesome/fontawesome-svg-core";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const coffeeLookup: IconLookup = { prefix: "fas", iconName: "coffee" };
const coffeeIconDefinition: IconDefinition = findIconDefinition(coffeeLookup);

const houseLookup: IconLookup = { prefix: "fas", iconName: "house" };
const houseIconDefinition: IconDefinition = findIconDefinition(houseLookup);

const userLookup: IconLookup = { prefix: "fas", iconName: "user" };
const userIconDefinition: IconDefinition = findIconDefinition(userLookup);

const reportLookup: IconLookup = { prefix: "fas", iconName: "file" };
const reportIconDefinition: IconDefinition = findIconDefinition(reportLookup);

const jobLookup: IconLookup = { prefix: "fas", iconName: "hammer" };
const jobIconDefinition: IconDefinition = findIconDefinition(jobLookup);

const gangLookup: IconLookup = { prefix: "fas", iconName: "gun" };
const gangIconDefinition: IconDefinition = findIconDefinition(gangLookup);

const banLookup: IconLookup = { prefix: "fas", iconName: "ban" };
const banIconDefinition: IconDefinition = findIconDefinition(banLookup);

const charLookup: IconLookup = { prefix: "fas", iconName: "users" };
const charIconDefinition: IconDefinition = findIconDefinition(charLookup);

const serverLookup: IconLookup = { prefix: "fas", iconName: "server" };
const serverIconDefinition: IconDefinition = findIconDefinition(serverLookup);

const itemLookup: IconLookup = { prefix: "fas", iconName: "box" };
const itemIconDefinition: IconDefinition = findIconDefinition(itemLookup);

const carLookup: IconLookup = { prefix: "fas", iconName: "car" };
const carIconDefinition: IconDefinition = findIconDefinition(carLookup);

const leaderLookup: IconLookup = { prefix: "fas", iconName: "info" };
const leaderIconDefinition: IconDefinition = findIconDefinition(leaderLookup);

library.add(fas);

const data1 = [
  {
    icon: houseIconDefinition,
    label: "Dashboard"
  },
  {
    icon: coffeeIconDefinition,
    label: "Staff Chat"
  },
  {
    label: "Administration",
    divider: true
  },
  {
    icon: userIconDefinition,
    label: "Players"
  },
  {
    icon: reportIconDefinition,
    label: "Reports"
  },
  {
    icon: jobIconDefinition,
    label: "Jobs"
  },
  {
    icon: gangIconDefinition,
    label: "Gangs"
  },
  {
    label: "Database Interaction",
    divider: true
  },
  {
    icon: banIconDefinition,
    label: "Bans"
  },
  {
    icon: charIconDefinition,
    label: "Characters"
  },
  {
    label: "Server Information",
    divider: true
  },
  {
    icon: serverIconDefinition,
    label: "Server Metrics"
  },
  {
    icon: itemIconDefinition,
    label: "Item List"
  },
  {
    icon: carIconDefinition,
    label: "Vehicle List"
  },
  {
    icon: leaderIconDefinition,
    label: "Leaderboards"
  }
];

export default function App() {
  const [active, setActive] = useState(0);

  const items = data1.map((item, index) => {
    if (item.divider) {
      return (
        <Divider
          my="xs"
          label={item.label}
          size="md"
          labelProps={{ fz: "md" }}
        />
      );
    } else {
      return (
        <NavLink
          key={item.label}
          active={index === active}
          label={item.label}
          onClick={() => setActive(index)}
          icon={
            <FontAwesomeIcon style={{ paddingRight: 10 }} icon={item.icon} />
          }
        ></NavLink>
      );
    }
  });

  return (
    <Router>
      <MantineProvider
        theme={{ colorScheme: "dark" }}
        withGlobalStyles
        withNormalizeCSS
      >
        <AppShell
          padding="md"
          navbar={
            <Navbar height={600} p="xs" width={{ base: 300 }}>
              <Text component={Link} to="/Dashboard">
                {items}
              </Text>
            </Navbar>
          }
          header={
            <Header height={{ base: 50, md: 90 }} p="md">
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  height: "100%"
                }}
              >
                <Image
                  radius="md"
                  width={250}
                  src="https://files.jellyton.me/ShareX/2023/02/Everfall-Text-White.png"
                  withPlaceholder
                />
              </div>
            </Header>
          }
        >
          {
            <div
              style={{ width: 400, marginLeft: "auto", marginRight: "auto" }}
            >
              <Box
                sx={(theme) => ({
                  backgroundColor:
                    theme.colorScheme === "dark"
                      ? theme.colors.dark[6]
                      : theme.colors.gray[0],
                  padding: theme.spacing.xl,
                  textAlign: "center",
                  m: 1000,
                  borderRadius: theme.radius.md,
                  cursor: "pointer",
                  "&:hover": {
                    backgroundColor:
                      theme.colorScheme === "dark"
                        ? theme.colors.dark[5]
                        : theme.colors.gray[1]
                  }
                })}
              >
                Box lets you add inline styles with sx prop
              </Box>
            </div>
          }
          <Routes>
            <Route path="/Dashboard" element={<Dashboard />} />
            <Route path="/StaffChat" element={<StaffChat />} />
            <Route path="/Players" element={<Players />} />
          </Routes>
        </AppShell>
      </MantineProvider>
    </Router>
  );
}
