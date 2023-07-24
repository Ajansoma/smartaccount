import { menuData } from '../data';
import smartlogo from '../assets/smartlogo.svg';
import noAvatar from '../assets/noavatar.jpeg';
import { menuLink } from '../lib/menuLink';
import { menuAuthLinks } from '../data';

const Menu = () => {
  return (
    <div className="bg-white h-screen overflow-scroll drop-shadow-sm sticky px-14 py-6">
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
      <div className="border-b-2">{menuData.map((data) => menuLink(data))}</div>
      <div className="mt-6">{menuAuthLinks.map((data) => menuLink(data))}</div>
    </div>
  );
};

export default Menu;
//sm:my-16 my-6 px-6 sm:px-16
