import "./style.css";

let todos = {};
let projects = {};
let uuid = 0;

const todo = (
  title,
  description,
  dueDate,
  priority,
  complete,
  group = null
) => {
  return { title, description, dueDate, priority, complete, group };
};
const project = (name) => {
  return { name };
};

function createProject(name) {
  projects[name] = project(name);
}

function createTodo(title, description, dueDate, priority, complete) {
  todos[uuid] = todo(title, description, dueDate, priority, complete);
  uuid++;
}

function renderTodos() {
  Object.keys(todos).forEach(function (key) {
    console.log(todos[key].title);
  });
}

function renderProjects() {
  Object.keys(projects).forEach(function (key) {
    console.log(projects[key].name);
  });
}

function createIcon(symbol) {
  let div = document.createElement("div");
  div.classList.add("material-symbols-outlined");
  div.innerHTML = symbol;
  return div;
}
function createIconLabel(symbol, label) {
  let div = document.createElement("div");
  let divIcon = createIcon(symbol);
  let divLabel = document.createElement("div");
  divLabel.innerHTML = label;
  div.append(divIcon, divLabel);
  return div;
}

function menuBar() {
  let menuBar = document.createElement("div");
  menuBar.classList.add("header");
  let menuLeft = document.createElement("div");
  menuLeft.classList.add("menuLeft");
  let menuIcon = createIcon("menu");
  menuIcon.addEventListener("click", toggleSidePanel);
  let homeIcon = createIcon("home");
  let searchBar = document.createElement("div");
  searchBar.classList.add("searchBar");
  let searchIcon = createIcon("search");
  let searchInput = document.createElement("input");
  searchInput.placeholder = "Search";
  searchBar.append(searchIcon, searchInput);
  menuLeft.append(menuIcon, homeIcon, searchBar);
  let menuRight = document.createElement("div");
  menuRight.classList.add("menuRight");
  let addIcon = createIcon("add");
  let statusIcon = createIcon("clock_loader_40");
  let helpIcon = createIcon("help");
  let notificationIcon = createIcon("notifications");
  let userIcon = createIcon("hdr_auto");
  menuRight.append(addIcon, statusIcon, helpIcon, notificationIcon, userIcon);
  menuBar.append(menuLeft, menuRight);
  return menuBar;
}

function sidebar() {
  let sidebar = document.createElement("div");
  sidebar.classList.add("sidebar");
  let inbox = createIconLabel("inbox", "Inbox");
  let today = createIconLabel("today", "Today");
  let upcoming = createIconLabel("calendar_month", "Upcoming");
  sidebar.append(inbox, today, upcoming);
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

createTodo("Gym", "Push Day", "2023-09-10", "3", false);
createTodo("Laundry", "Wash, dry and fold", "2023-09-11", "3", false);
createProject("Fitness");
createProject("Chores");
createProject("Groceries");

renderProjects();
renderTodos();
