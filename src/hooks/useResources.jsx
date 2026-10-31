
import { useEffect, useState } from "react";
import details from "../data/data";

const STORAGE_KEY = "dev-resource-hub";

export default function useResources() {
  const [addedResources, setAddedResources] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Persist custom resources
  useEffect(() => {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(addedResources)
    );
  }, [addedResources]);

  // Add resource
  const addResource = (resource) => {
    setAddedResources((prev) => [...prev, resource]);
  };

  // Combine original and custom resources
  const allResources = [...details, ...addedResources];

  // Get categories
  const categories = [
    ...new Set(allResources.map((resource) => resource.category)),
  ];

  return {
    addedResources,
    allResources,
    categories,
    addResource,
  };
}
