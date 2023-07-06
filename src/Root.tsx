import {Still} from 'remotion';
import {invoiceSchema, MyComposition} from './Composition';

export const RemotionRoot: React.FC = () => {
	return (
		<>
			<Still
				schema={invoiceSchema}
				id="Invoice"
				component={MyComposition}
				width={595}
				height={842}
				defaultProps={{
					items: [
						{title: 'Company License', price: 0},
						{title: 'Untitled', price: 0},
					],
					currency: 'USD' as const,
				}}
			/>
		</>
	);
};
