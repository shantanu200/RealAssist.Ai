import {
  Document,
  View,
  Page,
  Text,
  StyleSheet,
  Image,
} from "@react-pdf/renderer";
import logo from "../assets/logo.jpg";
import ReactPDFChart from "react-pdf-charts";
import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts";
import location from "../assets/location.jpg";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
  },
  chartContainer: {
    marginVertical: 32,
    borderRadius: 16,
    backgroundColor: "#F2F4F5",
  },
  headingContainer: {
    paddingHorizontal: 16,
    backgroundColor: "#E8EEFB",
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    padding: 16,
    color: "#1463FF",
  },
  chart: {
    paddingVertical: 16,
    flexDirection: "row",
    alignItems: "center",
  },
  vLabel: {
    transform: "rotate(-90deg)",
    fontSize: 16,
  },
  chartDiv: {
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    fontSize: 10,
    borderBottomWidth: 2,
    borderBottomColor: "#005DFF",
    padding: 8,
    color: "#090E24",
  },
  footer: {
    position: "absolute",
    bottom: 0,
  },
});

interface PropData {
  apiData: any;
}

const PDFDocument: React.FC<PropData> = ({ apiData }) => {
  return (
    <Document>
      <Page size={"A4"} style={styles.container}>
        <View
          style={{
            position: "relative",
            padding: 16,
            flex: 1,
          }}
        >
          {" "}
          <View style={styles.header}>
            <Image
              style={{
                width: 64,
                height: 16,
              }}
              src={logo}
            />
            <Text
              style={{
                fontWeight: "extrabold",
              }}
            >
              123 Main Street, Dover, NH 03820-4667
            </Text>
          </View>
          <View
            style={{
              flex: 1,
              justifyContent: "center",
            }}
          >
            <View
              style={{
                width: "100%",
                flexDirection: "row",
                alignItems: "center",
                gap: 8,
              }}
            >
              <Image
                src={location}
                style={{
                  width: 16,
                  height: 16,
                }}
              />
              <Text
                style={{
                  fontSize: 12,
                }}
              >
                Crime
              </Text>
              <Text
                style={{
                  borderWidth: 1,
                  flex: 1,
                  borderColor: "#005DFF",
                }}
              ></Text>
            </View>
            <View style={styles.chartContainer}>
              <Text style={styles.headingContainer}>Burglary</Text>
              <View style={styles.chart}>
                <Text style={styles.vLabel}>Arrest</Text>
                <ReactPDFChart style={styles.chartDiv}>
                  <LineChart
                    data={apiData}
                    height={200}
                    width={500}
                    style={{
                      padding: 16,
                    }}
                  >
                    <XAxis dataKey="data_year" />
                    <YAxis />
                    <CartesianGrid
                      stroke="#eee"
                      strokeDasharray="5"
                      vertical={false}
                    />
                    <Line type="linear" dataKey="Burglary" stroke="#8884d8" />
                  </LineChart>
                </ReactPDFChart>
              </View>
            </View>
          </View>
          <View
            style={{
              position: "absolute",
              bottom: 0,
              width: "100%",
              marginHorizontal: 8,
              borderTopWidth: 2,
              paddingVertical: 16,
              flexDirection: "row",
              justifyContent: "space-between",
              borderTopColor: "#005DFF",
            }}
          >
            <Text
              style={{
                color: "#1463FF",
                fontSize: 10,
              }}
            >
              Report Genereted on September 26, 2023
            </Text>
            <Text
              style={{
                color: "#090E24",
                fontSize: 10,
              }}
            >
              RealAssist Property Report | Page 1 of 25
            </Text>
          </View>
        </View>
      </Page>
    </Document>
  );
};

export default PDFDocument;
