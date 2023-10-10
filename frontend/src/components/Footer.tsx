
const Footer = () => {
  return (
    <>
      <div className="flex justify-center">
        <div className="bg-indigo-800 h-1 w-[90%]"></div>
      </div>
      <div className="p-3 grid grid-cols-[repeat(auto-fit,_minmax(min(100%,_18rem),_1fr))] auto-rows-[10rem]">
        <div className="text-indigo-800 text-6xl flex gap-4 justify-center items-center">
          <span>L</span>
          <span className="translate-y-6">O</span>
          <span>G</span>
          <span className="translate-y-4">0</span>
        </div>

        <div>
          <h3 className="font-semibold tracking-widest text-xl">Quick Links</h3>
          <ul className="pl-2">
            <li>page link</li>
            <li>page link</li>
            <li>page link</li>
            <li>page link</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold tracking-widest text-xl">Schedule</h3>
          <ul className="pl-2">
            <li>Mondey to Friday: 8am to 5pm</li>
            <li>Saturday: 8am to 12pm</li>
            <li>Sunday: none</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold tracking-widest text-xl">Contact</h3>
          <ul className="pl-2">
            <li>+506-8789-1654</li>
            <li>example@gmail.com</li>
            <li>Instagram</li>
            <li>Facebook</li>
          </ul>
        </div>

      </div>

      <div className="bg-neutral-950 text-neutral-100 px-4 py-2 flex flex-wrap justify-between">
        <p>© 2023 Kovert Digital Shop. All rights reserved.</p>
        <p>Privacy Policy . Term Condition</p>
      </div>
    </>
  )
}

export default Footer