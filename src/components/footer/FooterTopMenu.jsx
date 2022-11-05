import { Box, Button, Container, Link, Stack, styled } from "@mui/material";
import React, { useContext } from "react";
import { MediaScreenContext } from "../../context";

const PropertyBox = styled(Box)({
  textAlign: "center",
  padding: "1rem",
  borderBottom: "1px solid white",
});

const btnsHover = { backgroundColor: "#00487a" };

const ListPropertyBtn = styled(Button)(({ theme }) => ({
  backgroundColor: "transparent",
  color: "#FFF",
  border: "1px solid #FFF",
  fontWeight: "500",
  fontSize: "0.8125rem",
  padding: ".3rem 1.5rem",
  borderRadius: "3px",

  "&:hover": btnsHover,

  [theme.breakpoints.down("lg")]: {
    backgroundColor: "#FFF",
    color: theme.palette.primary.light,
    borderColor: theme.palette.primary.light,
    fontWeight: 400,
    padding: ".5rem 1.2rem",

    "&:hover": {
      backgroundColor: "#ebebeb",
    },
  },
}));

const CustomLink = styled(Link)({
  color: "#FFF",
  textDecoration: "underline",
  fontSize: "0.8125rem",
  lineHeight: "1em",
  fontWeight: "600",
  padding: "5px 0",
  fontFamily: "inherit",
});

const mobileLinks = [
  {
    label: "Desktop version",
    href: "#",
  },
  {
    label: "Terms & conditions",
    href: "#",
  },
  {
    label: "How We Work",
    href: "#",
  },
  {
    label: "Privacy & Cookies",
    href: "#",
  },
  {
    label: "About Booking.com",
    href: "#",
  },
];

const deskTopLinks = [
  {
    label: "Mobile version",
    href: "#",
  },
  {
    label: "Your account",
    href: "#",
  },
  {
    label: "Make changes to your booking online",
    href: "#",
  },
  {
    label: "Customer Service help",
    href: "#",
  },
  {
    label: "Become an affiliate",
    href: "#",
  },
  {
    label: " Booking.com for business",
    href: "#",
  },
];

const FooterTopMenu = () => {
  const { isTabletOrMobile } = useContext(MediaScreenContext);
  const links = isTabletOrMobile ? mobileLinks : deskTopLinks;

  return (
    <Box sx={{ py: 0, bgcolor: "primary.main" }}>
      <PropertyBox>
        <ListPropertyBtn>List your property</ListPropertyBtn>
      </PropertyBox>
      <Container>
        <Stack
          direction="row"
          flexWrap="wrap"
          spacing={3}
          sx={{
            color: "#FFF",
            justifyContent: { xs: "center", lg: "flex-start" },
            py: 2,
          }}
        >
          {links.map(({ label, href }, key) => (
            <CustomLink key={key} href={href} target="_blank">
              {label}
            </CustomLink>
          ))}
        </Stack>
      </Container>
    </Box>
  );
};

export default FooterTopMenu;
