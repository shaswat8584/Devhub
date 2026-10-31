import { useEffect, useState } from "react";
import { X } from "lucide-react";

export default function Form({ onSubmit, onClose, categories = [] }) {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    category: "",
    url: "",
    image: "",
  });

  // Prevent background scrolling while modal is open
  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newResource = {
      id: `custom-${Date.now()}`,
      name: formData.name.trim(),
      description: formData.description.trim(),
      category: formData.category.trim(),
      url: formData.url.trim(),
      image: formData.image.trim(),
      icon: "Code2",
    };

    onSubmit(newResource);
  };

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 px-4 py-6 backdrop-blur-sm"
    >
      <form
        onSubmit={handleSubmit}
        onClick={(e) => e.stopPropagation()}
      
        className="relative max-h-[90vh] w-full max-w-lg space-y-4 overflow-y-auto rounded-2xl border border-border bg-surface p-6 shadow-2xl"
      >
        {/* Header */}
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold text-text">Add New Resource</h2>

          <button
            type="button"
            onClick={onClose}
            className="rounded-lg p-2 text-muted transition hover:bg-bg hover:text-text"
            aria-label="Close form"
          >
            <X size={22} />
          </button>
        </div>

        {/* Resource Name */}
        <input
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Resource name"
          required
          className="w-full rounded-lg border border-border bg-bg p-3 text-text outline-none focus:border-primary"
        />

        {/* Description */}
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Short description"
          rows={3}
          required
          className="w-full resize-none rounded-lg border border-border bg-bg p-3 text-text outline-none focus:border-primary"
        />

        {/* Category */}
        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
          required
          className="w-full rounded-lg border border-border bg-bg p-3 text-text outline-none focus:border-primary"
        >
          <option value="" disabled>
            Select a category
          </option>

          {categories
            .filter((category) => category !== "All")
            .map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
        </select>

        {/* Website URL */}
        <input
          name="url"
          type="url"
          value={formData.url}
          onChange={handleChange}
          placeholder="Website URL (https://...)"
          required
          className="w-full rounded-lg border border-border bg-bg p-3 text-text outline-none focus:border-primary"
        />

        {/* Image URL */}
        <input
          name="image"
          type="url"
          value={formData.image}
          onChange={handleChange}
          placeholder="Image URL (optional)"
          className="w-full rounded-lg border border-border bg-bg p-3 text-text outline-none focus:border-primary"
        />

        {/* Actions */}
        <div className="flex justify-end gap-3 pt-2">
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg border border-border px-4 py-2 text-muted transition hover:text-text"
          >
            Cancel
          </button>

          <button
            type="submit"
            className="rounded-lg bg-primary px-5 py-2 font-medium text-white transition hover:bg-violet-500"
          >
            Save Resource
          </button>
        </div>
      </form>
    </div>
  );
}
