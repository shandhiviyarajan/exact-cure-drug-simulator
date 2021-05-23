import React from 'react';
import Logo from '../../../assets/Logo';
import Container from '../../../components/atoms/Container/index'
import Box from "../../atoms/Box";
import { Menu, Transition } from "@headlessui/react";
import { useTranslation } from 'react-i18next';
import { getCovariantById } from '../../../redux/actions/covariantActions';
import { useDispatch, useSelector } from 'react-redux';
const Header = () => {
    const { i18n } = useTranslation();
    const dispatch = useDispatch();
    const selectedDrug = useSelector(state => state.search.selectedDrug);
    const changeLanguage = (language) => {
        i18n.changeLanguage(language)

        //get locale form data with drug id
        if (selectedDrug && selectedDrug.id) {
            setTimeout(() => {
                dispatch(getCovariantById(selectedDrug.id, i18n.language))
            }, 100);
        }
    }


    return (
        <>
            <Container className="container mx-auto z-50">
                <header className="flex justify-between py-4">
                    <Logo />
                    <Box className="flex items-center">

                        <div className="relative inline-block text-left">
                            <Menu>
                                {({ open }) => (
                                    <>
                                        <span className="rounded-md shadow-sm">
                                            <Menu.Button className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium leading-5 text-gray-700 transition duration-150 ease-in-out bg-white border border-gray-300 rounded-md hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800">
                                                <span>Language</span>
                                                <svg
                                                    className="w-5 h-5 ml-2 -mr-1"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>
                                            </Menu.Button>
                                        </span>

                                        <Transition
                                            show={open}
                                            enter="transition ease-out duration-100"
                                            enterFrom="transform opacity-0 scale-95"
                                            enterTo="transform opacity-100 scale-100"
                                            leave="transition ease-in duration-75"
                                            leaveFrom="transform opacity-100 scale-100"
                                            leaveTo="transform opacity-0 scale-95"
                                        >
                                            <Menu.Items
                                                static
                                                className="absolute right-0 w-56 mt-2 origin-top-right bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg outline-none"
                                            >
                                                <div className="py-1">
                                                    <Menu.Item onClick={(e) => changeLanguage('en')}>
                                                        {({ active }) => (
                                                            <a
                                                           
                                                                className={`${active
                                                                    ? "bg-gray-100 text-gray-900"
                                                                    : "text-gray-700"
                                                                    } flex justify-between w-full px-4 py-2 text-sm leading-5 text-left`}
                                                            >
                                                                En (English)
                                                            </a>
                                                        )}
                                                    </Menu.Item>
                                                    <Menu.Item onClick={(e) => changeLanguage('fr')}>
                                                        {({ active }) => (
                                                            <a
                                                               
                                                                className={`${active
                                                                    ? "bg-gray-100 text-gray-900"
                                                                    : "text-gray-700"
                                                                    } flex justify-between w-full px-4 py-2 text-sm leading-5 text-left`}
                                                            >
                                                                Fr (French)
                                                            </a>
                                                        )}
                                                    </Menu.Item>

                                                    <Menu.Item onClick={(e) => changeLanguage('es')}>
                                                        {({ active }) => (
                                                            <a
                                                           
                                                                className={`${active
                                                                    ? "bg-gray-100 text-gray-900"
                                                                    : "text-gray-700"
                                                                    } flex justify-between w-full px-4 py-2 text-sm leading-5 text-left`}
                                                            >
                                                                Es (Spanish)
                                                            </a>
                                                        )}
                                                    </Menu.Item>

                                                    {/* <Menu.Item onClick={(e) => changeLanguage('br')}>
                                                        {({ active }) => (
                                                            <a
                                                            
                                                                className={`${active
                                                                    ? "bg-gray-100 text-gray-900"
                                                                    : "text-gray-700"
                                                                    } flex justify-between w-full px-4 py-2 text-sm leading-5 text-left`}
                                                            >
                                                                Br (Brazil)
                                                            </a>
                                                        )}
                                                    </Menu.Item> */}
                                                </div>
                                            </Menu.Items>
                                        </Transition>
                                    </>
                                )}
                            </Menu>
                        </div>


                        {/* <nav>
                            <ul>
                                <li><Link to="/" className="block border border-solid px-4 py-2 rounded-md shadow-sm bg-grey-300  font-bold hover:bg-green-600 hover:text-white">Search</Link></li>
                                <li><Link to="/simulator" className="block border border-solid px-4 py-2 rounded-md shadow-sm bg-grey-300  font-bold hover:bg-green-600 hover:text-white">Simulator</Link></li>
                            </ul>
                        </nav> */}

                    </Box>
                </header>
            </Container>
        </>
    )
};
export default Header;