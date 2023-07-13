import register from '../../assets/register.svg';

const AuthImage = () => (
  <div className="bg-primary-100 h-screen justify-center hidden sm:flex">
    <img src={register} className="w-9/12" />
  </div>
);

export default AuthImage;
