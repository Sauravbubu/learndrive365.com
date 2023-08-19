import React, { useState } from "react";
import Carousel from "../../components/Carousel";
import WhyUs from "../../components/WhyUs";
import Testimonials from "../../components/Testimonials";
import ContactForm from "../../components/Form";
import { MemoisedModal } from "../../components/ModalWrapper";
import { MemoisedWhyOurDrivingSchool } from "../../components/SafeFowWomen";
import { MemoisedFooter } from "../../components/Footer";
import InteractiveSectionComponent from "../../components/HomeInteractive";
import QuizGame from "../../components/Game";

const Home = () => {
  const [FormOpen, setFormOpen] = useState(false);
  return (
    <div style={{ width: "100%" }}>
      <Carousel setFormOpen={setFormOpen} />
      <WhyUs />
      <InteractiveSectionComponent />
      <QuizGame/>
      <MemoisedWhyOurDrivingSchool />

      <Testimonials />
      {FormOpen && (
        <MemoisedModal
          isOpen={FormOpen}
          onClose={() => {
            setFormOpen(false);
          }}
        >
          <ContactForm />
        </MemoisedModal>
      )}
      <MemoisedFooter />
    </div>
  );
};
export default Home;
