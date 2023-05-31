type VerifyUserFn = (user: User, sentValue: User) => boolean;
type User = { username: string; password: string };

const verifyUser: VerifyUserFn = (user, sentValue) => {
  return user.username === sentValue.username && user.password === sentValue.password;
};

const bdUser = {
  username: 'João',
  password: '123456',
};
// Ele deixa a identidade mais livre, veja que o sentUser tem até um atributo a mais e o TypeScript não está reclamando
const sentUser = {
  username: 'João',
  password: '123456',
  permissions: '',
};

const loggedIn = verifyUser(bdUser, sentUser);
console.log(loggedIn);
