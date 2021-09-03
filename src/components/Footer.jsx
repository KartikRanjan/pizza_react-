import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-gray-300 flex flex-col flex-wrap md:flex-nowrap mt-10 px-8 lg:px-28">
      <div className="flex  flex-col flex-wrap md:flex-nowrap md:flex-row justify-center items-center md:justify-evenly">
        <div className="text-center w-3/5 md:w-1/3 flex flex-col items-center py-16 px-8">
          <div className="mb-6">
            <Link to="/">
              <img style={{ height: 45 }} src="/images/logo.png" alt="logo" />
            </Link>
          </div>
          <div>
            <address>
              Pizza Shop, R39th Street, Jayangar 8th Block, Bangalore, Karnataka
              India, 560075
            </address>
          </div>
        </div>

        <div className="flex flex-col flex-wrap md:flex-nowrap md:flex-row justify-center md:justify-around w-4/5 md:w-11/12 items-center md:py-16">
          <div className="sm:w-3/5 md:w-36 py-6 w-3/4">
            <h2 className="text-lg font-bold">Lorem</h2>
            eiusmod excepteur commodo exercitation dolore culpa. Culpa ullamco
            ex ullamco proident eu consectetur
          </div>
          <div className="sm:w-3/5 md:w-36 py-6 w-3/4">
            <h2 className="text-lg font-bold">Ipsum</h2>
            Incididunt eu pariatur cupidatat proident amet velit ea ut aliqua
            irure. Lorem qui pariatur ea amet
          </div>
          <div className="sm:w-3/5 md:w-36 py-6 w-3/4">
            <h2 className="text-lg font-bold">Lorem</h2>
            Incididunt eu pariatur cupidatat proident amet velit ea ut aliqua
            irure. Lorem qui pariatur ea amet
          </div>
        </div>
      </div>

      <div className="w-full flex flex-col pb-12">
        <div className="flex justify-center">
          <a href="https://www.facebook.com/">
            <i class="px-3 md:px-6 fab fa-facebook-square fa-2x"></i>
          </a>
          <a href="https://www.twitter.com/">
            <i class="px-3 md:px-6 fab fa-twitter fa-2x"></i>
          </a>
          <a href="https://www.instagram.com/">
            <i class="px-3 md:px-6 fab fa-instagram fa-2x"></i>
          </a>
          <a href="mailto: kkrbglr@gmail.com">
            <i class="px-3 md:px-6 fas fa-envelope fa-2x"></i>
          </a>
        </div>
        <p className="text-center py-6">
          <strong>&copy; 2021 Kartik Ranjan</strong>
        </p>
      </div>
    </div>
  );
};

export default Footer;
