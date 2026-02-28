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
import { useEffect, useState } from "react";

const drawerWidth = 240;

interface NavItem {
  label: string;
  icon?: React.ReactNode;
  path?: string;
  children?: NavItem[];
}

export default function Sidebar() {
  const location = useLocation();
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  const isActive = (path?: string) => {
    if (!path) return false;
    if (path === "/") return location.pathname === "/";
    return location.pathname.startsWith(path);
  };

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
            { label: "My Contests", path: "/contests" },
            { label: "Leaderboard", path: "/leaderboard" },
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

  // Auto-expand parent if child route active
  useEffect(() => {
    navSections.forEach((section) => {
      section.items.forEach((item) => {
        if (
          item.children?.some((child) =>
            location.pathname.startsWith(child.path || "")
          )
        ) {
          setOpenMenu(item.label);
        }
      });
    });
  }, [location.pathname]);

  return (
    <Box
      sx={{
        width: drawerWidth,
        backgroundColor: "background.paper",
        borderRight: (theme) => `1px solid ${theme.palette.divider}`,
        pt: 3,
        overflowY: "auto",
      }}
    >
      {navSections.map((section) => (
        <Box key={section.title} sx={{ px: 2, mb: 3 }}>
          <Typography
            variant="caption"
            sx={{
              fontWeight: 700,
              color: "text.secondary",
              pl: 1,
              mb: 1,
              display: "block",
              letterSpacing: 0.5,
            }}
          >
            {section.title}
          </Typography>

          <List disablePadding>
            {section.items.map((item) => {
              // Collapsible menu
              if (item.children) {
                const childActive = item.children.some((c) =>
                  isActive(c.path)
                );

                return (
                  <Box key={item.label}>
                    <ListItemButton
                      onClick={() =>
                        setOpenMenu(openMenu === item.label ? null : item.label)
                      }
                      sx={{
                        borderRadius: 2,
                        mb: 0.5,
                        backgroundColor: childActive
                          ? "rgba(30,167,215,0.12)"
                          : "transparent",
                      }}
                    >
                      <ListItemIcon
                        sx={{
                          minWidth: 36,
                          color: childActive
                            ? "primary.main"
                            : "text.secondary",
                        }}
                      >
                        {item.icon}
                      </ListItemIcon>

                      <ListItemText
                        primary={item.label}
                        primaryTypographyProps={{
                          fontWeight: childActive ? 600 : 500,
                        }}
                      />

                      {openMenu === item.label ? <ExpandLess /> : <ExpandMore />}
                    </ListItemButton>

                    <Collapse in={openMenu === item.label}>
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

              // Normal item
              return (
                <ListItemButton
                  key={item.label}
                  component={NavLink}
                  to={item.path || ""}
                  end={item.path === "/"}   // strict root match
                  sx={{
                    borderRadius: 2,
                    mb: 0.5,
                    backgroundColor: isActive(item.path)
                      ? "rgba(30,167,215,0.12)"
                      : "transparent",
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 36,
                      color: isActive(item.path)
                        ? "primary.main"
                        : "text.secondary",
                    }}
                  >
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