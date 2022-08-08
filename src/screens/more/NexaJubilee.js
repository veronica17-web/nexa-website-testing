import { useEffect, useState } from "react";
import { IoArrowForwardCircleSharp } from "react-icons/io5";
import axios from "axios";
import { toast } from "react-toastify";
import { CgSpinner } from "react-icons/cg";

function NexaJubilee() {
  useEffect(() => {
    sessionStorage.setItem("popup", "true");
  }, []);
  const [rating, setRating] = useState(null);
  const [loading, setLoading] = useState(false);
  const [comments, setComments] = useState("");

  async function handleSubmit() {
    setLoading(true);
    try {
      await axios.post("https://saboogroups.com/admin/api/feedback", {
        feedback: rating,
        comments: comments,
        outlet: 1,
      });
      toast.success("Thank you for subscribing");
      setLoading(false);
    } catch (error) {
      toast.error("Something went wrong");
      setLoading(false);
    }
  }

  return (
    <div className="my-16 mx-5">
      <div className="flex items-center justify-between max-w-xl mx-auto">
        <img
          src={require("../../assets/rks_logo.png")}
          className="h-10"
          alt=""
        />
        <img
          src={require("../../assets/jubilee_logo.png")}
          className="h-20"
          alt=""
        />
      </div>
      <div className="border-2 border-gray-400 max-w-xl mx-auto  rounded-3xl p-5">
        <p>
          Based on your experience with our dealership, How likely are you to
          recommend Saboo RKS Nexa Jubilee to your friends, colleagues or
          relatives ?*
        </p>
        <div className="flex items-center justify-between mt-3">
          <p className="text-red-500">Not likely at all</p>
          <p className="text-lime-600">Extremely likely</p>
        </div>
        <div className="flex items-center justify-evenly mt-3">
          <p
            className="bg-red-500 text-white px-2 py-1 rounded-full hover:scale-110 duration-300 text-sm md:px-4 md:py-2.5"
            onClick={() => setRating("0")}
          >
            0
          </p>
          <p
            className="bg-red-500 text-white px-2 py-1 rounded-full hover:scale-110 duration-300 text-sm md:px-4 md:py-2.5"
            onClick={() => setRating("1")}
          >
            1
          </p>
          <p
            className="bg-red-500 text-white px-2 py-1 rounded-full hover:scale-110 duration-300 text-sm md:px-4 md:py-2.5"
            onClick={() => setRating("2")}
          >
            2
          </p>
          <p
            className="bg-red-500 text-white px-2 py-1 rounded-full hover:scale-110 duration-300 text-sm md:px-4 md:py-2.5"
            onClick={() => setRating("3")}
          >
            3
          </p>
          <p
            className="bg-red-500 text-white px-2 py-1 rounded-full hover:scale-110 duration-300 text-sm md:px-4 md:py-2.5"
            onClick={() => setRating("4")}
          >
            4
          </p>
          <p
            className="bg-red-500 text-white px-2 py-1 rounded-full hover:scale-110 duration-300 text-sm md:px-4 md:py-2.5"
            onClick={() => setRating("5")}
          >
            5
          </p>
          <p
            className="bg-red-500 text-white px-2 py-1 rounded-full hover:scale-110 duration-300 text-sm md:px-4 md:py-2.5"
            onClick={() => setRating("6")}
          >
            6
          </p>
          <p
            className="bg-yellow-500 text-white px-2 py-1 rounded-full hover:scale-110 duration-300 text-sm md:px-4 md:py-2.5"
            onClick={() => setRating("7")}
          >
            7
          </p>
          <p
            className="bg-yellow-500 text-white px-2 py-1 rounded-full hover:scale-110 duration-300 text-sm md:px-4 md:py-2.5"
            onClick={() => setRating("8")}
          >
            8
          </p>
          <p
            className="bg-lime-600 text-white px-2 py-1 rounded-full hover:scale-110 duration-300 text-sm md:px-4 md:py-2.5"
            onClick={() => setRating("9")}
          >
            9
          </p>
          <p
            className="bg-lime-600 text-white px-2 py-1 rounded-full hover:scale-110 duration-300 text-sm md:px-4 md:py-2.5"
            onClick={() => setRating("10")}
          >
            10
          </p>
        </div>
        <div
          className={
            rating !== null ? "flex items-start mt-4 space-x-1" : "hidden"
          }
        >
          <IoArrowForwardCircleSharp size={22} />
          <p
            className={
              rating === "0"
                ? "block font-semibold"
                : rating === "1"
                ? "block font-semibold"
                : rating === "2"
                ? "block font-semibold"
                : rating === "3"
                ? "block font-semibold"
                : rating === "4"
                ? "block font-semibold"
                : rating === "5"
                ? "block font-semibold"
                : rating === "6"
                ? "block font-semibold"
                : "hidden"
            }
          >
            Please tell us what went wrong ?*
          </p>
          <p
            className={
              rating === "7"
                ? "block"
                : rating === "8"
                ? "block font-semibold"
                : "hidden"
            }
          >
            Thank your for your response, How can we improve your experience
            with our dealership ?*
          </p>

          <p
            className={
              rating === "9"
                ? "block"
                : rating === "10"
                ? "block font-semibold"
                : "hidden"
            }
          >
            We’re glad you liked the experience, is there anything specific you
            liked ?*
          </p>
        </div>
        {rating !== null ? (
          <textarea
            className="border border-gray-400 rounded p-2 focus:outline-none mt-3 w-full"
            onChange={(e) => setComments(e.target.value)}
          ></textarea>
        ) : (
          ""
        )}
        <button
          type="submit"
          className="bg-red-600 hover:opacity-75 text-white rounded-md px-4 py-1.5 mt-5 mx-auto"
          onClick={handleSubmit}
          disabled={loading === true ? true : false}
        >
          {loading ? (
            <div className="flex items-center justify-center">
              <CgSpinner className="animate-spin h-5 mr-2 text-white w-5" />
              Loading
            </div>
          ) : (
            "SUBMIT"
          )}
        </button>
      </div>
    </div>
  );
}

export default NexaJubilee;
