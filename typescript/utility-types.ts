// Utility Types
// https://www.typescriptlang.org/docs/handbook/utility-types.html

// Exemplo com o endpoint do Github
// https://api.github.com/users/lucas0019

interface GithubUserData {
  login: string;
  id: string;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: string;
  name: string;
  company: string;
  blog: string;
  location: string;
  email: string;
  hireable: string;
  bio: string;
  twitter_username: string;
  public_repos: string;
  public_gists: string;
  followers: string;
  following: string;
}

// Partial<...> - Pode usar parcialmente esses dados
function printGithubUserDataPartial(user: Partial<GithubUserData>) {
  console.log(user.followers);
  console.log(user.following);
}

printGithubUserDataPartial({ followers: "" }); // Consigo pergar parcialmente os dados do usuário

// Pick<Inteface, "props"> - Passo os dados que preciso
// Dizer os tipos de dados que aceita, nesse caso fazemos dessa forma
function printGithubUserPick(
  user: Pick<GithubUserData, "followers" | "following">
) {
  console.log(user.followers);
  console.log(user.following);
}

printGithubUserPick({ followers: "", following: "" });

// Omit - omitir dados que não queremos mostrar
function printGithubUserOmit(user: Omit<GithubUserData, "login">) {
  console.log(user.followers);
  console.log(user.following);
}


// Readyonly - Somente leitura dos dados
interface Bookstore {
  id: number;
  name: string;
  author: string;
  price: number;
  readonly stocks: number; // Defininido como readonly
}

const readBooks: Readonly<Bookstore> = {
  id: 1,
  name: "JavaScript: The Good Parts",
  author: "Douglas Crockford",
  price: 19.99,
  stocks: 100,
}

readBooks.price; // 19.99
// readBooks.price = 30 // Não é possivel pois o objeto é readonly (somente leitura)
