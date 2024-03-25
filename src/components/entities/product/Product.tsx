import { FC, FormEvent, ReactElement } from "react";
import { Button, Modal, Table } from "src/components/shared";
import {
  useControls,
  useEditForm,
  useServerData,
  useTableHeadings,
} from "src/global/hooks";
import { PRODUCTS_URL } from "src/router/consts";
import { ALL, FORM_LABEL } from "./helpers/consts";
import {
  ACTIVE,
  EDIT_BTN,
  ID,
  INACTIVE,
  MODAL_HEADING,
  NO_RESULTS,
  SAVE_BTN,
  UPDATED_AT,
} from "src/global/helpers/consts";
import { Controls } from "src/components/shared/controls";
import { getClassNameForCell } from "src/global/helpers/functions";

export const Product: FC = (): ReactElement => {
  const { displayData } = useServerData(PRODUCTS_URL);
  const { tableHeadings } = useTableHeadings(displayData);

  const {
    dataForEdit,
    openEditForm,
    isOpen,
    closeModal,
    submitData,
    handleInput,
  } = useEditForm(PRODUCTS_URL);

  const { handleSearchInput, handleSelectStatus, handleSort } = useControls(
    ["name"],
    "name"
  );

  return (
    <>
      <Controls
        options={[ALL, ACTIVE, INACTIVE]}
        handleInput={(e: FormEvent<HTMLInputElement>) => handleSearchInput(e)}
        handleChange={handleSelectStatus}
        handleFilter={handleSort}
        filterOptions={["reset", "by desc", "by asc"]}
      />
      <Table tableHeadings={tableHeadings} openEdit={openEditForm}>
        {displayData.length ? (
          displayData.map((item) => (
            <tr key={item?.id} id={item?.id}>
              {Object.entries(item).map(
                ([key, value]: [string, any]) =>
                  key !== ID && (
                    <td key={value} className={getClassNameForCell(key, value)}>
                      {value}
                    </td>
                  )
              )}
              <td>
                <Button classes="edit-btn">{EDIT_BTN}</Button>
              </td>
            </tr>
          ))
        ) : (
          <p className="no-result">{NO_RESULTS}</p>
        )}
      </Table>
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
