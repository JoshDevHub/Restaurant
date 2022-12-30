import renderHomeContent from "./home";
import renderHeader from "./header";
import renderFooter from "./footer";
import renderMenu from "./menu";
import renderContact from "./contact";
import "./style.css";

renderHeader({
  home: renderHomeContent,
  menu: renderMenu,
  contact: renderContact
});

renderHomeContent();
renderFooter();
