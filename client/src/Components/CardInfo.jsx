import { useLocation, Link } from "react-router-dom";

const CardInfo = () => {
  const location = useLocation();
  const characterDetails = location.state;

  const heightInMeters = (characterDetails.height / 100).toFixed(2);
  const creationDate = new Date(characterDetails.created).toLocaleDateString("en-GB");

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navigation Bar */}
      <nav className="bg-gray-800 p-4">
        <div className="flex justify-between items-center">
          <div className="text-yellow-400 font-bold text-2xl">
          {characterDetails.name}
          </div>
          <div>
            <Link
              to="/"
              className="text-yellow-400 text-lg font-semibold"
            >
              Home
            </Link>
           
          </div>
        </div>
      </nav>

      {/* Character Info Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-10 p-8">
        <div>
          <img
            className="rounded-lg shadow-lg transition-transform transform hover:scale-105 w-full max-w-xs mx-auto"
            src="https://i.pinimg.com/736x/9c/39/cd/9c39cd9fce66e667eb00343c32dc4cec.jpg"
            alt={characterDetails.name}
          />
        </div>

        <div>
          <h2 className="text-4xl font-bold mb-4 text-yellow-400">
            {characterDetails.name}
          </h2>
          <div className="grid grid-cols-2 gap-4 text-gray-300">
            <div>
              <p>
                <span className="font-bold text-yellow-400">Height:</span> {heightInMeters}m
              </p>
              <p>
                <span className="font-bold text-yellow-400">Mass:</span> {characterDetails.mass} kg
              </p>
              <p>
                <span className="font-bold text-yellow-400">Birth Date:</span> {creationDate}
              </p>
            </div>
            <div>
              <p>
                <span className="font-bold text-yellow-400">Number of Films:</span> {characterDetails.films.length}
              </p>
              <p>
                <span className="font-bold text-yellow-400">Birth Year:</span> {characterDetails.birth_year}
              </p>
            </div>
          </div>
         
        </div>
      </section>
    </div>
  );
};

export default CardInfo;
