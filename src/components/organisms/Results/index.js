import React from 'react';
import DrawChart from '../../molecules/DrawChart';
import Container from '../../atoms/Container';
import MoleculeDropdown from '../../molecules/MoleculeDropdown';

const Results = () => {
    return (
        <>
            <Container>
                <MoleculeDropdown />
                <DrawChart/>
            </Container>
        </>
    )
}

export default Results;