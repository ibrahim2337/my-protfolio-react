

const Navbar = () => {
  return (
    <div>
      <nav className="bg-gray-900 flex justify-between items-center px-10 py-6 w-full">
        <h1 className=" text-white font-bold text-2xl">
          Ibrahim Khalilulullah
        </h1>
        <ul className="text-white flex gap-10">
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Services</li>
        </ul>
        <button className="text-white bg-gray-800 py-2 px-3 rounded">Follow Me</button>
      </nav>
    </div>
  );
};

export default Navbar;