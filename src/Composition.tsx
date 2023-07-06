import React from 'react';
import {AbsoluteFill, Img} from 'remotion';
import {z} from 'zod';

const lineItem = z.object({
	title: z.string().default('Untitled'),
	price: z.number().min(0),
});

export const invoiceSchema = z.object({
	items: z.array(lineItem),
	currency: z.enum(['USD', 'CHF']),
});

export const MyComposition: React.FC<z.infer<typeof invoiceSchema>> = ({
	items,
	currency,
}) => {
	console.log('items', items);
	console.log('currency', currency);

	return (
		<AbsoluteFill
			style={{
				padding: 60,
				backgroundColor: 'white',
				fontFamily: 'Helvetica',
			}}
		>
			<div>
				<Img
					style={{
						height: 80,
						marginLeft: -15,
					}}
					src="https://github.com/remotion-dev/brand/raw/main/withtitle/element-0.png"
				/>
			</div>
			<h1>Invoice</h1>

			{items.map((item) => {
				return (
					<div style={itemStyle}>
						<div style={description}>{item.title} </div>
						{new Intl.NumberFormat('en-US', {
							style: 'currency',
							currency,
						}).format(item.price)}{' '}
					</div>
				);
			})}
			<div style={itemStyle}>
				<div style={description}>
					<strong>Grand total</strong>
				</div>
				{new Intl.NumberFormat('en-US', {
					style: 'currency',
					currency,
				}).format(items.reduce((a, b) => a + b.price, 0))}{' '}
			</div>

			<br />
			<br />
			<br />
			<br />
			<div>Thanks for your business!</div>
		</AbsoluteFill>
	);
};

const itemStyle: React.CSSProperties = {
	borderTop: '1px solid black',
	paddingTop: 5,
	paddingBottom: 5,
	display: 'flex',
};

const description: React.CSSProperties = {
	flex: 1,
};
