import { menuData } from '../data';
import { Link } from 'react-router-dom';
import smartlogo from '../assets/smartlogo.svg';
import noAvatar from '../assets/noavatar.jpeg';

const Menu = () => {
  return (
    <div className="bg-white h-screen shadow-lg shadow-primary-100/20 fixed px-14 py-6">
      <img src={smartlogo} />
      <div>
        <div className="flex justify-center pt-12">
          <div>
            <img src={noAvatar} className="w-[4rem] rounded-full pb-2" />
            <p>Haps Hair</p>
          </div>
        </div>
      </div>
      <p className="text-text-200 pb-12">hapshair@gmail.com</p>
      <div className="">
        {menuData.map((data) => (
          <div
            key={data.link}
            className="flex  text-xl gap-4 text-text-100 pb-7"
          >
            <div> {data.icon}</div>
            <Link
              to={data.link}
              className="hover:scale-105 hover:duration-300 hover:text-text-200 text-base"
            >
              {data.title}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
//sm:my-16 my-6 px-6 sm:px-16
