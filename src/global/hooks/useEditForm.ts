import { useState, MouseEvent, FormEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectSearchFilterData, setServerData } from "src/store";
import { useModal } from "./useModal";
import { editServerData, getServerData } from "src/api";

export const useEditForm = (url: string) => {
  const dispatch = useDispatch();
  const [payload, setPayload] = useState({});
  const [dataForEdit, setDataForEdit] = useState();
  const [id, setId] = useState<any>();
  const serverData = useSelector(selectSearchFilterData);

  const { isOpen, openModal, closeModal } = useModal();

  const openEditForm = (e: MouseEvent<HTMLTableSectionElement, MouseEvent>) => {
    const isEdit =
      (e.target as HTMLElement).classList.contains("edit-btn") &&
      (e.target as HTMLElement).closest("tr");
    if (isEdit) {
      const id = (e.target as HTMLElement).closest("tr")?.id;
      const temp = serverData.find((data) => data.id?.toString() === id);
      setDataForEdit(temp);
      openModal();
      id && setId(id);
    }
  };

  const submitData = async (
    e: FormEvent<HTMLFormElement>,
    updateDateKey?: string
  ) => {
    e.preventDefault();
    if (updateDateKey) {
      await editServerData(`${url}/${id}`, {
        ...payload,
        [updateDateKey]: new Date(),
      });
    } else {
      await editServerData(`${url}/${id}`, payload);
    }
    closeModal();
    const updatedData = await getServerData(url);
    dispatch(setServerData(updatedData));
  };

  const handleInput = (e: any) =>
    setPayload({ [e.target.name]: e.target.value });

  return {
    openEditForm,
    dataForEdit,
    isOpen,
    closeModal,
    submitData,
    handleInput,
  };
};
