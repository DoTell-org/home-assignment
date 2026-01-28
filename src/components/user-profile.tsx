import Images from "../assets/images";

export const UserProfile = () => {
  const user = {
    name: "John Doe",
    image: Images.User,
  };

  return (
    <div className="flex items-center justify-start">
      <img src={user.image} alt={user.name} className="size-8 rounded-full mr-2" />
      <span className="text-black text-[13px] font-semibold">{user.name}</span>
    </div>
  );
};
