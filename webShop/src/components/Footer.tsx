import { ReactNode } from "react";
import logo from "../assets/logo-black.webp";

export default function Footer () {
  return (
    <footer className="snap-center py-8 px-4 text-neutral-900 grid auto-rows-[10rem] place-items-center" style={{gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 20rem), 1fr))'}}>
      <div className="h-full">
        <img className="w-full h-full" src={logo} alt="logo" />
      </div>
      <section className="w-4/5 flex flex-col gap-4">
        <h3 className="tracking-widest">Shop</h3>
        <Ul>
          <li>Category#1</li>
          <li>Category#2</li>
          <li>Category#3</li>
          <li>Category#4</li>
        </Ul>
      </section>
      <section className="w-4/5 flex flex-col gap-4">
        <h3>Schedule</h3>
        <Ul>
          <li>Monday to Friday: 9am to 17pm</li>
          <li>Saturday: 9am to 13pm</li>
          <li>Sunday: Close</li>
        </Ul>
      </section>
    </footer>
  )
}

const Ul = ({children}: {children: ReactNode}) => {
  return (
    <ul  className="flex flex-col gap-2 list-disc list-inside">{children}</ul>
  )
}