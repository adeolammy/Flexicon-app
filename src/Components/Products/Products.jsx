import React from 'react';
import { Container, Section } from '../../globalStyle';
import {
	ProductText,
	ProductTitle,
	ProductWrapper,
	ProductColumn,
	ProductImageWrapper,
	ProductName,
	ProductTextWrapper,
} from './ProductsStyle';
import { productsData } from '../../data/ProductsData';

const Products = () => {
	const initial = {
		y: 40,
		opacity: 0,
	};
	const animate = {
		y: 0,
		opacity: 1,
	};

	return (
		<Section smPadding="50px 10px" position="relative" inverse id="Product">
			<Container>
				<ProductTextWrapper>
					<ProductTitle>Features of our Product</ProductTitle>
				</ProductTextWrapper>
				<ProductWrapper>
					{productsData.map((el, index) => (
						<ProductColumn
							initial={initial}
							animate={animate}
							transition={{ duration: 0.5 + index * 0.1 }}
							key={index}
						>
							<ProductImageWrapper className={el.imgClass}>
								{el.icon}
							</ProductImageWrapper>
							<ProductName>{el.name}</ProductName>
							<ProductText>{el.description}</ProductText>
						</ProductColumn>
					))}
				</ProductWrapper>
			</Container>
		</Section>
	);
};

export default Products;