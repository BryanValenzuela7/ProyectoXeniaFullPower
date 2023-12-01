import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Formulario from './components/Renderizado';
import NavbarB from './components/NavbarB';

const AppNavigator = createStackNavigator(
  {
    Home: NavbarB,
    Formulario: Formulario,
  },
  {
    initialRouteName: 'Home',
  }
);

export default AppNavigator;