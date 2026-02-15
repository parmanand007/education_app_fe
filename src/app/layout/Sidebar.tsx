import {
  Box,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  Collapse,
} from "@mui/material";
import {
  DashboardOutlined,
  FeedOutlined,
  BarChartOutlined,
  GridViewOutlined,
  MenuBookOutlined,
  EmojiEventsOutlined,
  ExpandLess,
  ExpandMore,
  BookmarkBorderOutlined,
  ListAltOutlined,
  EmojiEvents,
  WorkspacePremiumOutlined,
  StarBorderOutlined,
  AccountCircleOutlined,
} from "@mui/icons-material";
import { NavLink, useLocation } from "react-router-dom";
import { useState } from "react";

const drawerWidth = 240;

interface NavItem {
  label: string;
  icon: React.ReactNode;
  path?: string;
  children?: NavItem[];
}

export default function Sidebar() {
  const location = useLocation();
  const [openTournament, setOpenTournament] = useState(true);

  const isActive = (path?: string) =>
    path ? location.pathname.startsWith(path) : false;

  const navSections: { title: string; items: NavItem[] }[] = [
    {
      title: "OPERATIONS",
      items: [
        { label: "Dashboard", icon: <DashboardOutlined />, path: "/" },
        { label: "Content Feed", icon: <FeedOutlined />, path: "/content-feed" },
        { label: "Provider Scorecard", icon: <BarChartOutlined />, path: "/provider-scorecard" },
        { label: "ICD10 Code Search", icon: <GridViewOutlined />, path: "/icd10" },
      ],
    },
    {
      title: "LEARNING",
      items: [
        { label: "My Programs", icon: <MenuBookOutlined />, path: "/programs" },
        {
          label: "Tournament",
          icon: <EmojiEventsOutlined />,
          children: [
            { label: "My Contests", icon: <StarBorderOutlined />, path: "/contests" },
            { label: "Leaderboard", icon: <WorkspacePremiumOutlined />, path: "/leaderboard" },
          ],
        },
        { label: "Question Review", icon: <ListAltOutlined />, path: "/question-review" },
        { label: "Question Bookmark", icon: <BookmarkBorderOutlined />, path: "/question-bookmark" },
      ],
    },
    {
      title: "ACCOMPLISHMENTS",
      items: [
        { label: "Achievements", icon: <EmojiEvents />, path: "/achievements" },
        { label: "DT Points", icon: <StarBorderOutlined />, path: "/dt-points" },
        { label: "CME Tracking", icon: <WorkspacePremiumOutlined />, path: "/cme-tracking" },
      ],
    },
    {
      title: "SYSTEM",
      items: [
        { label: "Account", icon: <AccountCircleOutlined />, path: "/account" },
      ],
    },
  ];

  return (
    <Box
      sx={{
        width: drawerWidth,
        backgroundColor: "#f4f7fb",
        height: "100vh",
        borderRight: "1px solid #e5e7eb",
        pt: 2,
      }}
    >
      {navSections.map((section) => (
        <Box key={section.title} sx={{ px: 2, mb: 2 }}>
          <Typography
            variant="caption"
            sx={{
              fontWeight: 700,
              color: "#9aa4b2",
              pl: 1,
              mb: 1,
              display: "block",
            }}
          >
            {section.title}
          </Typography>

          <List disablePadding>
            {section.items.map((item) => {
              if (item.children) {
                return (
                  <Box key={item.label}>
                    <ListItemButton
                      onClick={() => setOpenTournament(!openTournament)}
                      sx={{
                        borderRadius: 2,
                        mb: 0.5,
                      }}
                    >
                      <ListItemIcon sx={{ minWidth: 36 }}>
                        {item.icon}
                      </ListItemIcon>
                      <ListItemText
                        primary={item.label}
                        primaryTypographyProps={{
                          fontWeight: 500,
                        }}
                      />
                      {openTournament ? <ExpandLess /> : <ExpandMore />}
                    </ListItemButton>

                    <Collapse in={openTournament} timeout="auto" unmountOnExit>
                      <List component="div" disablePadding>
                        {item.children.map((child) => (
                          <ListItemButton
                            key={child.label}
                            component={NavLink}
                            to={child.path || ""}
                            sx={{
                              pl: 6,
                              borderRadius: 2,
                              mb: 0.5,
                              backgroundColor: isActive(child.path)
                                ? "rgba(30,167,215,0.12)"
                                : "transparent",
                              "&:hover": {
                                backgroundColor: "rgba(30,167,215,0.08)",
                              },
                            }}
                          >
                            <ListItemText
                              primary={child.label}
                              primaryTypographyProps={{
                                fontSize: 14,
                                fontWeight: isActive(child.path) ? 600 : 400,
                              }}
                            />
                          </ListItemButton>
                        ))}
                      </List>
                    </Collapse>
                  </Box>
                );
              }

              return (
                <ListItemButton
                  key={item.label}
                  component={NavLink}
                  to={item.path || ""}
                  sx={{
                    borderRadius: 2,
                    mb: 0.5,
                    backgroundColor: isActive(item.path)
                      ? "rgba(30,167,215,0.12)"
                      : "transparent",
                    "&:hover": {
                      backgroundColor: "rgba(30,167,215,0.08)",
                    },
                  }}
                >
                  <ListItemIcon sx={{ minWidth: 36 }}>
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText
                    primary={item.label}
                    primaryTypographyProps={{
                      fontWeight: isActive(item.path) ? 600 : 400,
                    }}
                  />
                </ListItemButton>
              );
            })}
          </List>
        </Box>
      ))}
    </Box>
  );
}
