import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function PublicRoute({
  component: routerComponent,
  restricted = false,
}) {
  const contactId = useSelector(state => state.persistedReducer.contacts[0].id);
  const isLoggedin = useSelector(state => state.persistedReducer.user);
  const shouldRedirect = isLoggedin && restricted;

  return shouldRedirect ? <Navigate to={`/chat/${contactId}`} /> : routerComponent;
}