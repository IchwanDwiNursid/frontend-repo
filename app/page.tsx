import { Box, Button, Container, Typography } from "@mui/material";
import "./Global.css";
import HeroSectionPage from "@/component/Hero/HeroSection";

export default function Home() {
  return (
    <>
      <HeroSectionPage
        title="Welcome To My Website"
        description="Your ultimate solution for everything awesome!"
      ></HeroSectionPage>
    </>
  );
}
