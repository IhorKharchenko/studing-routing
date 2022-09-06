// import { Form } from 'formik';
import { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { MaterialEditorForm } from './Materials/MaterialEditorForm';
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
// import { Reader } from './Reader/Reader';
// import publications from '../publications.json';
// import { TodoList } from './TodoList/TodoList';
// import { PokemonForm } from './PokemonAPI/PokemonForm';
// import { PokemonInfo } from './PokemonAPI/PokemonInfo';
import * as API from 'services/api';
import { Materials } from './Materials/Materials';
export class App extends Component {
  state = {
    showModal: false,
    pokemonName: '',
    materials: [],
    isLoading: false,
  };
  async componentDidMount() {
    try {
      this.setState({ isLoading: true });
      const materials = await API.getMaterials();
      this.setState({ materials, isLoading: false });
    } catch (error) {
      toast.error({ error });
    }
  }
  toggleModal = () => {
    this.setState(prevState => ({
      showModal: !prevState.showModal,
    }));
  };
  handleFormSubmit = pokemonName => {
    this.setState({ pokemonName });
  };

  addMaterial = async values => {
    try {
      const material = await API.addMaterial(values);
      this.setState(state => ({
        materials: [...state.materials, material],
      }));
    } catch (error) {
      toast.error({ error });
    }
  };

  deleteMaterial = async id => {
    try {
      await API.deleteMaterial(id);
      this.setState(state => ({
        materials: state.materials.filter(material => material.id !== id),
      }));
    } catch (error) {
      toast.error({ error });
    }
  };

  updateMaterial = async fields => {
    try {
      const updatedMaterial = await API.updateMaterial(fields);
      this.setState(state => ({
        materials: state.materials.map(material =>
          material.id === fields.id ? updatedMaterial : material
        ),
      }));
    } catch (error) {
      toast.error({ error });
    }
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
        {/* <Reader items={publications} /> */}
        {/* <TodoList /> */}
        {/* <PokemonForm onSubmit={this.handleFormSubmit} />
        <PokemonInfo pokemonName={this.state.pokemonName} /> */}
        <MaterialEditorForm onSubmit={this.addMaterial} />
        <Materials
          items={this.state.materials}
          onDelete={this.deleteMaterial}
          onUpdate={this.updateMaterial}
        />
        <ToastContainer autoClose={3000} />
      </div>
    );
  }
}
