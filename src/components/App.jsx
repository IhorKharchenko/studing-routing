// import { Form } from 'formik';
import { Counter } from './Counter/Counter';
import { Dropdown } from './Dropdown/Dropdown';
import { Form } from './Form/Form';
import { LoginForm } from './LoginForm/LoginForm';
// import { TodoList } from './TodoList/TodoList';

export const App = () => {
  return (
    <div>
      <LoginForm />
      <Counter />
      <Dropdown />
      <Form />
      {/* <TodoList /> */}
    </div>
  );
};
