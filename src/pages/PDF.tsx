import { PDFViewer, StyleSheet } from "@react-pdf/renderer";
import React, { useEffect, useState } from "react";
import PDFDocument from "../components/PDFDocument";
import axios from "axios";
import { useLocation } from "react-router-dom";

const styles = StyleSheet.create({
  viewer: {
    height: window.innerHeight,
    width: window.innerWidth * 0.8,
  },
});

const PDF: React.FC = () => {
  const location = useLocation();
  const [apiData, setAPIData] = useState();
  const [loading, setLoading] = useState<boolean>(false);

  const start = location.pathname.split("/")[2];
  const end = location.pathname.split("/")[3];

  console.log(start, end);

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const { data, status } = await axios.get(
          `https://api.usa.gov/crime/fbi/cde/arrest/state/AK/all?from=${start}&to=${end}&API_KEY=iiHnOKfno2Mgkt5AynpvPpUQTEyxE77jo1RU8PIv`,
        );

        if (status === 200) {
          setLoading(false);
          setAPIData(data?.data);
        }
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);

  if (loading)
    return (
      <h2>
        Please be patient, we're weaving your words and graphs into a digital
        masterpiece .....
      </h2>
    );
  return (
    <main
      style={{
        height: "100vh",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <PDFViewer style={styles.viewer}>
        <PDFDocument apiData={apiData} />
      </PDFViewer>
    </main>
  );
};

export default PDF;
