import "./style.css";

function menuBar() {
  let menuBar = document.createElement("div");
  menuBar.classList.add("header");
  let menuLeft = document.createElement("div");
  menuLeft.classList.add("menuLeft");
  let menuIcon = document.createElement("div");
  menuIcon.classList.add("material-symbols-outlined");
  menuIcon.innerHTML = "menu";
  menuIcon.addEventListener("click", toggleSidePanel);
  let homeIcon = document.createElement("div");
  homeIcon.classList.add("material-symbols-outlined");
  homeIcon.innerHTML = "home";
  let searchBar = document.createElement("div");
  searchBar.classList.add("searchBar");
  let searchIcon = document.createElement("div");
  searchIcon.classList.add("material-symbols-outlined");
  searchIcon.innerHTML = "search";
  let searchInput = document.createElement("input");
  searchInput.placeholder = "Search";
  searchBar.append(searchIcon, searchInput);
  menuLeft.append(menuIcon, homeIcon, searchBar);
  let menuRight = document.createElement("div");
  menuRight.classList.add("menuRight");
  let addIcon = document.createElement("div");
  addIcon.classList.add("material-symbols-outlined");
  addIcon.innerHTML = "add";
  let statusIcon = document.createElement("div");
  statusIcon.classList.add("material-symbols-outlined");
  statusIcon.innerHTML = "clock_loader_40";
  let helpIcon = document.createElement("div");
  helpIcon.classList.add("material-symbols-outlined");
  helpIcon.innerHTML = "help";
  let notificationIcon = document.createElement("div");
  notificationIcon.classList.add("material-symbols-outlined");
  notificationIcon.innerHTML = "notifications";
  let userIcon = document.createElement("div");
  userIcon.classList.add("material-symbols-outlined");
  userIcon.innerHTML = "hdr_auto";
  menuRight.append(addIcon, statusIcon, helpIcon, notificationIcon, userIcon);
  menuBar.append(menuLeft, menuRight);
  return menuBar;
}

function sidebar() {
  let sidebar = document.createElement("div");
  sidebar.classList.add("sidebar");
  return sidebar;
}

function mainView() {
  let mainView = document.createElement("div");
  mainView.classList.add("mainView");
  return mainView;
}

function content() {
  let content = document.createElement("div");
  content.classList.add("main");
  let sidePanel = sidebar();
  let mainContent = mainView();
  content.append(sidePanel, mainContent);
  return content;
}

function app() {
  let body = document.querySelector("body");
  let header = menuBar();
  let main = content();
  body.append(header, main);
}

function toggleSidePanel() {
  let div = document.querySelector(".sidebar");
  div.classList.contains("sidebar-hidden")
    ? div.classList.remove("sidebar-hidden")
    : div.classList.add("sidebar-hidden");
}

app();
