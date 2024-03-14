import { ChangeEvent, FC, FormEvent, ReactElement } from "react";
import { Modal, Table } from "src/components/shared";
import {
  useControls,
  useEditForm,
  useServerData,
  useTableHeadings,
} from "src/global/hooks";
import { PAGES_URL } from "src/router/consts";
import { ALL, FORM_LABEL } from "./helpers/consts";
import { ACTIVE, INACTIVE, MODAL_HEADING, SAVE_BTN, UPDATED_AT } from "src/global/helpers/consts";
import { Controls } from "src/components/shared/controls";

export const Page: FC = (): ReactElement => {
  const { displayData } = useServerData(PAGES_URL);
  const { tableHeadings } = useTableHeadings();

  const {
    dataForEdit,
    openEditForm,
    isOpen,
    closeModal,
    submitData,
    handleInput,
  } = useEditForm(PAGES_URL);

  const { handleSearchInput, handleSelectStatus } = useControls();

  return (
    <>
      <Controls
        options={[ALL, ACTIVE, INACTIVE]}
        handleInput={(e: FormEvent<HTMLInputElement>) =>
          handleSearchInput(e, ["title"])
        }
        handleChange={handleSelectStatus}
        handleFilter={function (e: ChangeEvent<HTMLSelectElement>): void {
          throw new Error("Function not implemented.");
        }}
        filterOptions={["first", "second"]}
      />
      <Table
        tableData={displayData}
        tableHeadings={tableHeadings}
        openEdit={openEditForm}
      />
      {isOpen && (
        <Modal heading={MODAL_HEADING} closeModal={closeModal}>
          <form onSubmit={(e) => submitData(e, UPDATED_AT)}>
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
