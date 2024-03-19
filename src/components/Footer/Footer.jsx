/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import React from "react";
import FooterLogo from "../../assets/logo.png";
import { FaGithub, FaWhatsapp, FaLinkedin } from "react-icons/fa";
import { TbPhoneCall } from "react-icons/tb";
import NatureVid from "../../assets/video/footer.mp4";
import { Link } from "react-router-dom";

const FooterLinks = [
    {
        title: "Home",
        link: "/",
    },
    {
        title: "About",
        link: "/about",
    },
    {
        title: "Best Places",
        link: "/best-places",
    },
    {
        title: "Blogs",
        link: "/blogs",
    },
];

const Footer = () => {
    return (
        <>
            <div className="dark:bg-gray-950 relative ">

                <div>
                    <div className="grid md:grid-cols-3 py-5 bg-black/90 ">
                        <div className="py-8 px-2">
                            <h1 className="flex items-center gap-3 text-xl sm:text-3xl font-bold text-justify sm:text-left">
                                <img src={FooterLogo} alt="" className="max-h-[60px]" />

                            </h1>
                            <br />
                            <p className="text-sm text-slate-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Et enim ad laboriosam facilis iusto ducimus esse commodi aperiam voluptas atque fuga qui minima autem molestias explicabo hic, repellat ab accusamus.</p>
                            <br />


                        </div>

                        <div className="grid grid-cols-3 sm:grid-cols-4 col-span-2 md:pl-5 mr-14">
                            <div>
                                <div className="py-8 px-1">
                                    <h1 className="text-xl font-bold text-justify sm:text-left mb-3 text-slate-200">Company</h1>
                                    <div className="flex flex-col gap-3 text-slate-400 gap-3 cursor-pointer">
                                        <p>Blog</p>
                                        <p>Privacy Policy</p>
                                        <p>FAQ's</p>
                                        <p>Contact</p>

                                    </div>
                                </div>
                            </div>

                            <div>
                                <div className="py-8 px-4">
                                    <h1 className="text-xl font-bold text-justify sm:text-left mb-3 text-slate-200">Contact Us</h1>
                                    <div className="flex flex-col gap-3 text-slate-400 gap-3">
                                        <p > F-4/4, Vasant Vihar, New Delhi, Delhi 110057, India</p>
                                        <p>(+91) 1234567890</p>


                                    </div>
                                </div>
                            </div>



                            <div>
                                <div className="py-8 px-4">
                                    <h1 className="text-xl font-bold text-justify sm:text-left mb-3 text-slate-200">Quick Links</h1>
                                    <ul className="flex flex-col gap-3 text-slate-400 cursor-pointer list-none">

                                        <Link to="/">
                                            <li className="cursor-pointer  text-slate-400 list-none">
                                                Home
                                            </li>
                                        </Link>
                                        <Link to="/about">
                                            <li className="cursor-pointer  text-slate-400 list-none">
                                                About
                                            </li>
                                        </Link>
                                        <Link to="/blog">
                                            <li className="cursor-pointer  text-slate-400 list-none">
                                                Blog
                                            </li>
                                        </Link>
                                        <Link to="/best-places">
                                            <li className="cursor-pointer  text-slate-400 list-none">
                                                Best Places
                                            </li>
                                        </Link>


                                    </ul>
                                </div>
                            </div>

                            <div>
                                <div className="py-8 px-1">
                                    <h1 className="text-xl font-bold text-justify sm:text-left mb-3 text-slate-200">Social Share</h1>
                                    <div className="flex flex-col gap-3 text-slate-400 gap-3">
                                        <div>
                                            <div className="flex items-center gap-3 mt-6">
                                                <a href="https://github.com/Nikhilgupta8085">
                                                    <FaGithub className="text-3xl" />
                                                </a>
                                                <a href="https://www.linkedin.com/in/nikhil-gupta-53092023b/">
                                                    <FaLinkedin className="text-3xl" />
                                                </a>

                                                <a href="https://wa.me/8085886381">
                                                    <FaWhatsapp className="text-3xl" />

                                                </a>
                                                <a href="Tel: 8085886381">
                                                    <TbPhoneCall className="text-3xl" />

                                                </a>

                                            </div>
                                        </div>


                                    </div>
                                </div>
                            </div>


                        </div>

                    </div>
                    <div>
                        <div className="text-center py-5 border-t-2 border-gray-300/50 bg-primary text-white ">
                            @copyright 2024 All rights reserved || Made with by Nikhil
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Footer;