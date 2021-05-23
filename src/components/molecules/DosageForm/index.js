import React, { useEffect, useState } from "react";
import Text from "../../atoms/Text";
import Box from "../../atoms/Box";
import Label from "../../atoms/Label";
import Button from "../../atoms/Button";
import { useDispatch, useSelector } from "react-redux";
import { dosageFormStart } from "../../../redux/actions/formActions";
import { useTranslation } from "react-i18next";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import IconCalendar from "../../../assets/IconCalendar";
import IconClose from "../../../assets/IconClose";
import { registerLocale, setDefaultLocale } from "react-datepicker";
import en from "date-fns/locale/en-GB";
import fr from "date-fns/locale/fr";
import es from "date-fns/locale/es";

const DosageForm = () => {
  registerLocale("es", es);
  registerLocale("fr", fr);
  registerLocale("en", en);

  const { t, i18n } = useTranslation();
  //get dosage form payload
  const form = useSelector((state) => state.form);
  const selectedDrug = useSelector((state) => state.search.selectedDrug);

  //prescription payload
  const [prescription, setPrescription] = useState({
    drug_id: selectedDrug && selectedDrug.id,
    administration_type: "oral",
    start_date: new Date(),
    end_date: new Date(new Date().setDate(new Date().getDate() + 7)),
    intakes: "",
  });

  //dosage form state
  const [intakes, setIntakes] = useState([]);

  //dosage and direction payload
  const dosage = {
    quantity: 0,
    time: 0,
    interval: 24,
  };

  useEffect(() => {
    setIntakes([dosage]);
  }, []);

  //create dispatcher
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(dosageFormStart(prescription));
  }, [intakes, prescription]);

  //handle add dosage
  const addDose = (e) => {
    e.preventDefault();
    setIntakes((prevState) => [...prevState, dosage]);
    setPrescription((prevState)=>({
        ...prevState,
        intakes:intakes
    }));
  };

  //handle dosage form inputs
  const handleDosageChange = (e, index) => {
    let newArr = [...intakes];
    newArr[index][e.target.name] =
      e.target.name == "time" ? e.target.value : parseFloat(e.target.value);
    //set intakes
    setIntakes(newArr);
    //set intakes for prescription payload
    setPrescription((prevState) => ({
      ...prevState,
      intakes: intakes
    }));
  };
  //remove dosage from dosage form
  const removeDose = (index) => {
    var newArr = [...intakes];
    newArr.splice(index, 1);
   
    setPrescription((prevState)=>({
        ...prevState,
        intakes:newArr
    }));
    setIntakes(newArr);

  };

  //handle start, end date
  const handleStartDate = (e) => {
    setPrescription((prevState) => ({
      ...prevState,
      start_date: e,
    }));
  };
  //handle start, end date
  const handleEndDate = (e) => {
    setPrescription((prevState) => ({
      ...prevState,
      end_date: e,
    }));
  };

  return (
    <>
      <Box className="bg-gray-100  border-gray-100 px-6 py-6 rounded">
        <Text className="text-base text-left font-bold pb-2">
          {t("search.covariant_form")}
        </Text>
        <Box className="grid grid-cols-2 gap-4">
          <Box className="w-full">
            <Label className="my-2 text-sm font-medium text-gray-400">
              Start Date
            </Label>
            <Box className="relative">
              <DatePicker
                required
                showWeekNumbers
                locale={i18n.language}
                selected={prescription.start_date}
                className="block py-3 w-full rounded-lg  border-gray-300 shadow-sm hover:shadow-md focus:border-green-100 focus:ring focus:ring-green-50 focus:ring-opacity-50"
                placeholder="Start date"
                onChange={(e) => handleStartDate(e)}
              />

              <Box className="absolute top-3.5 right-4">
                <IconCalendar color="#d8d8d8" />
              </Box>
            </Box>
          </Box>
          <Box className="w-full">
            <Label className="my-2 text-sm font-medium text-gray-400">
              End Date
            </Label>
            <Box className="relative">
              <DatePicker
                required
                showWeekNumbers
                locale={i18n.language}
                selected={prescription.end_date}
                className="block py-3 w-full rounded-lg  border-gray-300 shadow-sm hover:shadow-md focus:border-green-100 focus:ring focus:ring-green-50 focus:ring-opacity-50"
                placeholder="Start date"
                onChange={(e) => handleEndDate(e)}
              />

              <Box className="absolute top-3.5 right-4">
                <IconCalendar color="#d8d8d8" />
              </Box>
            </Box>
          </Box>
        </Box>
        <table className="w-full mt-6">
          <thead>
            <tr>
              <th className="text-left">
                <Label className="my-2 text-sm font-medium text-gray-400">
                  Quantity
                </Label>
              </th>
              <th className="text-left">
                <Label className="my-2 text-sm font-medium text-gray-400">
                  Time
                </Label>
              </th>
              <th className="text-left">
                <Label className="my-2 text-sm font-medium text-gray-400">
                  Interval
                </Label>
              </th>
              {intakes && intakes.length > 1 ? (
                <th className="text-left"></th>
              ) : (
                ""
              )}
            </tr>
          </thead>
          <tbody>
            {intakes.map((v, index) => (
              <tr key={index}>
                <td className="px-2 py-2">
                  <input
                    type="number"
                    step="0.1"
                    required
                    className="block py-3 w-full rounded-lg  border-gray-300 shadow-sm hover:shadow-md focus:border-green-100 focus:ring focus:ring-green-50 focus:ring-opacity-50"
                    placeholder="Quantity"
                    onChange={(e) => handleDosageChange(e, index)}
                    name="quantity"
                  ></input>
                </td>
                <td className="px-2 py-2">
                  <input
                    type="time"
                    required
                    className="block py-3 w-full rounded-lg  border-gray-300 shadow-sm hover:shadow-md focus:border-green-100 focus:ring focus:ring-green-50 focus:ring-opacity-50"
                    placeholder="Time"
                    name="time"
                    onChange={(e) => handleDosageChange(e, index)}
                  ></input>
                </td>
                <td className="px-2 py-2">
                  <input
                    type="number"
                    min="0"
                    step="0.1"
                    required
                    value={
                      intakes[index].interval
                    }
                    className=" block py-3 w-full rounded-lg  border-gray-300 shadow-sm hover:shadow-md focus:border-green-100 focus:ring focus:ring-green-50 focus:ring-opacity-50"
                    placeholder="Interval"
                    name="interval"
                    onChange={(e) => handleDosageChange(e, index)}
                  ></input>
                </td>
                {intakes && intakes.length > 1 ? (
                  <td>
                    <Button
                      type="button"
                      onClick={() => removeDose(index)}
                      className="items-center rounded-2xl shadow-sm  py-2 px-2 font-bold text-white hover:bg-gray-300 hover:shadow-md active:bg-green-100 active:ring-green-50 active:ring-opacity-50"
                    >
                      <IconClose />
                    </Button>
                  </td>
                ) : (
                  ""
                )}
              </tr>
            ))}
          </tbody>
        </table>
        <Box className="flex flex-end">
          <Button
            type="button"
            onClick={(e) => addDose(e)}
            className="text-base mt-4 items-center rounded-xl border-gray-300 shadow-sm bg-green-400 py-2 px-4 font-bold text-white hover:bg-green-600 hover:shadow-md active:bg-green-100 active:ring-green-50 active:ring-opacity-50"
          >
            + Add
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default DosageForm;
