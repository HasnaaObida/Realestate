import Image from "next/image";

type Property = {
  id: number;
  title: string;
  price: string;
  location: string;
  image: string;
};

type Props = {
  properties: Property[];
};

export default function PropertiesSection({ properties }: Props) {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      {/* Section Header */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900">
          Explore Our Latest Properties
        </h2>
        <p className="text-gray-600 mt-2">
          Find your dream home from our curated listings.
        </p>
      </div>

      {/* Properties Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {properties.map((p) => (
          <div
            key={p.id}
            className="bg-white rounded-2xl shadow-md hover:shadow-lg transition overflow-hidden"
          >
            {/* Image */}
            <div className="relative w-full h-56">
              <Image
                src={p.image}
                alt={p.title}
                fill
                className="object-cover"
              />
            </div>

            {/* Info */}
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-1">
                {p.title}
              </h3>
              <p className="text-yellow-500 font-bold text-lg mb-2">
                {p.price}
              </p>
              <p className="text-gray-500 text-sm">{p.location}</p>
            </div>

            {/* CTA */}
            <div className="px-6 pb-6">
              <a
                href={`/properties/${p.id}`}
                className="block text-center bg-yellow-500 text-white font-semibold py-2 rounded-lg hover:bg-yellow-600 transition"
              >
                View Details
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
