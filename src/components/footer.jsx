import logo from "../app/assets/logo.png";
import Image from "next/image";
import qr from "../app/assets/QrCode.png";
import appstore from "../app/assets/appstore.png";
import playstore from "../app/assets/play.png";
const Footer = () => {
  return (
    <div className="bg-primarycolor py-[50px] lg:py-[75px]">
      <div className="container">
        {/* parent */}
        <div className="flex flex-col xl:flex-row justify-between">
          {/* left */}
          <div>
            <Image src={logo} alt="Logo" className="lg:w-[200px] w-[100px]" />
            <p className="font-inter pt-[10px] pb-3 lg:pb-6 font-normal max-w-[306px] text-xs lg:text-sm text-[#f8fafc88]">
              Ecommerce is a free UI Kit from Paperpillar that you can use for
              your personal or commercial project.
            </p>
            {/* submit */}
            <div className="flex sm:w-[365px] w-full items-center gap-x-3">
              <input
                type="text"
                placeholder="Type your email address"
                className="lg:pb-3 pb-2 pt-[6px] lg:pt-[10px] px-4 lg:px-6 bg-transparent placeholder:font-inter w-full text-[#f8fafcb2] placeholder:font-normal placeholder:leading-none placeholder:text-[#f8fafc7e] placeholder:text-xs rounded-[200px] border-2 border-[#f8fafc7e]"
              />
              <div className="font-inter pt-[13px] pb-[12px] font-semibold cursor-pointer bg-white text-xs text-primarycolor px-4 lg:px-8 rounded-[200px]">
                Submit
              </div>
            </div>
          </div>
          {/* center list */}
          <div className="flex md:flex-row flex-col gap-10 lg:gap-[80px] pt-10">
            <ul className="font-figtree text-[#F8FAFC]">
              <li className="font-bold text-lg lg:text-xl lg:pb-3 pb-2">
                Account
              </li>
              {[
                "My Account",
                "Login / Register",
                "Cart",
                "Wishlist",
                "Shop",
              ].map((item, index) => (
                <li
                  className="lg:text-md text-sm text-nowrap font-normal mt-3"
                  key={index}
                >
                  <a href="#">{item}</a>
                </li>
              ))}
            </ul>
            <ul className="font-figtree text-[#F8FAFC]">
              <li className="font-bold text-lg lg:text-xl lg:pb-3 pb-2">
                Quick Link
              </li>
              {[
                "Privacy Policy",
                "Terms Of Use",
                "FAQ",
                "Wishlist",
                "Contact",
              ].map((item, index) => (
                <li
                  className="lg:text-md text-sm text-nowrap font-normal mt-3"
                  key={index}
                >
                  <a href="#">{item}</a>
                </li>
              ))}
            </ul>
            <ul className="font-figtree text-[#F8FAFC]">
              <li className="font-bold text-lg lg:text-xl lg:pb-3 pb-2">
                Support
              </li>
              {["Supportexclusive@gmail.com", "+88015-88888-9999"].map(
                (item, index) => (
                  <li
                    className="lg:text-md text-sm font-normal mt-3"
                    key={index}
                  >
                    <a href="#">{item}</a>
                  </li>
                )
              )}
            </ul>
            <ul className="font-figtree text-[#F8FAFC]">
              <li className="font-bold text-lg lg:text-xl text-nowrap lg:pb-3 pb-2">
                Download App
              </li>
              <div className="flex gap-2">
                <Image src={qr} alt="qr" />
                <div className="flex flex-col justify-between">
                  <Image src={playstore} alt="qr" />
                  <Image src={appstore} alt="qr" />
                </div>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
