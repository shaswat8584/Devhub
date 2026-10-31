import { useState } from "react";
import details from "../data/data";
import categories from "../data/categories";
import Cards from "../components/Cards";
import Animated from "../components/Animated";

export default function CardsSection({ addedResources = [] }) {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const allResources = [...details, ...addedResources];

  const filteredResources = allResources.filter((resource) => {
    const matchesCategory =
      activeCategory === "All" || resource.category === activeCategory;

    const query = searchQuery.toLowerCase().trim();

    const matchesSearch =
      resource.name.toLowerCase().includes(query) ||
      resource.description.toLowerCase().includes(query) ||
      resource.category.toLowerCase().includes(query);

    return matchesCategory && matchesSearch;
  });

  return (
    <section id="resources" className="mx-auto max-w-7xl px-6 py-16">
      {/* Header */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-text">Explore Resources</h2>
        <p className="mt-2 text-muted">
          Discover useful tools and resources for developers.
        </p>
      </div>

      {/* Search */}
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search resources..."
        className="mb-6 w-full rounded-lg border border-border bg-surface p-3 text-text outline-none focus:border-primary"
      />

      {/* Categories */}
      <div id="categories" className="mb-8 flex flex-wrap gap-3">
        {["All", ...categories].map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`rounded-lg px-4 py-2 text-sm font-medium transition ${
              activeCategory === category
                ? "bg-primary text-white"
                : "border border-border bg-surface text-muted hover:text-text"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Result Count */}
      <p className="mb-5 text-sm text-muted">
      Showing {filteredResources.length} of {allResources.length} resources
      </p> {/* Results Count */}
     

      {/* Cards */}
      {filteredResources.length > 0 ? (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredResources.map((resource) => (
            <Animated key={resource.id}>
              <Cards resource={resource} />
            </Animated>
          ))}
        </div>
      ) : (
        <div className="py-16 text-center text-muted">No resources found.</div>
      )}
     
    </section>
  );
}
