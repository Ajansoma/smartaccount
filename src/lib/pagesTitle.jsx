import { Link } from 'react-router-dom';

export const pagesTitle = function (name, icon, action, link) {
  return (
    <div className="w-full flex justify-between items-center pb-6">
      <p className="text-text-100 text-3xl">{name}</p>
      <div>
        <Link
          to={link}
          className="text-xl text-primary-100 flex items-center gap-2 bg-primary-300 p-2 drop-shadow-sm rounded-lg"
        >
          {icon}
          <p>{action}</p>
        </Link>
      </div>
    </div>
  );
};
