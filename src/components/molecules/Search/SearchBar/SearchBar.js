import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import IconLoading from '../../../../assets/IconLoading';
import IconClose from '../../../../assets/IconClose';
import IconSearch from '../../../../assets/IconSearch';
import Box from '../../../atoms/Box';
import Form from "../../../atoms/Form";
import Text from "../../../atoms/Text";
import Input from "../../../atoms/Input";
import List from '../../../atoms/List';
import ListItem from "../../../atoms/ListItem";
import { useDispatch, useSelector } from 'react-redux';
import { searchDrugs, setDrug } from "../../../../redux/actions/searchActions";
import { useTranslation } from 'react-i18next';
import { getCovariantById, getCovariant } from '../../../../redux/actions/covariantActions';
import { simulatorReset } from '../../../../redux/actions/simulatorActions';
import IconSad from '../../../../assets/IconSad';
import Messages from '../../Messages/Messages';
const SearchBar = () => {
    const dispatch = useDispatch();
    const isLoading = useSelector(state => state.search.isLoading);
    const searchDrug = useSelector(state => state.search);
    const activeDrug = useSelector(state => state.search.selectedDrug);
    const [selectedDrug, setSelectedDrug] = useState();
    const [toggleList, setToggleList] = useState(false);
    const [toggleClose, setToggleClose] = useState(false);
    const [limit, setLimit] = useState(20);
    const [drugList, setDrugList] = useState();
    const { t, i18n } = useTranslation();

    const [searchQuery, setSearchQuery] = useState(null);


    //set drug list
    useEffect(() => {
        if (searchDrug && searchDrug.drugs && searchDrug.drugs.data && searchDrug.drugs.data.length > 0 ) {
            setDrugList(searchDrug)
        }else{
            setDrugList([])
        }

        
    }, [searchDrug]);


    //handle key up
    const handleOnKeyUp = (e) => {
        let payload = {
            search: e.target.value,
            limit: limit
        }

        setSearchQuery(e.target.value);

        //set selected drug
        setSelectedDrug(e.target.value);
        //dispatch search drug actions
        if (e.target.value.length >= 3) {
            dispatch(searchDrugs(payload));
            //toggle drug list
            setToggleList(true);
        } else if (e.target.value.length === 0) {
            //toggle drug list
            setToggleList(false);
        }
    };

    //handle close 
    const handleClose = () => {
        setToggleList(false);
        setToggleClose(false);
        setSelectedDrug("");
        localStorage.removeItem('selectedDrug');
        dispatch(setDrug(""));
        dispatch(simulatorReset());
        setDrugList([]);

    };
    //handle click drug
    const handleClickDrug = (selectedDrug) => {
        setToggleList(false);
        setToggleClose(true);
        dispatch(setDrug(selectedDrug));
        setSelectedDrug(activeDrug);
        localStorage.setItem('selectedDrug', JSON.stringify(selectedDrug));
        if (selectedDrug && selectedDrug.id) {
            //generate dynamic covariant form
            dispatch(getCovariantById(selectedDrug.id, i18n.language));

        }
    };

    useEffect(() => {
        if (activeDrug && activeDrug.id) {
            setToggleClose(true);
            setSelectedDrug(activeDrug);
        }

    }, [activeDrug])



    //handle form submit
    const handleFormSubmit = (e) => {
        e.preventDefault();

    }

    return (
        <>

            <Form onSubmit={(e) => handleFormSubmit(e)} className="py-10 sm:py-2 sm:bg-yellow-300">
                <Box className="flex flex-col justify-center items-center">
                    <Box className="2xl:max-w-2xl xl:max-w-xl lg:max-w-xl md:max-w-xl sm:w-11/12 pb-8 relative">
                        <Text className="text-1xl font-bold 2xl:text-left lg:text-left  pt-4 pb-2 sm:text-center">
                            {t("search.title")}
                        </Text>
                        <Box className="flex">
                            <Box className="w-full relative">
                                <Input
                                    required
                                    placeholder={t('search.placeholder')}
                                    onChange={(e) => handleOnKeyUp(e)}
                                    value={selectedDrug && selectedDrug.label && selectedDrug.label}
                                    className="placeholder-gray-400 font-semibold py-3 pr-8 pl-10 block w-full rounded-lg  border-gray-300 shadow-sm hover:shadow-md focus:border-green-100 focus:ring focus:ring-green-50 focus:ring-opacity-50 border-gray-300"
                                />
                                <Box className="bg-white p-1 absolute cursor-pointer left-2 top-3">
                                    <IconSearch />

                                </Box>
                                {
                                    (toggleClose) ?
                                        <Box onClick={handleClose} className="bg-white bg-gray-200 hover:bg-green-400 p-1 hover:shadow-sm rounded-lg absolute cursor-pointer right-0 top-2.5 right-2">
                                            <IconClose />
                                        </Box>
                                        : ''
                                }

                                {
                                    (isLoading) ?
                                        <Box className="bg-white p-1 hover:shadow-sm rounded-lg absolute cursor-pointer right-0 top-1.5 right-2">
                                            <IconLoading classNames="h-7 w-7 animate-spin mr-2" pathFillColor="green" strokeColor="green" />
                                        </Box>
                                        : ''
                                }
                            </Box>
                        </Box>
                        <Box className="flex justify-between">
                            <Text className="pt-2 text-xs 2xl:text-left lg:text-left  sm:text-center">
                                eg - Doliprane
                                </Text>
                            {
                                (selectedDrug && selectedDrug.url && selectedDrug.url) ?
                                    <Text className="pt-2 text-blue-500 hover:text-black font-semibold text-xs 2xl:text-right lg:text-right  sm:text-center">
                                        <a target="_blank" href={selectedDrug && selectedDrug.url && selectedDrug.url}>
                                            Drug info
                                    </a>
                                    </Text> : ''
                            }

                        </Box>


                        {
                            (toggleList) ?
                                <Box className="suggestion-list absolute z-50 w-full">
                                    <List className="max-h-80 overflow-y-scroll border-gray-300  bg-green-600 rounded-lg shadow-sm">
                                        {
                                            drugList && drugList.drugs && drugList.drugs.data && drugList.drugs.data.map((drug, index) => (
                                                <ListItem onClick={() => handleClickDrug(drug)} className=" cursor-pointer py-2 px-3 text-white block hover:bg-yellow-100 hover:text-black" key={index}>
                                                    {
                                                        drug.label
                                                    }
                                                </ListItem>
                                            ))
                                        }
                                    </List>
                                </Box>
                                :
                                ''
                        }
                    </Box>
                </Box>
                <Text className="text-center pb-4 px-4 sm:text-sm">
                    {t('search.description')}
                </Text>
            </Form>
        
            {
                                (searchQuery && searchDrug && searchDrug.drugs && searchDrug.drugs.data && searchDrug.drugs.data.length == 0) ?
                                    <Messages type="error">
                                        No drugs found
                                    </Messages>
                                    : ''
                            }
        </>
    )
}

export default SearchBar;