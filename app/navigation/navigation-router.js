import { NAVIGATION_ROUTES } from "../shared/constants/navigation.constants";
import { navigate, navigationRef } from "./nav-ref";

export const showDataModal = async (passProps) => {
    const navigation = navigationRef.current;
    await navigation.navigate(NAVIGATION_ROUTES.DATA_MODAL.name, passProps, navigation);
}
