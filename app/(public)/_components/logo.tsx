import Image from "next/image";

const Logo = () => {
  return (
    <>
      <div className="">
        <Image src="/logo.svg" alt="logo" fill />
      </div>
    </>
  );
};

export default Logo;
