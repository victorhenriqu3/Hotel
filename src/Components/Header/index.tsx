import { Box, HStack, Image, Text, VStack } from '@chakra-ui/react';
import { FaBed } from 'react-icons/fa';
import Logo from '../../assets/Logo.svg';

export function Header() {
	return (
		<header>
			<Box
				bg='yellowish'
				px={10}
				py={5}
				display='flex'
				flexDirection={'row'}
				justifyContent='space-between'
			>
				<HStack>
					<Image src={Logo} width='16' />
					<VStack
						ms={2}
						display={{
							base: 'none',
							md: 'flex',
							xl: 'flex',
						}}
					>
						<Text
							color={'blueGraysh.200'}
							lineHeight='1'
							fontWeight={'800'}
							fontSize='2xl'
						>
							ARGOS
						</Text>
						<Text
							color={'blueGraysh.400'}
							lineHeight='1'
							fontWeight={'800'}
							fontSize='2xl'
						>
							HOTEL
						</Text>
					</VStack>
				</HStack>
				<HStack>
					<HStack bg='blueGraysh.400' px='3' py='2' borderRadius='6'>
						<FaBed color='white' size='30' />
						<Text fontWeight='600' color='white' fontSize='xl'>
							0
						</Text>
					</HStack>
				</HStack>
			</Box>
		</header>
	);
}
