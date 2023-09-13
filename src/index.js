import "./style.css";

let todos = {};
let projects = {};
let uuid = 0;
let priorityArr = ["Low", "Medium", "High"];

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
  let mainView = document.querySelector(".mainView");
  Object.keys(todos).forEach(function (key) {
    let todo = document.createElement("div");
    todo.classList.add("todo");
    let todoLeft = document.createElement("div");
    todoLeft.classList.add("todoLeft");
    todoLeft.append(
      todos[key].complete
        ? createIcon("radio_button_checked")
        : createIcon("radio_button_unchecked")
    );
    let todoRight = document.createElement("div");
    todoRight.classList.add("todoRight");
    let todoTitle = document.createElement("div");
    todoTitle.innerHTML = todos[key].title;
    let todoPriority = document.createElement("div");
    todoPriority.innerHTML = priorityArr[todos[key].priority];
    let todoDate = document.createElement("div");
    todoDate.innerHTML = todos[key].dueDate;
    todoRight.append(todoTitle, todoPriority, todoDate);
    todo.append(todoLeft, todoRight);
    mainView.append(todo);
  });
}

function renderProjects() {
  let sidebarVar = document.querySelector(".sidebarVar");
  sidebarVar.innerHTML = "";
  Object.keys(projects).forEach(function (key) {
    sidebarVar.append(createIconLabel("atr", projects[key].name));
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
  let sidebarConst = document.createElement("div");
  sidebarConst.classList.add("sidebarConst");
  let inbox = createIconLabel("inbox", "Inbox");
  let today = createIconLabel("today", "Today");
  let upcoming = createIconLabel("calendar_month", "Upcoming");
  sidebarConst.append(inbox, today, upcoming);
  let sidebarVar = document.createElement("div");
  sidebarVar.classList.add("sidebarVar");
  sidebar.append(sidebarConst, sidebarVar);
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

createTodo("Weights", "Push Day", "2023-09-10", "2", false);
createTodo("Cardio", "Run", "2023-09-11", "1", true);
createTodo("Laundry", "Wash, dry and fold", "2023-09-11", "2", true);
createProject("Fitness");
createProject("Chores");
createProject("Groceries");

renderProjects();
renderTodos();
