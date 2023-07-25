import { Link } from 'react-router-dom';
export const menuLink = function (data) {
  return (
    <div key={data.link} className="flex text-xl gap-4 text-text-100 pb-7">
      <div> {data.icon}</div>
      <Link
        to={data.link}
        className="hover:scale-105 hover:duration-300 hover:text-text-200 text-base"
      >
        {data.title}
      </Link>
    </div>
  );
};
