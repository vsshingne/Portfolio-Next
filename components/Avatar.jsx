import Image from "next/image";

const Avatar = () => {
  return (
    <div className="hidden xl:flex xl:max-w-none pointer-events-none select-none">
      <Image
        src="/avatar.png"
        alt="avatar"
        width={1000}
        height={1000}
        className="translate-z-0 w-full h-full"
        style={{ zIndex: 20 }}
      />
    </div>
  );
};

export default Avatar;
