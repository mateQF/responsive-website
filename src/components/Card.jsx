function Card({ src, price, userPlan, storage, grantedUser, GB }) {
  return (
    <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
      <img className='w-20 mx-auto mt-[-3rem] bg-white' src={src} alt="/" />
      <h2 className="text-2xl font-bold text-center py-8">{userPlan}</h2>
      <p className="text-center text-4xl font-bold">${price}</p>
      <div className="text-center font-medium">
        <p className="py-2 border-b mx-8 mt-8">{storage} GB Storage</p>
        <p className="py-2 border-b mx-8">{grantedUser} Granted User</p>
        <p className="py-2 border-b mx-8">Send up to {GB} GB</p>
      </div>
      <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3">
        Start Trial
      </button>
    </div>
  );
}

export default Card;
