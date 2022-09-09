import React from 'react';

const Footer = () => {
    const date = new Date();
    let year = date.getFullYear();
    return (
        <div>

            <footer class="bg-dark text-center text-white">

                <div class="container p-4 pb-0">

                    <section class="mb-4">

                        <a class="btn btn-outline-light btn-floating m-1" href="https://www.facebook.com/shuvo006Shabbir" role="button"
                        ><i class="fab fa-facebook-f"></i></a>


                        <a class="btn btn-outline-light btn-floating m-1" href="https://twitter.com/shabbirahmedshuvo" role="button"
                        ><i class="fab fa-twitter"></i></a>


                        <a class="btn btn-outline-light btn-floating m-1" href="sabbirshuvo006@gmail.com" role="button"
                        ><i class="fab fa-google"></i></a>


                        <a class="btn btn-outline-light btn-floating m-1" href="https://www.instagram.com/dreamless_boy_shuvo/" role="button"
                        ><i class="fab fa-instagram"></i></a>


                        <a class="btn btn-outline-light btn-floating m-1" href="https://www.linkedin.com/in/shabbir-ahmed-shuvo/" role="button"
                        ><i class="fab fa-linkedin-in"></i></a>


                        <a class="btn btn-outline-light btn-floating m-1" href="https://github.com/shabbirahmedshuvo01" role="button"
                        ><i class="fab fa-github"></i></a>
                    </section>

                </div>
                <div class="text-center p-3">
                    © {year} Copyright: <a class="text-white" href="/">Shabbir Ahmed Shuvo</a>
                </div>

            </footer>

        </div>
    );
};

export default Footer;