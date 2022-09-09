import React from 'react';
import { Button, Heading, TextWrapper } from '../../globalStyles';
import { IconContext } from 'react-icons/lib';
import {
	PricingSection,
	PricingWrapper,
	PricingContainer,
	PricingCardInfo,
	PricingCardPlan,
	PricingCardCost,
	PricingCardFeatures,
	PricingCardText,
	PricingCardFeature,
	PricingCard,
} from './MarketingStyles';
import { marketingData } from '../../data/MarketingData';
import { Link } from 'react-router-dom';

function Marketing() {
	return (
		<IconContext.Provider value={{ color: '#a9b3c1', size: '1rem' }}>
			<PricingSection id="marketing">
				<PricingWrapper>
					<Heading>Odaberite najbolju opciju</Heading>

					<TextWrapper
						mb="1.4rem"
						weight="600"
						size="1.1rem"
						color="white"
						align="center"
					>
					
					</TextWrapper>
					<PricingContainer>
						{marketingData.map((card, index) => (
							<PricingCard key={index}>
								<PricingCardInfo>								
									<PricingCardPlan>{card.title}</PricingCardPlan>
									<PricingCardCost>{card.price}</PricingCardCost>
									<PricingCardText>{card.description}</PricingCardText>
									<img alt='ponude' src={card.img} style={{borderRadius:"10px 40px", display:'block', marginLeft:"auto", marginRight:"auto", width:"100%"}}/>					
									<PricingCardFeatures>
										{card.features.map((feature, index) => (
											<PricingCardFeature key={index}>
												{feature}											
											</PricingCardFeature>
										))}
									</PricingCardFeatures>															
           								 <Link to="../contact">
                							<Button>Pozovite nas</Button>
            							</Link>            								
								</PricingCardInfo>						
							</PricingCard>
						))}
					</PricingContainer>
				</PricingWrapper>
			</PricingSection>
		</IconContext.Provider>
	);
}
export default Marketing;