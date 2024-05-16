import React from 'react';
// import Errorpng from "../../assets/png/pagenotfound.png";
const PageNotFound = (props) => {
    return (
      <section>
        <div class="bg-black text-white">
          <div class="flex h-screen">
            <div class="m-auto text-center">
              <div>
              <img
                  src={null}
                  alt={"logo"}
                  className="Errorpng"
                  style={{ height: "auto" }}
                />
              </div>
           
              <a
                href="/"
                class="bg-transparent hover:bg-cyan-300 text-cyan-300 hover:text-white rounded shadow hover:shadow-lg py-2 px-4 border border-cyan-300 hover:border-transparent"
              >
                <h3> Go Back To Login</h3>
               
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  };
  export default PageNotFound;
  