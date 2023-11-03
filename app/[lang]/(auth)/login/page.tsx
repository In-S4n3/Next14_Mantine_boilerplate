import { Locale } from '@/i18n.config';
import Login from './components/Login';

const LoginPage = ({ params }: { params: { lang: Locale } }) => {
  return <Login lang={params.lang} />;
};

export default LoginPage;
