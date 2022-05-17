import SQLite from "react-native-sqlite-storage"
import {DB} from '../../../shared/constants/db.constants';

export const getConnection = () => {
    return  SQLite.openDatabase({
        name: DB.NAME,
        createFromLocation: 1
    })
}
