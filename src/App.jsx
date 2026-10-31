
import { useState } from "react";
import Navbar from "./components/Navbar";
import Form from "./components/Form";
import Footer from "./components/Footer";
import HeroSection from "./sections/HeroSection";
import CardsSection from "./sections/CardsSection";
import useResources from "./hooks/useResources";
import categories from "./data/categories";

function App() {
  const [showForm, setShowForm] = useState(false);

  const { addedResources,  addResource } = useResources();

  const handleAddResource = (resource) => {
    addResource(resource);
    setShowForm(false);
  };

  return (
    <>
      <Navbar onAddResource={() => setShowForm(true)} />

      <HeroSection />

      <CardsSection addedResources={addedResources} />

      {showForm && (
        <Form
          onSubmit={handleAddResource}
          onClose={() => setShowForm(false)}
          categories={categories}
        />
      )}

      <Footer />
    </>
  );
}

export default App;
