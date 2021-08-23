import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import AddedNewForm from './added-new-form';

export default function NewPost() {
	return (
		<div>
			<AddedNewForm />
		</div>
	);
}
