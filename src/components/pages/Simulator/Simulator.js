import React from 'react';
import Container from '../../atoms/Container';
import SearchBar from '../../molecules/Search/SearchBar/SearchBar';
import Results from '../../organisms/Results';
import SimulatorForm from '../../organisms/SimulatorForm';


const Simulator = () =>{
    return(
        <>
            <Container className="mx-auto">
                <SearchBar/>
                <SimulatorForm/>
                <Results/>
           </Container>
        </>
    )
}

export default Simulator;