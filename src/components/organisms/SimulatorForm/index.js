import React, { useEffect, useState } from 'react';
import Box from '../../atoms/Box';
import Button from '../../atoms/Button';
import Container from '../../atoms/Container';
import Form from '../../atoms/Form';
import Text from '../../atoms/Text';
import CovariateForm from '../../molecules/CovariateForm';
import DosageForm from '../../molecules/DosageForm';
import IconLoading from '../../../assets/IconLoading';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import Messages from '../../molecules/Messages/Messages';
import { simulatorStart, simulatorFail } from '../../../redux/actions/simulatorActions';
import IconSad from '../../../assets/IconSad';

const Error = ({ simulationError }) => {
    return (
        (simulationError && simulationError.error && simulationError.error.message && simulationError.error.message || simulationError.error && simulationError.error.error) ?
            <>
                <Messages type="error">
                    {
                        simulationError.error.message
                    }
                    {
                        (simulationError.error.error) ? 'Simulation not applicable' : ''
                    }
                </Messages>

            </>
            : ''
    )
}
const Warning = () => (
    <Messages type='warning'>
        Not simulable <br />No covariates for this drug
    </Messages>
)

const SimulatorForm = () => {
    const dispatch = useDispatch();
    const { t, i18n } = useTranslation();
    const form = useSelector(state => state.form);
    const isSimulating = useSelector(state => state.simulator.isSimulating);
    const stateCovariant = useSelector(state => state.covariant);
    const selectedDrug = useSelector(state => state.search.selectedDrug);
    const isLoading = useSelector(state => state.covariant.isLoading);
    const simulationError = useSelector(state => state.simulator);
    const searchDrug = useSelector(state => state.search);
    const [simulatorPayload, setSimulatorPayload] = useState(
        {
            "params": {
                locale: i18n.language
            },
            "subject": {},
            "prescription": {}
        }
    );

    const clearSimulatorError = () => {
        dispatch(simulatorFail(null));
    }

    useEffect(() => {
        setSimulatorPayload(prevState => ({
            ...prevState,
            subject: form && form.covarient_form && form.covarient_form,
            prescription: form && form.dosage_form && form.dosage_form,

        }))

    }, [form])

    const handleSimulator = (e) => {
        e.preventDefault();
        dispatch(simulatorStart(simulatorPayload));
    };
    return (
        <>
            {
                (selectedDrug &&
                    selectedDrug.id &&
                    stateCovariant &&
                    stateCovariant.form &&
                    stateCovariant.form.data &&
                    stateCovariant.form.data.data &&
                    stateCovariant.form.data.data.covariate_groups &&
                    stateCovariant.form.data.data.covariates) ?
                    (stateCovariant.form.data.data.covariate_groups.length > 0 &&
                        stateCovariant.form.data.data.covariates.length > 0) ?
                        (!selectedDrug && selectedDrug.is_simulable) ?
                            <Warning /> :

                            <Form onSubmit={handleSimulator}>
                                <Error simulationError={simulationError} />
                                {
                                    (selectedDrug && selectedDrug.molecules && selectedDrug.molecules[0]) ?
                                        <Text className="my-4 sm:px-4 text-yellow-500 2xl:text-4xl lg:text-4xl md:text-2xl sm:text-md text-center font-semibold">
                                            Personalized {
                                                selectedDrug.molecules[0].label
                                            } Simulator
                     </Text>
                                        :
                                        <Text className="my-4 sm:px-4 text-yellow-500 2xl:text-4xl lg:text-4xl md:text-2xl sm:text-xl text-center font-semibold">
                                            Personalized Paracetamol Simulator
                     </Text>
                                }
                                <Container className="lg:w-7/12 md:w-7/12 sm:w-full px-4 sm:px-2 mx-auto">
                                    <Box className="grid grid-cols-4 gap-4">
                                        <Box className="lg:col-span-2 sm:col-span-4">
                                            <CovariateForm />
                                        </Box>
                                        <Box className="lg:col-span-2 sm:col-span-4">
                                            <DosageForm />
                                        </Box>
                                    </Box>
                                    <Button type="submit"
                                        className="mx-auto  mt-4 flex text-xl items-center rounded-lg border-gray-300 shadow-sm bg-green-400 px-8 py-5 font-bold text-white hover:bg-green-600 hover:shadow-md active:bg-green-100 active:ring-green-50 active:ring-opacity-50">
                                        {
                                            (isSimulating) ? <IconLoading /> : ''
                                        }
                                        {t("search.simulator")}
                                    </Button>
                                </Container>
                            </Form>

                        : <Messages type="error">
                            Coudn't find covariant form for the selected drug.
                        </Messages>
                    :
                    (isLoading) ?
                        <Box className="flex item-center block w-full justify-center my-8">
                            <IconLoading classNames="animate-spin h-8 w-8 text-center max-auto"
                                pathFillColor="rgb(252, 211, 77)"
                                strokeColor="rgb(252, 211, 77)" />
                        </Box>
                        :
                        <>
                            <Messages type="info">
                                Please search and select a drug to load the
                                covariates and dosage forms.
                    </Messages>



                        </>


            }
        </>
    )
}

export default SimulatorForm;