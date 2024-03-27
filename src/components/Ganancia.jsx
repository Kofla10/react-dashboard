import React from 'react'
import styled from 'styled-components'
import { IoStatsChartSharp } from 'react-icons/io5'

import { themeColor, hoverEffect, themeColorIncrease } from '../utils/utils'

const Ganancia = () => {
  return (
   <>
    <EarningsCard>
        {/* <h1>this is a test</h1> */}
        <CardContetn>
          <Chart>
            <IoStatsChartSharp/>
          </Chart>
            <EarningsText>
              Ganancias
            </EarningsText>
            <Earning>
              $ 3,000.00
            </Earning>
            <EarningsIncrease>
              + 10% desde el mes pasado
            </EarningsIncrease>
        </CardContetn>
    </EarningsCard>
   </>
  )
}

export default Ganancia

const EarningsCard = styled.div`
    height: 100%;
    width: 14rem;
    background-color: ${themeColor};
    height: max-content; //ocupa toda la altura que tiene el padrepadding: 1rem;
    transition: 0ms.45 ease-in-out;
    border-radius: 1rem;
    color: white;
    
    &:hover{
        box-shadow: ${hoverEffect}
    }

    @media screen and ( min-width: 320px ) and ( max-width:1080px ) {
        width: 80%;
    }
`

const CardContetn = styled.div`
  margin: 1rem;
`

const Chart = styled.div`
  display: flex;
  justify-content: center;

  svg{
    height: 4rem;
    width: 4rem;
  }
`
const EarningsText = styled.h3`
  text-align: center;
  font-weight: normal;
  padding: 0.4rem 0;
`

const Earning = styled.h2`
  text-align: center;
`

const EarningsIncrease = styled.h5`
  text-align: center;
  font-weight: normal;
  background-color: ${themeColorIncrease};
  padding: 0.5rem;
  border-radius: 2rem;
`