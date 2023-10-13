import { useNavigate } from "react-router-dom";
import { AiFillPrinter } from "react-icons/ai";
import { useState } from "react";
import { yearData } from "../data/data";

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
          width: "50%",
          border: "1px solid black",
          padding: "2rem",
          background: "#000",
          borderRadius: "1rem",
        }}
      >
        <div
          style={{
            borderBottom: "1px solid #fff",
            padding: "2rem",
          }}
        >
          <h1
            style={{
              color: "#fff",
            }}
          >
            Generate RealAssist.AI PDF
          </h1>
        </div>
        <div
          style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "1rem",
            padding: "2rem 0",
          }}
        >
          <div
            style={{
              width: "20%",
              color: "#fff",
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
              {yearData?.map((year, idx) => (
                <option key={idx} value={year}>
                  {year}
                </option>
              ))}
            </select>
          </div>
          <div
            style={{
              width: "20%",
              color: "#fff",
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
              {yearData?.map((year, idx) => (
                <option key={idx} value={year}>
                  {year}
                </option>
              ))}
            </select>
          </div>
          <div
            style={{
              color: "#fff",
            }}
          >
            <p>Action</p>
            <button
              style={{
                padding: "1rem 2rem",
                color: "#000",
                background: "#fff",
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
      </div>
    </main>
  );
};

export default Home;
