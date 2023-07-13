import logoIcon from '../../assets/logoIcon.svg';

const AuthWelcomeMessage = () => {
  return (
    <div>
      <div className="flex justify-center">
        <img src={logoIcon} className="bg-primary-300 p-4 rounded-full" />
      </div>
      <h1 className="text-3xl sm:text-4xl mt-4 text-center text-text-100">
        Hello Again!
      </h1>
      <p className="text-center pt-3 pb-12 text-text-200 text-sm sm:text-base sm:leading-[28px]">
        We are glad to have you back at smartaccount sign up or login to get
        started.
      </p>
    </div>
  );
};

export default AuthWelcomeMessage;
