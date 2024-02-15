import { Link } from "react-router-dom";

function  Table(){
    return(

<table
  cellSpacing={0}
  cellPadding={0}
  border={0}
  width="100%"
  style={{ backgroundColor: "#eaeaea", fontFamily: "Arial, sans-serif" }}
>
  <tbody>
    <tr>
      <td align="center">
        <table
          cellSpacing={0}
          cellPadding={0}
          border={0}
          width="100%"
          style={{
            backgroundColor: "#fff",
            borderRadius: 10,
            padding: 0,
            border: "0px solid #ccc",
            maxWidth: 680,
            margin: "15px auto 0"
          }}
        >
          {/*Row1(Logo)*/}
          <tbody>
            <tr>
              <td style={{ textAlign: "center", padding: "5px 15px" }}>
                <img src="https://demo66.tutiixx.com/wp-content/uploads/2019/10/unnamed.png" />
              </td>
            </tr>
          </tbody>
        </table>
        <table
          cellSpacing={0}
          cellPadding={0}
          border={0}
          width="100%"
          style={{
            padding: "10px 0px",
            border: "0px solid #ccc",
            maxWidth: 680,
            margin: "0 auto"
          }}
        >
          <tbody>
            <tr>
              <td style={{ width: 64, paddingRight: 15 }}>
                <img
                  src="https://demo66.tutiixx.com/wp-content/uploads/2019/10/success-3.png"
                  alt="Success"
                />
              </td>
              <td style={{ fontSize: 18 }}>
                Congratulations! Your booking has been confirmed.
                <p
                  style={{ margin: "10px 0 0", fontSize: 16, fontWeight: 600 }}
                >
                  Booking Id: #3154
                </p>
              </td>
            </tr>
          </tbody>
        </table>
        <table
          cellPadding={0}
          cellSpacing={0}
          width="100%"
          style={{
            border: "0px solid #ccc",
            padding: 15,
            maxWidth: 680,
            margin: "0 auto",
            backgroundColor: "#fff",
            textAlign: "center",
            borderRadius: 10
          }}
        >
          <tbody>
            <tr>
              <td>
                <span style={{ display: "block", marginBottom: 5 }}>From</span>
                <span style={{ fontWeight: 600 }}>30-03-2020</span>
              </td>
              <td>
                <span
                  style={{ display: "block", marginBottom: 5, fontWeight: 600 }}
                >
                  1
                </span>
                <span style={{ fontWeight: 600 }}>Nights</span>
              </td>
              <td>
                <span style={{ display: "block", marginBottom: 5 }}>To</span>
                <span style={{ fontWeight: 600 }}>31-03-2020</span>
              </td>
            </tr>
          </tbody>
        </table>
        <table
          cellPadding={0}
          cellSpacing={0}
          width="100%"
          style={{
            border: "0px solid #ccc",
            padding: "20px 15px",
            maxWidth: 680,
            margin: "0 auto",
            backgroundColor: "#fff",
            borderRadius: 10,
            marginTop: 5,
            marginBottom: 15
          }}
        >
          <tbody>
            <tr>
              <td colSpan={2}>
                <h4 style={{ fontSize: 25, margin: "0 0 5px" }}>
                  Hotel TAP Paradise
                </h4>
                <p style={{ margin: 0, fontSize: 16, color: "#666" }}>
                  B-15, Xyz Street, Jaipur
                </p>
              </td>
              <td colSpan={1} style={{ textAlign: "right" }}>
                <img src="https://s3.amazonaws.com/ethotels/OTAD_48417_1_4841_48417_images_12-27-2011_3-24-33_PM_tn.jpg" />
              </td>
            </tr>
            <tr>
              <td colSpan={3}>
                <br />
                <br />
              </td>
            </tr>
            <tr>
              <td
                style={{
                  boxShadow:
                    "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)",
                  padding: 10,
                  textAlign: "center",
                  width: "33.33%",
                  marginTop: 25
                }}
              >
                <span
                  style={{
                    display: "block",
                    fontWeight: 600,
                    marginBottom: 10
                  }}
                >
                  Rooms
                </span>
                <span>2</span>
              </td>
              <td
                style={{
                  boxShadow:
                    "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)",
                  padding: 10,
                  textAlign: "center",
                  width: "33.33%",
                  marginTop: 25,
                  backgroundColor: "#eaeaea"
                }}
              >
                <span
                  style={{
                    display: "block",
                    fontWeight: 600,
                    marginBottom: 10
                  }}
                >
                  Guests
                </span>
                <span>2</span>
              </td>
              <td
                style={{
                  boxShadow:
                    "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)",
                  padding: 10,
                  textAlign: "center",
                  width: "33.33%",
                  marginTop: 25
                }}
              >
                <span
                  style={{
                    display: "block",
                    fontWeight: 600,
                    marginBottom: 10
                  }}
                >
                  Price
                </span>
                <span style={{ fontWeight: 600 }}>₹ 8675</span>
              </td>
            </tr>
            <tr>
              <td colSpan={3}>
                <br />
              </td>
            </tr>
            {/*Row(Passenger Details)*/}
            <tr>
              <td colSpan={3}>
                <h4
                  style={{
                    color: "#1b2b47",
                    fontSize: 20,
                    padding: "0 15px",
                    marginBottom: 5
                  }}
                >
                  Passenger Details
                </h4>
              </td>
            </tr>
            {/*Row(Booking Table)*/}
            <tr>
              <td colSpan={3} style={{ padding: 0 }}>
                <table
                  cellPadding={0}
                  cellSpacing={0}
                  width="100%"
                  style={{ border: "1px solid #ccc", borderBottom: 0 }}
                >
                  <tbody>
                    <tr>
                      <td
                        style={{
                          padding: "10px 15px",
                          fontWeight: 600,
                          borderRight: "1px solid #ccc",
                          borderBottom: "1px solid #ccc",
                          fontSize: 16
                        }}
                      >
                        Guest Name
                      </td>
                      <td
                        style={{
                          padding: "10px 15px",
                          fontWeight: 600,
                          borderRight: "1px solid #ccc",
                          borderBottom: "1px solid #ccc",
                          fontSize: 16
                        }}
                      >
                        Age
                      </td>
                      <td
                        style={{
                          padding: "10px 15px",
                          fontWeight: 600,
                          fontSize: 16,
                          borderBottom: "1px solid #ccc"
                        }}
                      >
                        Gender
                      </td>
                    </tr>
                    <tr>
                      <td
                        style={{
                          padding: "20px 15px 15px",
                          borderRight: "1px solid #ccc",
                          borderBottom: "1px solid #ccc"
                        }}
                      >
                        Nadeem Ahmad
                      </td>
                      <td
                        style={{
                          padding: "20px 15px 15px",
                          borderRight: "1px solid #ccc",
                          borderBottom: "1px solid #ccc"
                        }}
                      >
                        20
                      </td>
                      <td
                        style={{
                          padding: "20px 15px 15px",
                          borderBottom: "1px solid #ccc"
                        }}
                      >
                        Male
                      </td>
                    </tr>
                    <tr>
                      <td
                        style={{
                          padding: "20px 15px 15px",
                          borderRight: "1px solid #ccc",
                          borderBottom: "1px solid #ccc"
                        }}
                      >
                        Rahul Singh
                      </td>
                      <td
                        style={{
                          padding: "20px 15px 15px",
                          borderRight: "1px solid #ccc",
                          borderBottom: "1px solid #ccc"
                        }}
                      >
                        27
                      </td>
                      <td
                        style={{
                          padding: "20px 15px 15px",
                          borderBottom: "1px solid #ccc"
                        }}
                      >
                        Female
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
            {/*Row9(Fare Details)*/}
            <tr>
              <td colSpan={3}>
                <h4
                  style={{
                    color: "#1b2b47",
                    fontSize: 20,
                    padding: "0 15px",
                    marginBottom: 5
                  }}
                >
                  Fare Summary
                </h4>
              </td>
            </tr>
            {/*Row10(Fare Details Table)*/}
            <tr>
              <td colSpan={3}>
                <table
                  cellPadding={0}
                  cellSpacing={0}
                  border={0}
                  width="100%"
                  style={{
                    border: "1px solid #ccc",
                    borderRight: 0,
                    borderLeft: 0
                  }}
                >
                  <tbody>
                    <tr>
                      <td
                        style={{
                          padding: 15,
                          fontWeight: 600,
                          borderRight: "1px solid #ccc",
                          borderBottom: "1px solid #ccc"
                        }}
                      >
                        Convenience Fee
                      </td>
                      <td
                        style={{ padding: 15, borderBottom: "1px solid #ccc" }}
                      >
                        0
                      </td>
                    </tr>
                    <tr>
                      <td
                        style={{
                          padding: 15,
                          fontWeight: 600,
                          borderRight: "1px solid #ccc",
                          borderBottom: "1px solid #ccc"
                        }}
                      >
                        Taxes and Fees
                      </td>
                      <td
                        style={{ padding: 15, borderBottom: "1px solid #ccc" }}
                      >
                        0
                      </td>
                    </tr>
                    <tr>
                      <td
                        style={{
                          padding: 15,
                          fontWeight: 600,
                          borderRight: "1px solid #ccc",
                          borderBottom: "1px solid #ccc"
                        }}
                      >
                        Extra Guest Charge
                      </td>
                      <td
                        style={{ padding: 15, borderBottom: "1px solid #ccc" }}
                      >
                        8180
                      </td>
                    </tr>
                    <tr>
                      <td
                        style={{
                          padding: 15,
                          fontWeight: 600,
                          borderRight: "1px solid #fff",
                          backgroundColor: "#b5d0fd"
                        }}
                      >
                        Total Fare
                      </td>
                      <td
                        style={{
                          padding: 15,
                          fontWeight: 600,
                          fontSize: 18,
                          backgroundColor: "#b5d0fd"
                        }}
                      >
                        ₹ 8180
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
            {/*Row(Support Details)*/}
            <tr>
              <td colSpan={3}>
                <h4
                  style={{
                    color: "#1b2b47",
                    fontSize: 20,
                    padding: "0 15px",
                    marginBottom: 5
                  }}
                >
                  Support Details
                </h4>
              </td>
            </tr>
            {/*Row(Support Details Table)*/}
            <tr>
              <td colSpan={3}>
                <table
                  cellSpacing={0}
                  cellPadding={0}
                  border={0}
                  width="100%"
                  style={{
                    border: "1px solid #ccc",
                    borderRight: 0,
                    borderLeft: 0
                  }}
                >
                  <tbody>
                    <tr>
                      <td
                        style={{ padding: 15, borderRight: "1px solid #ccc" }}
                      >
                        <h5 style={{ fontSize: 18, margin: "0 0 10px" }}>
                          Office Address:
                        </h5>
                        <span style={{ lineHeight: "1.5", display: "block" }}>
                          B-12, Xyz Street,
                          <br />
                          New Delhi-110027
                        </span>
                      </td>
                      <td style={{ padding: 15 }}>
                        <h5 style={{ fontSize: 18, margin: "0 0 5px" }}>
                          Phone:
                        </h5>
                        <span
                          style={{
                            lineHeight: "1.5",
                            display: "block",
                            marginBottom: 10
                          }}
                        >
                          82372837828
                        </span>
                        <h5 style={{ fontSize: 18, margin: "0 0 5px" }}>
                          Email:
                        </h5>
                        <span style={{ lineHeight: "1.5", display: "block" }}>
                          <a href="mailto:support@tripdesire.com">
                            support@tripdesire.com
                          </a>
                        </span>
                        <Link to="/userhome"><button>Cancel</button></Link>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
            {/*Row(Note Content)*/}
            <tr>
              <td
                colSpan={3}
                style={{
                  padding: "15px 15px 0",
                  color: "#666",
                  lineHeight: "1.5"
                }}
              >
                Note: This is a system generated mail and does not require
                signature/stamp. Please do not reply to this mail.
              </td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
  </tbody>
</table>
    )
            }
            export default Table;
