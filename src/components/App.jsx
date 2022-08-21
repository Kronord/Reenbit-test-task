import { Routes, Route, Navigate } from 'react-router-dom';
import Main from './MainComp/Main';
import ChatArea from './ChatArea';
import GoogleAuth from './GoogleAuth';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import PublicRoute from './PublicRoute/PublicRoute';
import { useSelector } from 'react-redux';

export const App = () => {
  const user = useSelector(state => state.persistedReducer.user);
  const contactId = useSelector(state => state.persistedReducer.contacts[0].id);

  return (
    <>
      <Routes>
        <Route path="/" element={<PublicRoute component={<GoogleAuth />} restricted />} />
        <Route path="chat" element={<PrivateRoute component={<Main />} />}>
          <Route
            path=":chatId"
            element={<PrivateRoute component={<ChatArea />} />}
          />
        </Route>
        <Route
          path="*"
          element={user ? <Navigate to={`chat/${contactId}`} /> : <Navigate to={'/'} />}
        />
      </Routes>
    </>
  );
};
