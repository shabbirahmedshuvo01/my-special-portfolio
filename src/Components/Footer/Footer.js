import React from 'react';

const Footer = () => {
    const date = new Date();
    let year = date.getFullYear();
    return (
        <div>

            <footer className="bg-dark text-center text-white">

                <div className="container p-4 pb-0">

                    <section className="mb-4">

                        <a className="btn btn-outline-light btn-floating m-1" href="https://www.facebook.com/shuvo006Shabbir" role="button"
                        ><i className="fab fa-facebook-f"></i></a>


                        <a className="btn btn-outline-light btn-floating m-1" href="https://twitter.com/shabbirahmedshuvo" role="button"
                        ><i className="fab fa-twitter"></i></a>


                        <a className="btn btn-outline-light btn-floating m-1" href="sabbirshuvo006@gmail.com" role="button"
                        ><i className="fab fa-google"></i></a>


                        <a className="btn btn-outline-light btn-floating m-1" href="https://www.instagram.com/dreamless_boy_shuvo/" role="button"
                        ><i className="fab fa-instagram"></i></a>


                        <a className="btn btn-outline-light btn-floating m-1" href="https://www.linkedin.com/in/shabbir-ahmed-shuvo/" role="button"
                        ><i className="fab fa-linkedin-in"></i></a>


                        <a className="btn btn-outline-light btn-floating m-1" href="https://github.com/shabbirahmedshuvo01" role="button"
                        ><i className="fab fa-github"></i></a>
                    </section>

                </div>
                <div className="text-center p-3">
                    © {year} Copyright: <a className="text-white" href="/">Shabbir Ahmed Shuvo</a>
                </div>

            </footer>

        </div>
    );
};

export default Footer;