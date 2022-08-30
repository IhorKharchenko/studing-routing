// import { Form } from 'formik';
import { Component } from 'react';
// import { Tabs } from './Tabs/Tabs';
// import tabs from '../tabs.json';
// import { IconButton } from './IconButton/IconButton';
// import { ReactComponent as AddIcon } from '../icons/add.svg';
// import { Clock } from './Clock/Clock';
// import { Counter } from './Counter/Counter';
// import { Dropdown } from './Dropdown/Dropdown';
// import { Form } from './Form/Form';
// import { LoginForm } from './LoginForm/LoginForm';
// import { Modal } from './Modal/Modal';
import { Reader } from './Reader/Reader';
import publications from '../publications.json';
// import { TodoList } from './TodoList/TodoList';
export class App extends Component {
  state = {
    showModal: false,
  };
  toggleModal = () => {
    this.setState(prevState => ({
      showModal: !prevState.showModal,
    }));
  };
  render() {
    // const { showModal } = this.state;
    return (
      <div>
        {/* <IconButton onClick={this.toggleModal} aria-label="Открыть модалку">
          <AddIcon width="20" height="20" />
        </IconButton> */}
        {/* <Tabs items={tabs} /> */}
        {/* <Clock /> */}
        {/* <LoginForm />
        <Counter />
        <Dropdown />
        <Form /> */}
        {/* <button type="button" onClick={this.toggleModal}>
          Open Modal
        </button> */}
        {/* {showModal && (
          <Modal onClose={this.toggleModal}>
            <button type="button" onClick={this.toggleModal}>
              Close Modal
            </button>
          </Modal>
        )} */}
        <Reader items={publications} />
        {/* <TodoList /> */}
      </div>
    );
  }
}
