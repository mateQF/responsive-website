import Single from "../assets/single.png";
import Double from "../assets/double.png";
import Triple from "../assets/triple.png";
import Card from "./Card";
import '../globals.css'

function Cards() {
  return (
    <div className="w-full py-[10rem] bg-white px-4 scroll" id="cards">
      <div className="msx-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
        <Card src={Single} price={149} userPlan='Single User' storage='500' grantedUser='1' GB='2' />
        <div className="w-full shadow-xl bg-gray-100 flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300">
          <img
            className="w-20 mx-auto mt-[-3rem] bg-transparent"
            src={Double}
            alt="/"
          />
          <h2 className="text-2xl font-bold text-center py-8">Double User</h2>
          <p className="text-center text-4xl font-bold">$199</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">1TB GB Storage</p>
            <p className="py-2 border-b mx-8">2 Granted User</p>
            <p className="py-2 border-b mx-8">Send up to 4 GB</p>
          </div>
          <button className="bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3">
            Start Trial
          </button>
        </div>
        <Card src={Triple} price={249} userPlan='Triple User' storage='1TB' grantedUser='3' GB='6' />
      </div>
    </div>
  );
}

export default Cards;
