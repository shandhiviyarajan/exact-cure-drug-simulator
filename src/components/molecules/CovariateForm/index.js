import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Text from "../../atoms/Text";
import Box from "../../atoms/Box";
import Label from "../../atoms/Label";
import IconLoading from "../../../assets/IconLoading";
import { covariantForm } from "../../../redux/actions/formActions";
import { useTranslation } from "react-i18next";
import SimpleReactValidator from "simple-react-validator";

const CovariantForm = () => {
  const { t, i18n } = useTranslation();
  const [patient, setPatient] = useState({
    birthday: "1986-03-26",
  });
  const stateCovariant = useSelector((state) => state.covariant);
  const [form_groups, setFormGroups] = useState([]);
  const [form_items, setFormItems] = useState([]);
  const dispatch = useDispatch();
  const selectedDrug = useSelector((state) => state.search.selectedDrug);
  const [focusedItem, setFocusedItem] = useState(0);

  const validator = useRef(new SimpleReactValidator());
  //handle patient inputs
  const handleInput = (e) => {
    if (e.target.type === "number") {
      setPatient((prevState) => ({
        ...prevState,
        [e.target.name]: parseFloat(e.target.value),
      }));
    } else {
      setPatient((prevState) => ({
        ...prevState,
        [e.target.name]: e.target.value,
      }));
    }

    if (e.target.type === "checkbox") {
      setPatient((prevState) => ({
        ...prevState,
        [e.target.name]: e.target.value ? false : true,
      }));
    }
  };

  //dispatch intake patient data
  useEffect(() => {
    validator.current.showMessages();
    dispatch(covariantForm(patient));
  }, [patient]);

  useEffect(() => {
    if (
      stateCovariant &&
      stateCovariant.form &&
      stateCovariant.form.data &&
      stateCovariant.form.data.data &&
      stateCovariant.form.data.data.covariate_groups
    ) {
      setFormGroups(stateCovariant.form.data.data.covariate_groups);
    }
  }, [stateCovariant]);

  useEffect(() => {
    if (
      stateCovariant &&
      stateCovariant.form &&
      stateCovariant.form.data &&
      stateCovariant.form.data.data &&
      stateCovariant.form.data.data.covariates
    ) {
      setFormItems(stateCovariant.form.data.data.covariates);
    }
  }, [stateCovariant]);

  const handleFocus = (index) => {
    setFocusedItem(index);
  };

  //container class name
  const classNames =
    "mb-2 block py-3 w-full rounded-lg font-semibold border-gray-300 shadow-sm hover:shadow-md focus:border-green-100 focus:ring focus:ring-green-50 focus:ring-opacity-50";
  return (
    <>
      {selectedDrug && selectedDrug.id ? (
        <Box className="relative bg-gray-100  border-gray-100 px-6 py-6 rounded">
          {stateCovariant.isLoading ? (
            <IconLoading />
          ) : (
            form_groups &&
            form_groups
              .sort((a, b) => a.position - b.position)
              .map((group, index) => (
                <Box className="w-full relative mb-4" key={index}>
                  <Text className="text-base text-left">
                    <strong>{group.description.name}</strong>
                  </Text>

                  {form_items &&
                    form_items.map((item, index) =>
                      //render number inputs
                      item.covariate_group_id === group.id &&
                      (item.cov_spec.type === "float" ||
                        item.cov_spec.type === "int") ? (
                        <Box className="flex flex-col relative" key={index}>
                          <Label className="my-2 text-sm font-medium text-gray-400 flex justify-between">
                            <span>{item.description.name}</span>
                            <span className="text-yellow-500 font-semibold">
                              ({item.cov_spec.unit})
                            </span>
                          </Label>
                          <input
                            type="number"
                            required={
                              item.cov_type === "mandatory" ? true : false
                            }
                            name={item.cov_key}
                            step="0.1"
                            id={item.cov_key}
                            min={item.cov_spec?.min}
                            max={item.cov_spec?.max}
                            placeholder={item.description.placeholder}
                            onChange={(e) => handleInput(e)}
                            onMouseLeave={() => handleFocus(-1)}
                            onMouseEnter={() => handleFocus(index)}
                            onFocus={() => handleFocus(index)}
                            className={classNames}
                            value={(patient && patient[item.cov_key]) || ""}
                          />
                        </Box>
                      ) : //render select inputs
                      item.covariate_group_id === group.id &&
                        item.cov_spec.type === "categorical" ? (
                        <Box className="flex flex-col relative" key={index}>
                          <Label className="my-2 text-sm font-medium text-gray-400 flex justify-between">
                            <span>{item.description.name}</span>
                            <span className="text-yellow-500 font-semibold">
                              {item.cov_spec.unit}
                            </span>
                          </Label>
                          <select
                            onMouseLeave={() => handleFocus(-1)}
                            onMouseEnter={() => handleFocus(index)}
                            onChange={(e) => handleInput(e)}
                            required={
                              item.cov_type === "mandatory" ? true : false
                            }
                            name={item.cov_key}
                            value={
                              (patient && patient[item.cov_key]) || undefined
                            }
                            placeholder={item.description.placeholder}
                            className={classNames}
                          >
                            <option value="">
                              {item.description.placeholder}
                            </option>
                            {item.cov_spec.modality &&
                              item.cov_spec.modality.map((option, i) => (
                                <option value={option} key={i}>
                                  {option}
                                </option>
                              ))}
                          </select>
                        </Box>
                      ) : //render boolean inputs
                      item.covariate_group_id === group.id &&
                        item.cov_spec.type === "boolean" ? (
                        <Box className="relative" key={index}>
                          <Box
                            className="bg-gray-100 rounded-lg px-4 hover:bg-green-100 mb-2 pr-2 flex py-1 px-1"
                            onMouseLeave={() => handleFocus(-1)}
                            onMouseEnter={() => handleFocus(index)}
                          >
                            <input
                              type="checkbox"
                              required={
                                item.cov_type === "mandatory" ? true : false
                              }
                              id={item.cov_key}
                              name={item.cov_key}
                              value={
                                    (patient && patient[item.cov_key]) || null
                              }
                              className="form-checkbox mt-2.5 mr-2"
                              placeholder={item.description.placeholder}
                              onChange={(e) => handleInput(e)}
                              onMouseLeave={() => handleFocus(-1)}
                              onMouseEnter={() => handleFocus(index)}
                            />
                            <Label
                              forID={item.cov_key}
                              className="flex justify-between cursor-pointer my-2 text-sm font-medium text-dark"
                            >
                              <span>{item.description.name}</span>
                              <span className="text-yellow-500 font-semibold">
                                {item.cov_spec.unit}
                              </span>
                            </Label>
                          </Box>
                        </Box>
                      ) : item.covariate_group_id === group.id &&
                        item.cov_spec.type === "date" ? (
                        <Box className="w-full relative" key={index}>
                          <Label className="my-2 text-sm font-medium text-gray-400 flex justify-between">
                            <span>{item.description.name} </span>
                            <span className="text-yellow-500 font-semibold">
                              {item.cov_spec.unit}
                            </span>
                          </Label>
                          <input
                            type="date"
                            value={
                              (patient && patient[item.cov_key]) || undefined
                            }
                            className={classNames}
                            placeholder={item.description.placeholder}
                            name={item.cov_key}
                            onChange={(e) => handleInput(e)}
                          />
                        </Box>
                      ) : (
                        ""
                      )
                    )}
                </Box>
              ))
          )}
        </Box>
      ) : (
        ""
      )}
    </>
  );
};

export default CovariantForm;
