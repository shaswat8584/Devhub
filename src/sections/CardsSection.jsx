// import React from "react";
// import Cards from "../components/Cards";
// import details from "../data/data";

// const CardsSection = () => {
//   const cards = details.map((resource) => (
//     <Cards key={resource.id} resource={resource} />
//   ));
//   return (
//     <>
//       <section className="flex min-h-screen items-center overflow-hidden mt-32 bg-bg">
//         <div className="mx-auto max-w-7xl px-6 sm:px-8">
//           <div className="grid grid-cols-2 gap-6 md:grid-cols-3">{cards}</div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default CardsSection;
import details from "../data/data";
import Cards from "../components/Cards";
import Animated from "../components/Animated";

export default function CardsSection() {
  return (
    <section className="bg-bg px-6 py-16">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {details.map((resource) => (
            <Animated delay={0.4} className="text-center">
              <Cards key={resource.id} resource={resource} />
            </Animated>
          ))}
        </div>
      </div>
    </section>
  );
}
