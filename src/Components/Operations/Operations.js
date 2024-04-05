import React from 'react'
import "./Operations.css"
import op1 from "../../assets/research.jpg"
import op2 from "../../assets/design.avif"
import op3 from "../../assets/develop.jpg"
import op4 from "../../assets/deploy.jpg"
import op5 from "../../assets/Marketing consulting-pana (1).png";

const Operations = () => {
  return (
    <div className="operations">
      <h2>Dynamic Workflow Ensemble</h2>
      <p>
        Seamlessly integrating technology and teamwork, maximizes efficiency and
        precision for unparalleled results
      </p>
      <div
        className="diagram"
        style={{ width: 969, height: 309, position: "relative" }}
      >
        <div
          style={{
            width: 175,
            height: 176,
            left: 80,
            top: 11,
            position: "absolute",
          }}
        >
          <div
            style={{
              width: 175,
              height: 165,
              left: 0,
              top: 11,
              position: "absolute",
              borderRadius: 9999,
              backgroundColor: "white",
              boxShadow: "rgba(100, 100, 111, 0.2)0px 7px 29px 0px",
            }}
          />
          <img
            style={{
              width: 150,
              height: 141,
              left: 12,
              top: 24,
              position: "absolute",
              borderRadius: 9999,
              boxShadow: "rgba(100, 100, 111, 0.4)0px 7px 29px 0px",
            }}
            alt=""
            src={op1}
          />
          <div
            style={{
              width: 36,
              height: 33,
              left: 69,
              top: 0,
              position: "absolute",
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "flex-start",
              gap: 10,
              display: "inline-flex",
            }}
          >
            <div
              style={{
                width: 36,
                height: 33,
                backgroundColor: "#70bf29",
                boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                borderRadius: 9999,
              }}
            />
            <div
              style={{
                left: 13,
                top: 4,
                position: "absolute",
                color: "white",
                fontSize: 20,
                fontFamily: "Inter",
                fontWeight: "400",
                wordWrap: "break-word",
              }}
            >
              1
            </div>
          </div>
        </div>
        <div
          style={{
            width: 343,
            height: 86,
            left: 140,
            top: 200,
            position: "absolute",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            gap: 10,
            display: "inline-flex",
          }}
        >
          <div
            style={{
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "center",
              gap: 14,
              display: "flex",
            }}
          >
            <div
              style={{
                color: "black",
                fontSize: 20,
                fontFamily: "Inter",
                fontWeight: "bold",
                wordWrap: "break-word",
              }}
            >
              Research
            </div>
            {/* <div
              style={{
                color: "gray",
                fontSize: 20,
                fontFamily: "Inter",
                fontWeight: "400",
                wordWrap: "break-word",
              }}
            >
              Utilize online market analysis tools and stakeholder feedback
              <br />
              to inform project objectives and strategy.
            </div> */}
          </div>
        </div>
        <div
          style={{
            width: 175,
            height: 176,
            left: 300,
            top: 133,
            position: "absolute",
          }}
        >
          <div
            style={{
              width: 175,
              height: 165,
              left: 0,
              top: 11,
              position: "absolute",
              background: "white",
              borderRadius: 9999,
              boxShadow: "rgba(100, 100, 111, 0.4)0px 7px 29px 0px",
            }}
          />
          <img
            style={{
              width: 150,
              height: 141,
              left: 12,
              top: 21,
              position: "absolute",
              borderRadius: 9999,
              boxShadow: "rgba(100, 100, 111, 0.4)0px 7px 29px 0px",
            }}
            alt=""
            src={op2}
          />
          <div
            style={{
              width: 36,
              height: 33,
              left: 69,
              top: 0,
              position: "absolute",
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "flex-start",
              gap: 10,
              display: "inline-flex",
            }}
          >
            <div
              style={{
                width: 36,
                height: 33,
                backgroundColor: "#70bf29",
                boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                borderRadius: 9999,
              }}
            />
            <div
              style={{
                left: 13,
                top: 4,
                position: "absolute",
                color: "white",
                fontSize: 20,
                fontFamily: "Inter",
                fontWeight: "400",
                wordWrap: "break-word",
              }}
            >
              2
            </div>
          </div>
        </div>
        <div
          style={{
            width: 343,
            height: 86,
            right:260,
            top: 325,
            position: "absolute",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            gap: 10,
            display: "inline-flex",
          }}
        >
          <div
            style={{
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "center",
              gap: 14,
              display: "flex",
            }}
          >
            <div
              style={{
                color: "black",
                fontSize: 20,
                fontFamily: "Inter",
                fontWeight: "bold",
                wordWrap: "break-word",
              }}
            >
              Design
            </div>
          </div>
        </div>
        <div
          style={{
            width: 175,
            height: 176,
            left: 520,
            top: 11,
            position: "absolute",
          }}
        >
          <div
            style={{
              width: 175,
              height: 165,
              left: 0,
              top: 11,
              position: "absolute",
              background: "white",
              borderRadius: 9999,
              boxShadow: "rgba(100, 100, 111, 0.4)0px 7px 29px 0px",
            }}
          />
          <img
            style={{
              width: 150,
              height: 141,
              left: 12,
              top: 21,
              position: "absolute",
              borderRadius: 9999,
              boxShadow: "rgba(100, 100, 111, 0.4)0px 7px 29px 0px",
            }}
            alt=""
            src={op3}
          />
          <div
            style={{
              width: 36,
              height: 33,
              left: 69,
              top: 0,
              position: "absolute",
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "flex-start",
              gap: 10,
              display: "inline-flex",
            }}
          >
            <div
              style={{
                width: 36,
                height: 33,
                background: "#70bf29",
                boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                borderRadius: 9999,
              }}
            />
            <div
              style={{
                left: 13,
                top: 4,
                position: "absolute",
                color: "white",
                fontSize: 20,
                fontFamily: "Inter",
                fontWeight: "400",
                wordWrap: "break-word",
              }}
            >
              3
            </div>
          </div>
        </div>
        <div
          style={{
            width: 343,
            height: 86,
            right: 70,
            top: 205,
            position: "absolute",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            gap: 10,
            display: "inline-flex",
          }}
        >
          <div
            style={{
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "center",
              gap: 14,
              display: "flex",
            }}
          >
            <div
              style={{
                color: "black",
                fontSize: 20,
                fontFamily: "Inter",
                fontWeight: "bold",
                wordWrap: "break-word",
              }}
            >
              Development
            </div>
          </div>
        </div>
        <div
          style={{
            width: 175,
            height: 176,
            left: 750,
            top: 130,
            position: "absolute",
          }}
        >
          <div
            style={{
              width: 175,
              height: 165,
              left: 0,
              top: 11,
              position: "absolute",
              background: "white",
              borderRadius: 9999,
              boxShadow: "rgba(100, 100, 111, 0.4)0px 7px 29px 0px",
            }}
          />
          <img
            style={{
              width: 150,
              height: 141,
              left: 12,
              top: 21,
              position: "absolute",
              borderRadius: 9999,
              boxShadow: "rgba(100, 100, 111, 0.4)0px 7px 29px 0px",
            }}
            alt=""
            src={op4}
          />
          <div
            style={{
              width: 36,
              height: 33,
              left: 69,
              top: 0,
              position: "absolute",
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "flex-start",
              gap: 10,
              display: "inline-flex",
            }}
          >
            <div
              style={{
                width: 36,
                height: 33,
                background: "#70bf29",
                boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                borderRadius: 9999,
              }}
            />
            <div
              style={{
                left: 13,
                top: 4,
                position: "absolute",
                color: "white",
                fontSize: 20,
                fontFamily: "Inter",
                fontWeight: "400",
                wordWrap: "break-word",
              }}
            >
              4
            </div>
          </div>
        </div>
        <div
          style={{
            width: 343,
            height: 86,
            right: -160,
            top: 325,
            position: "absolute",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            gap: 10,
            display: "inline-flex",
          }}
        >
          <div
            style={{
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "center",
              gap: 14,
              display: "flex",
            }}
          >
            <div
              style={{
                color: "black",
                fontSize: 20,
                fontFamily: "Inter",
                fontWeight: "bold",
                wordWrap: "break-word",
              }}
            >
              Deployment
            </div>
          </div>
        </div>
        <div
          style={{
            width: 175,
            height: 176,
            left: 1000,
            top: 30,
            position: "absolute",
          }}
        >
          <div
            style={{
              width: 175,
              height: 165,
              left: 0,
              top: 11,
              position: "absolute",
              background: "white",
              borderRadius: 9999,
              boxShadow: "rgba(100, 100, 111, 0.4)0px 7px 29px 0px",
            }}
          />
          <img
            style={{
              width: 150,
              height: 141,
              left: 12,
              top: 21,
              position: "absolute",
              borderRadius: 9999,
              boxShadow: "rgba(100, 100, 111, 0.4)0px 7px 29px 0px",
            }}
            alt=""
            src={op5}
          />
          <div
            style={{
              width: 36,
              height: 33,
              left: 69,
              top: 0,
              position: "absolute",
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "flex-start",
              gap: 10,
              display: "inline-flex",
            }}
          >
            <div
              style={{
                width: 36,
                height: 33,
                background: "#70bf29",
                boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                borderRadius: 9999,
              }}
            />
            <div
              style={{
                left: 13,
                top: 4,
                position: "absolute",
                color: "white",
                fontSize: 20,
                fontFamily: "Inter",
                fontWeight: "400",
                wordWrap: "break-word",
              }}
            >
              5
            </div>
          </div>
        </div>
        <div
          style={{
            width: 343,
            height: 86,
            right: -420,
            top: 230,
            position: "absolute",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            gap: 10,
            display: "inline-flex",
          }}
        >
          <div
            style={{
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "center",
              gap: 14,
              display: "flex",
            }}
          >
            <div
              style={{
                color: "black",
                fontSize: 20,
                fontFamily: "Inter",
                fontWeight: "bold",
                wordWrap: "break-word",
              }}
            >
              Maintenance
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Operations;