import styled from 'styled-components'

export const BoxElement = styled.div
`${({ width }) => width};
${({ height }) => height};
${({ margin }) => margin};
${({ padding }) => padding};
`