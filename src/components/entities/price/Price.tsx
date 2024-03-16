import { FC, FormEvent, ReactElement } from "react";
import { Modal, Table } from "src/components/shared";
import { useControls, useEditForm, useServerData, useTableHeadings } from "src/global/hooks";
import { PRICES_URL } from "src/router/consts";
import { FORM_LABEL } from "./helpers/consts";
import { ACTIVE, INACTIVE, MODAL_HEADING, SAVE_BTN } from "src/global/helpers/consts";
import { Controls } from "src/components/shared/controls";
import { ALL } from "../page/helpers/consts";

export const Price: FC = (): ReactElement => {
  const { displayData } = useServerData(PRICES_URL);
  const { tableHeadings } = useTableHeadings(displayData);

  const {
    dataForEdit,
    openEditForm,
    isOpen,
    closeModal,
    submitData,
    handleInput,
  } = useEditForm(PRICES_URL);

  const { handleSearchInput, handleSelectStatus, handleSort } = useControls(
    ["description"],
    "description"
  );

  return (
    <>
      <Controls
        options={[ALL, ACTIVE, INACTIVE]}
        handleInput={(e: FormEvent<HTMLInputElement>) =>
          handleSearchInput(e)
        }
        handleChange={handleSelectStatus}
        handleFilter={handleSort}
        filterOptions={["reset", "by desc", "by asc"]}
      />
      <Table
        tableData={displayData}
        tableHeadings={tableHeadings}
        openEdit={openEditForm}
      />
      {isOpen && (
        <Modal heading={MODAL_HEADING} closeModal={closeModal}>
          <form onSubmit={(e) => submitData(e)}>
            <div className="form-group">
              <label>{FORM_LABEL}</label>
              <input
                type="text"
                placeholder={FORM_LABEL}
                defaultValue={dataForEdit && dataForEdit[FORM_LABEL]}
                name={FORM_LABEL}
                onInput={(e) => handleInput(e)}
              />
            </div>
            <input type="submit" value={SAVE_BTN} />
          </form>
        </Modal>
      )}
    </>
  );
};
