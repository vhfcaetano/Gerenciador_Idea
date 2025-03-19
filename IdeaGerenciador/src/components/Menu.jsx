import { FaClipboardList } from "react-icons/fa";
import { RiTeamFill } from "react-icons/ri";
import { BiSolidReport } from "react-icons/bi";
import { IoSettings } from "react-icons/io5";

import styles from "./Menu.module.css";

export function Menu() {
  return (
    <nav>
      <div className={styles.logo}>
        <img
          src="https://www.ideacont.com.br/assets/img/logo.png"
          alt="Logo do site"
          class="logo"
        />
      </div>
      <ul>
        <li>
          <a href="#" onclick="pageIndex()" class="page">
            <FaClipboardList />
            Boards
          </a>
        </li>
        <li>
          <a onclick="pageEquipe()" href="#" class="page">
            <RiTeamFill />
            Equipe
          </a>
        </li>
        <li>
          <a href="#" class="page">
            <BiSolidReport />
            Relatórios
          </a>
        </li>
        <li>
          <a href="#" class="page">
            <IoSettings />
            Ajustes
          </a>
        </li>
      </ul>
    </nav>
  );
}
