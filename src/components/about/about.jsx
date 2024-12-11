import Breadcrumb from "../breadcrumb/breadcrumb";

const AboutUs = () => {
  return (
    <>
      <Breadcrumb title={"about us"} />
      <div className="pb-10 pt-7 lg:pt-20">
        <div className="container">
          <h4 className="font-roboto pb-5 lg:pb-20 font-bold text-2xl xl:text-[80px] text-primarycolor">
            About us
          </h4>
          <p className="font-kumbh_sans font-normal text-lg xl:text-3xl text-thirdTextColor">
            Welcome to [Your Company Name]. Before using our logo design
            service, please carefully review the following Terms and Conditions,
            as they govern the contractual relationship between you (the
            "Client") and [Your Company Name] (the "Service Provider"). By using
            our logo design service, you acknowledge that you have read,
            understood, and agreed to these Terms and Conditions in their
            entirety.
          </p>
          <h4 className="font-roboto py-5 lg:py-20 font-bold text-2xl xl:text-[80px] text-primarycolor">
            → Scope of Service
          </h4>
          <p className="font-kumbh_sans font-normal text-lg xl:text-3xl text-thirdTextColor">
            a. [Your Company Name] will provide custom logo design services to
            the Client based on the specifications provided by the Client.{" "}
            <br />  b. The Service Provider will deliver the final logo design
            in the agreed-upon format upon completion and full payment of the
            service fee.
          </p>

          <h4 className="font-roboto py-5 lg:py-20 font-bold text-2xl xl:text-[80px] text-primarycolor">
            → Copyright and Ownership
          </h4>
          <p className="font-kumbh_sans font-normal text-lg xl:text-3xl text-thirdTextColor">
            a. The Client acknowledges that all rights, title, and ownership of
            the final logo design will belong solely to the Client after full
            payment has been received by the Service Provider. <br /> b. Final
            payment ensures that only the agreed design becomes the client’s
            property. Any previous ideas/concepts remain the property of The
            Service Provider, unless any prior agreement has been made. <br />{" "}
             c. The Service Provider reserves the right to showcase the
            completed logo design in their portfolio or promotional materials.
          </p>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
