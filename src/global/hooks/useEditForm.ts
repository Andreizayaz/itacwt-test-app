import { useState, MouseEvent, FormEvent } from "react";
import { useSelector } from "react-redux";
import { selectServerData } from "src/store";
import { useModal } from "./useModal";
import { editServerData } from "src/api";

export const useEditForm = (url: string) => {
  const [payload, setPayload] = useState({});
  const [dataForEdit, setDataForEdit] = useState();
  const [id, setId] = useState<any>();
  const serverData = useSelector(selectServerData);

  const { isOpen, openModal, closeModal } = useModal();

  const openEditForm = (e: MouseEvent<HTMLTableSectionElement, MouseEvent>) => {
    const isEdit =
      (e.target as HTMLElement).classList.contains("edit-btn") &&
      (e.target as HTMLElement).closest("tr");
    if (isEdit) {
      const id = (e.target as HTMLElement).closest("tr")?.id;
      const temp = serverData.find((data) => data.id === id);
      setDataForEdit(temp);
      openModal();
      id && setId(id);
    }
  };

  const submitData = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const modifiedData = await editServerData(`${url}/${id}`, payload);
    closeModal();
    window.location.reload()
    return modifiedData;
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
