import { Box } from '@chakra-ui/react'
import React from 'react'
import StockExchangeGraph from './Stockexchangegraph'
import StocksPage from './Stockpage'

function Home() {
  return (
    <Box>
      <StocksPage/>
    </Box>
  )
}

export default Home