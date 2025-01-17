import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Components/Card";
import toast from 'react-hot-toast';
import { useNavigate } from "react-router-dom";
import { Toaster } from 'react-hot-toast';

const App = () => {
  const [data, setData] = useState([]);
  const [pagenationNum, setpagenationNum] = useState(1);
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
 

  const handleClick = (e) => {
    const selectedCharacter = data.find((star) => star.name === e.target.value);
    if (selectedCharacter) {
      navigate(`/detail/${e.target.value}`, {
        state: selectedCharacter,
      });
    }
  };
  useEffect(() => {
    const fetchStarWars = async () => {
      setLoading(true);
      try {
        const res = await axios.get(
          `http://localhost:8080/api/people/?page=` + pagenationNum
        );
        setCount(res.data.data.count);
        setData(res.data.data.results);
        toast.success(res.data.message);
      } catch (error) {
       if (error.response) {
          setErrorMessage(
            error.response.data?.message
         );
          toast.error(error.response.data?.message);
        } else if (error.request) {
          setErrorMessage("Unable to reach the server. Please try again later.");
          toast.error("Server unreachable. Please check your connection.");
       } else {
          setErrorMessage("An unexpected error occurred.");
          toast.error("An unexpected error occurred.");
        }
        
      } finally {
        setLoading(false);
      }
    };
    fetchStarWars();
  }, [pagenationNum]);
  const handlePagenation = (pageNum) => {
    setpagenationNum(pageNum);
  };

  return (
    <>
      <div>
      <Toaster />
        {loading ? (
         <div className="flex items-center justify-center h-screen">
         <p className="text-xl font-semibold text-gray-700 animate-pulse">
           Fetching...
         </p>
       </div>
        ) : errorMessage ? (
          <div className="flex items-center justify-center h-screen">
            <div className="text-center">
              <p className="text-2xl text-red-600 font-semibold">{errorMessage}</p>
              <button
                onClick={() => window.location.reload()}
                className="mt-4 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
              >
                Retry
              </button>
            </div>
          </div>
        ) :(
          <div>
            <div className="grid grid-cols-5 gap-4 p-4">
              {data.map((character, index) => (
                <Card
                  key={index}
                  name={character.name}
                  renderExtraProp={
                    <button
                      value={character.name}
                      onClick={handleClick}
                      className="w-full py-2 bg-indigo-500 text-white font-semibold rounded-lg hover:bg-indigo-600 transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-lg"
                    >
                      Details
                    </button>
                  }
                />
              ))}
            </div>
            <div className="flex justify-center items-center mt-4 space-x-2">
  {Array(Math.ceil(count / 10))
    .fill(0)
    .map((e, i) => {
      return (
        <button
          key={i}
          onClick={() => handlePagenation(i + 1)}
          className={`px-4 py-2 rounded-lg text-white bg-indigo-500 hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition-all duration-200 ${
            pagenationNum === i + 1 ? "bg-indigo-700" : ""
          }`}
        >
          {i + 1}
        </button>
      );
    })}
</div>


          </div>
        )}
      </div>
    </>
  );
};

export default App;
