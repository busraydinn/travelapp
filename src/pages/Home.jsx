import Card from "../components/Card";
import cityData from "../utils/Cities.json";

const Home = () => {
  return (
    <main className="min-h-screen px-10 py-10">
        <h1 className="mb-8 text-4xl font-bold">
        🌍 Dünyayı Keşfet
      </h1>
      <section className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {cityData.map((city) => (
          <Card
            key={city.id}
            id={city.id}
            photo={city.image}
            name={city.name}
            rating={city.rating}
            tags={city.tags}
            description={city.description}
          />
        ))}
      </section>
    </main>
  );
};

export default Home;