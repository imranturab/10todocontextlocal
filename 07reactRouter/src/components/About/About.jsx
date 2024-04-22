import React from 'react'




export default function About() {
  return (
      <div className="py-16 bg-white">
          <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
              <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                  <div className="md:5/12 lg:w-5/12">
                      <img
                          src="atcy.png"
                          alt="image"
                      />
                  </div>
                  <div className="md:7/12 lg:w-6/12">
                      <h2 className="text-3xl text-gray-900 font-bold md:text-4xl">
                          Jamia Tul Madina <br /> Attock <br/>
                          (DawateIslami)
                      </h2>
                      <p className="mt-6 text-gray-600">
                      <img
                          src="banner1.jpg"
                          alt="image"
                      />
                      </p>
                      <p className="mt- text-gray-600">
                      <img
                          src="intor.jpg"
                          alt="image2"
                      />
                      </p>
            <div>
                            <button type="submit"> </button>
                        
                            <li className="md:w-62 bg-green-700 hover:bg-blue-dark text-white font-bold py-3 px-6 rounded-lg mt-3 hover:bg-orange-600 transition ease-in-out duration-300">
                                    <a
                                        href="https://jamiatulmadinahusa.com/forms.php"
                                        className="hover:underline"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        Apply Now
                                    </a>
                                </li>
            </div>

           
                  </div>
              </div>
          </div>
      </div>
  );
}