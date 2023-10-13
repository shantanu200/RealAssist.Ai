import { useNavigate } from "react-router-dom";
import { AiFillPrinter } from "react-icons/ai";
import { useState } from "react";

const Home: React.FC = () => {
  const navigate = useNavigate();
  const [start, setStart] = useState<number>(2015);
  const [end, setEnd] = useState<number>(2015);
  return (
    <main
      style={{
        minHeight: "100vh",
        height: "100%",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: 32,
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 32,
          width: "80%",
        }}
      >
        <div
          style={{
            width: "20%",
          }}
        >
          <p>Start Year</p>
          <select
            style={{
              padding: "1rem",
              fontSize: "1.5rem",
              width: "100%",
              background: "#fff",
              borderRadius: ".5rem",
              border: "1px solid #000",
            }}
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
              setStart(Number(e.target.value))
            }
          >
            <option value={2015}>2015</option>
            <option value={2016}>2016</option>
            <option value={2017}>2017</option>
            <option value={2018}>2018</option>
            <option value={2019}>2019</option>
            <option value={2020}>2020</option>
            <option value={2021}>2021</option>
            <option value={2022}>2022</option>
            <option value={2023}>2023</option>
          </select>
        </div>
        <div
          style={{
            width: "20%",
          }}
        >
          <p>End Year</p>
          <select
            style={{
              padding: "1rem",
              fontSize: "1.5rem",
              background: "#fff",
              width: "100%",
              borderRadius: ".5rem",
              border: "1px solid #000",
            }}
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
              setEnd(Number(e.target.value))
            }
          >
            <option value={2015}>2015</option>
            <option value={2016}>2016</option>
            <option value={2017}>2017</option>
            <option value={2018}>2018</option>
            <option value={2019}>2019</option>
            <option value={2020}>2020</option>
            <option value={2021}>2021</option>
            <option value={2022}>2022</option>
            <option value={2023}>2023</option>
          </select>
        </div>
        <div>
          <button
            style={{
              padding: "1rem 2rem",
              background: "#000",
              color: "#fff",
              outline: "none",
              fontSize: "1.5rem",
              borderRadius: "1rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "1rem",
            }}
            onClick={() => {
              if (start >= end) {
                alert("Please select Start year smaller than End year");
                return;
              } else {
                navigate(`/pdf/${start}/${end}`);
              }
            }}
          >
            <AiFillPrinter />
            Print
          </button>
        </div>
      </div>
    </main>
  );
};

export default Home;
