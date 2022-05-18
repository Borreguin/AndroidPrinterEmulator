import {NAVIGATION_ROUTES} from '../shared/constants/navigation.constants';
import {DataModal} from '../components/data-modal/data-modal';
import { createStackNavigator } from '@react-navigation/stack';

const RootStack = createStackNavigator();

export const modalScreens = [
    {
        ...NAVIGATION_ROUTES.DATA_MODAL,
        component: DataModal,
        auth: null,
    },

];


const getModalScreens = () => {
    return modalScreens.map((screen, index) => {
        return <RootStack.Screen name={screen.name} component={screen.component} {...modalAlertOptions} key={index} />;
    });
};
