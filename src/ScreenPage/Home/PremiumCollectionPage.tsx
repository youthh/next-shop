import React from "react";
import SectionTitle from "@/Components/SectionTitle/SectionTitle";
import Container from "@/Components/Container/Container";
import TabsContainer from "@/Components/TabsContainer/TabsContainer";

const PremiumCollectionPage = () => {
  return (
    <section style={{ background: "#F4F7F8", padding: "100px 0" }}>
      <Container>
        <SectionTitle>Our Premium Collection</SectionTitle>
        <TabsContainer />
      </Container>
    </section>
  );
};

export default PremiumCollectionPage;
