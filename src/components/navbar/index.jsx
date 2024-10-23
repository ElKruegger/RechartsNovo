import { RiHomeSmileFill } from "react-icons/ri";
import { RxPerson } from "react-icons/rx";

export function Navbar() {
  return (
    <nav className="flex h-full w-36 items-center justify-center p-4">
      <div className="flex justify-center w-full h-full rounded-md bg-zinc-700 ">
        <ul className="flex flex-col items-center gap-4 space-y-10 text-xs justify-center">
          <li className="custom-list-item">
            <RxPerson className="text-2xl" />
            <span> Relatorio A</span>
          </li>
          <li className="custom-list-item ">
            <RxPerson className="text-2xl" />
            <span> Relatorio B</span></li>
          <li className="custom-list-item ">
            <RxPerson className="text-2xl" />
            <span> Relatorio C</span>
          </li>
          <li className="custom-list-item">
            <RxPerson className="text-2xl" />
            <span> Relatorio D</span>
          </li>
          <li className="custom-list-item">
            <RxPerson className="text-2xl" />
            <span> Relatorio E</span>
          </li>
        </ul>
      </div>
    </nav>
  )
}