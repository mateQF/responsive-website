import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from "react-icons/fa";
import FooterHeadings from "./FooterHeadings";

function Footer() {
  return (
    <footer>
      <div className="max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300">
        <div>
          <h1 className="w-full text-3xl font-bold text-[#00df9a]">REACT.</h1>
          <p className="py-4">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id odit
            ullam iste repellat consequatur libero reiciendis, blanditiis
            accusantium.
          </p>
          <div className="flex justify-between mx-auto lg:mx-0 md:w-[75%] my-6">
            <FaFacebookSquare size={30} className="hover:text-white cursor-pointer" />
            <FaInstagram size={30} className="hover:text-white cursor-pointer" />
            <FaTwitterSquare size={30} className="hover:text-white cursor-pointer" />
            <FaGithubSquare size={30} className="hover:text-white cursor-pointer" />
            <FaDribbbleSquare size={30} className="hover:text-white cursor-pointer" />
          </div>
        </div>
        <div className="lg:col-span-2 flex justify-between mt-6">
          <FooterHeadings title='Solutions' headings={['Analytics', 'Marketing', 'Commerce', 'Insights']} />
          <FooterHeadings title='Support' headings={['Pricing', 'Documentation', 'Guides', 'API Status']} />
          <FooterHeadings title='Company' headings={['About', 'Blog', 'Jobs', 'Careers']} />
          <FooterHeadings title='Legal' headings={['Claim', 'Policy', 'Terms', 'Copyright']} />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
