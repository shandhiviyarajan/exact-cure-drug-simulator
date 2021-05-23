import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Container from '../../atoms/Container';
import Box from '../../atoms/Box';
import Text from '../../atoms/Text';
import IconInfo from '../../../assets/IconInfo';
import { setMoleculeAction } from "../../../redux/actions/simulatorActions";
const MoleculeDropdown = () => {
    const selectedDrug = useSelector(state => state.search.selectedDrug);
    const results = useSelector(state => state.simulator.results);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setMoleculeAction(0));
    });

    const setMolecule = (e) => {
        dispatch(setMoleculeAction(parseInt(e.target.value)));
    }
    return (
        <>
            {
                (results && results.data && results.data.data && selectedDrug) ?
                    <Container className="mx-auto pt-4">
                        <Text className="my-4 sm:px-4 text-yellow-500 2xl:text-xl lg:text-4xl md:text-2xl sm:text-xl text-center font-semibold">
                            Select a molecule to draw the chart
                           </Text>
                        {
                            (selectedDrug && selectedDrug.id && results && results.data.data[0].molecule) ?
                                <select onChange={(e) => setMolecule(e)} name="molecule"
                                    className="cursor-pointer block bg-green-400 hover:bg-green-500 hover:shadow-lg text-white w-80 mx-auto border border-gray-300 rounded-lg  h-12 px-4 font-bold  appearance-none focus:border-green-100 focus:ring hover:shadow-sm focus:ring-green-50 focus:ring-opacity-50"
                                    placeholder="Choose Moleucle">
                                    {
                                        results.data.data.map((data, i) => (
                                            <option key={i} value={i}>{data.molecule.label}</option>
                                        ))
                                    }
                                </select>
                                :
                                <Box className="max-w-screen-sm mx-auto  bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative shadow-md" role="alert">
                                    <Box className="flex ">
                                        <Box className="py-1 ">
                                            <IconInfo classNames="fill-current h-5 w-5 text-red-700 mr-4" />
                                        </Box>
                                        <Box>
                                            <Text className="font-bold">No molecules found !</Text>
                                        </Box>
                                    </Box>
                                </Box>
                        }</Container>
                    : ''
            }
        </>
    )
}

export default MoleculeDropdown;